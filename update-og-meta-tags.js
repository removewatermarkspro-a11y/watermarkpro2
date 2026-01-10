const fs = require('fs');
const path = require('path');

// Mapping des pages vers leurs images OG
const pageMapping = {
    'app/watermark-remover/page.tsx': 'og-watermark-remover.jpg',
    'app/watermark-remover-video/page.tsx': 'og-video-watermark.jpg',
    'app/sora-watermark-remover/page.tsx': 'og-sora-remover.jpg',
    'app/background-remover/page.tsx': 'og-background-remover.jpg',
    'app/background-changer-ai/page.tsx': 'og-background-changer.jpg',
    'app/text-remover-ai/page.tsx': 'og-text-remover.jpg',
    'app/object-remover-ai/page.tsx': 'og-object-remover.jpg',
    'app/people-remover-ai/page.tsx': 'og-people-remover.jpg',
    'app/image-upscaler-ai/page.tsx': 'og-image-upscaler.jpg'
};

const stats = {
    updated: 0,
    errors: [],
    changes: []
};

function updateMetaTags(filePath, ogImage) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let modified = false;

        const baseUrl = 'https://removewatermarkspro.com';
        const newImageUrl = `${baseUrl}/${ogImage}`;

        // Pattern pour trouver l'ancien og-image-en.jpg
        const oldImagePattern = /https:\/\/removewatermarkspro\.com\/og-image-en\.jpg/g;

        // Remplacer dans openGraph.images
        if (content.match(oldImagePattern)) {
            content = content.replace(oldImagePattern, newImageUrl);
            modified = true;
            stats.changes.push(`${path.basename(filePath)}: Updated OpenGraph image`);
        }

        // Si pas de correspondance avec og-image-en.jpg, chercher d'autres patterns
        if (!modified) {
            // Pattern pour url dans images array
            const imageUrlPattern = /(url:\s*['"])([^'"]*og-[^'"]*\.jpg)(['"])/g;
            if (content.match(imageUrlPattern)) {
                content = content.replace(imageUrlPattern, `$1${newImageUrl}$3`);
                modified = true;
                stats.changes.push(`${path.basename(filePath)}: Updated image URL`);
            }

            // Pattern pour Twitter images
            const twitterPattern = /(images:\s*\[['"])([^'"]*og-[^'"]*\.jpg)(['"]\])/g;
            if (content.match(twitterPattern)) {
                content = content.replace(twitterPattern, `$1${newImageUrl}$3`);
                modified = true;
                stats.changes.push(`${path.basename(filePath)}: Updated Twitter image`);
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            stats.updated++;
            console.log(`✅ ${path.basename(filePath)}`);
            console.log(`   → ${ogImage}`);
        } else {
            console.log(`⚠️  ${path.basename(filePath)} - Aucune modification nécessaire`);
        }

    } catch (error) {
        stats.errors.push(`${filePath}: ${error.message}`);
        console.log(`❌ ${path.basename(filePath)}: ${error.message}`);
    }
}

console.log('🔄 MISE À JOUR DES META TAGS OG\n');
console.log('═'.repeat(70) + '\n');

// Traiter chaque page
for (const [pagePath, ogImage] of Object.entries(pageMapping)) {
    const fullPath = path.join(process.cwd(), pagePath);

    if (fs.existsSync(fullPath)) {
        updateMetaTags(fullPath, ogImage);
    } else {
        console.log(`⚠️  ${pagePath} - Fichier non trouvé`);
        stats.errors.push(`${pagePath} - fichier non trouvé`);
    }
}

// Résumé
console.log('\n' + '═'.repeat(70));
console.log('\n📊 RÉSUMÉ\n');
console.log(`✅ Fichiers mis à jour: ${stats.updated}/${Object.keys(pageMapping).length}`);

if (stats.changes.length > 0) {
    console.log('\n📝 CHANGEMENTS:\n');
    stats.changes.forEach(change => console.log(`   ${change}`));
}

if (stats.errors.length > 0) {
    console.log(`\n❌ Erreurs: ${stats.errors.length}`);
    stats.errors.forEach(err => console.log(`   - ${err}`));
}

console.log('\n💡 PROCHAINES ÉTAPES:\n');
console.log('1. Vérifiez les changements avec git diff');
console.log('2. Testez avec https://www.opengraph.xyz/');
console.log('3. Déployez en production\n');

console.log('✅ Mise à jour des meta tags terminée !\n');
