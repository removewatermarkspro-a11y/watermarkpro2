const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

let totalFixed = 0;

for (const dir of dirs) {
    const pagePath = path.join(blogDir, dir, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Look for the duplicate FAQ section inside the HTML body string
    // The pattern is typically: <h2 id="faq">Frequently Asked Questions</h2> ... <div class="faq-item"> ... </div>` }}
    // We want to match from <h2 id="faq"> or <h2>Frequently Asked Questions</h2> down to just before ` }}`
    // But we have to be careful not to match the bottom React <section id="faq">.
    
    // The HTML string is inside dangerouslySetInnerHTML={{ __html: ` ... ` }}
    
    // Pattern to match: <h2[^>]*>(?:Frequently Asked Questions|FAQ)</h2> followed by anything up to the closing tick of the template literal
    const regex = /<h2[^>]*>(?:Frequently Asked Questions|FAQ)[\s\S]*?(?=`\s*\}\})/i;
    
    if (regex.test(content)) {
        console.log(`Found duplicate FAQ in ${dir}`);
        const newContent = content.replace(regex, '');
        fs.writeFileSync(pagePath, newContent, 'utf8');
        totalFixed++;
    }
}

console.log(`Fixed ${totalFixed} files.`);
