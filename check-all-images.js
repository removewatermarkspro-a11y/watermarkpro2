const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const files = dirents.map(dirent => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    });
    return Array.prototype.concat(...files);
}

const tsxFiles = getFiles(path.join(__dirname, 'app', 'blog')).filter(f => f.endsWith('.tsx'));
let missing = 0;
let totalCount = 0;
for (const f of tsxFiles) {
    const c = fs.readFileSync(f, 'utf8');
    // Match both <img src="..." and <Image src="..."
    const matches = [...c.matchAll(/<(?:img|Image)[^>]+src=["']([^"']+)["']/g)];
    for (const m of matches) {
        let p = m[1];
        if (p.startsWith('http') || p.startsWith('/_next') || p.startsWith('data:')) {
            console.log('EXTERNAL/DATA URL:', p, 'in', path.basename(path.dirname(f)));
            continue;
        }
        const filePath = path.join(__dirname, 'public', p);
        if (!fs.existsSync(filePath)) {
            console.log(`MISSING: ${p} in ${path.basename(path.dirname(f))}/page.tsx`);
            missing++;
        }
        totalCount++;
    }
}
console.log(`\nTotal local images checked: ${totalCount}`);
console.log(`Missing images: ${missing}\n`);
