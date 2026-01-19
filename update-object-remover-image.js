const fs = require('fs');
const path = require('path');

console.log('🔄 REMPLACEMENT DE LA 2ÈME IMAGE OBJECT REMOVER\n');

const languages = ['en', 'fr', 'pt', 'es', 'de', 'ko', 'no'];
let totalFixed = 0;

// Remplacement de la 2ème image
const oldImage = '/images-optimized/ai-object-removal-example.webp';
const newImage = '/images-optimized/delete-objects-from-image-ai-new.webp';

console.log(`🔀 Remplacement de la 2ème feature image:`);
console.log(`   Ancienne: ${path.basename(oldImage)}`);
console.log(`   Nouvelle: ${path.basename(newImage)}\n`);

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

        if (content.includes(oldImage)) {
            content = content.replace(new RegExp(oldImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImage);
            fs.writeFileSync(file, content, 'utf8');

            const relativePath = path.relative(__dirname, file);
            console.log(`✅ ${relativePath}`);
            totalFixed++;
        }
    });
});

console.log(`\n✨ Terminé! ${totalFixed} fichiers mis à jour.`);
console.log(`\n📝 Nouvelle image: ${path.basename(newImage)}`);
