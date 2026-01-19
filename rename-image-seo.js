const fs = require('fs');
const path = require('path');

console.log('🔄 RENOMMAGE DE L\'IMAGE POUR LE SEO\n');

const languages = ['en', 'fr', 'pt', 'es', 'de', 'ko', 'no'];
let totalFixed = 0;

// Renommage pour un meilleur SEO
const oldName = '/images-optimized/delete-objects-from-image-ai-new.webp';
const newName = '/images-optimized/ai-object-remover-tool.webp';

console.log(`📝 Renommage SEO:`);
console.log(`   Ancien: ${path.basename(oldName)}`);
console.log(`   Nouveau: ${path.basename(newName)}\n`);

function findObjectRemoverFiles(dir) {
    const files = [];

    function walk(currentPath) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walk(fullPath);
            } else if (item.includes('ObjectRemover') && item.endsWith('.tsx')) {
                files.push(fullPath);
            }
        }
    }

    walk(dir);
    return files;
}

languages.forEach(lang => {
    const langDir = lang === 'en' ? path.join(__dirname, 'app') : path.join(__dirname, 'app', lang);
    const files = findObjectRemoverFiles(langDir);

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');

        if (content.includes(oldName)) {
            content = content.replace(new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newName);
            fs.writeFileSync(file, content, 'utf8');

            const relativePath = path.relative(__dirname, file);
            console.log(`✅ ${relativePath}`);
            totalFixed++;
        }
    });
});

console.log(`\n✨ Terminé! ${totalFixed} fichiers mis à jour.`);
console.log(`\n📝 Nom SEO-optimisé: ${path.basename(newName)}`);
