const fs = require('fs');
const path = require('path');

// Mapping des anciens noms vers les nouveaux noms SEO-friendly
const imageRenameMap = {
    // Logo
    'logo.webp': 'remove-watermark-pro-logo.webp',

    // Auth
    'auth-popup-image.webp': 'ai-watermark-remover-signup.webp',

    // Avatars
    'david-kim.webp': 'user-review-david-kim.webp',
    'emma-chen.webp': 'user-review-emma-chen.webp',
    'jake-rodriguez.webp': 'user-review-jake-rodriguez.webp',
    'james-cooper.webp': 'user-review-james-cooper.webp',
    'lisa-anderson.webp': 'user-review-lisa-anderson.webp',
    'maria-santos.webp': 'user-review-maria-santos.webp',
    'michael-torres.webp': 'user-review-michael-torres.webp',
    'nina-patel.webp': 'user-review-nina-patel.webp',
    'sarah-mitchell.webp': 'user-review-sarah-mitchell.webp',
    'tom-wilson.webp': 'user-review-tom-wilson.webp',

    // Examples
    'example-remove-object.webp': 'ai-object-removal-example.webp',
    'example-remove-people.webp': 'ai-people-removal-example.webp',
    'example-swap-background.webp': 'ai-background-replacement-example.webp',
    'example-swap-background-v2.webp': 'ai-background-changer-example.webp',

    // Features - Watermark Remover
    'feature-watermark-remover.webp': 'free-watermark-remover-feature.webp',
    'feature-watermark-remover-3.webp': 'ai-watermark-removal-tool.webp',
    'feature-tiktok-remover.webp': 'tiktok-watermark-remover-free.webp',
    'feature-tiktok-remover-v2.webp': 'remove-tiktok-watermark-ai.webp',

    // Features - People Remover
    'feature-people-remover-1.webp': 'ai-people-remover-beach.webp',
    'feature-people-remover-2.webp': 'remove-people-from-photo-ai.webp',
    'feature-people-remover-3.webp': 'delete-people-from-image.webp',
    'feature-people-remover-beach.webp': 'beach-people-removal-ai.webp',
    'feature-people-remover-beach-new.webp': 'beach-photo-people-remover.webp',
    'feature-people-remover-plaza.webp': 'plaza-people-removal-tool.webp',
    'feature-people-remover-street.webp': 'street-people-remover-ai.webp',

    // Features - Background Remover
    'feature-remove-bg-1.webp': 'ai-background-remover-free.webp',
    'feature-remove-bg-2.webp': 'remove-background-from-image.webp',
    'feature-remove-bg-3.webp': 'background-removal-tool-ai.webp',

    // Features - Object Remover
    'feature-remove-object-1.webp': 'ai-object-remover-tool.webp',
    'feature-remove-object-2.webp': 'remove-unwanted-objects-photo.webp',
    'feature-remove-object-3.webp': 'delete-objects-from-image-ai.webp',

    // Features - Text Remover
    'feature-remove-text-paint.webp': 'remove-text-from-image-ai.webp',
    'feature-remove-text-spring.webp': 'ai-text-removal-tool.webp',
    'feature-remove-text-tablet.webp': 'delete-text-from-photo.webp',
    'feature-remove-text-tshirt.webp': 'remove-text-from-tshirt-photo.webp',

    // Features - Background Replacement
    'feature-replace-background-1.webp': 'ai-background-changer-tool.webp',
    'feature-replace-background-2.webp': 'replace-background-photo-ai.webp',
    'feature-replace-background-3.webp': 'change-photo-background-free.webp',
    'feature-replace-background-new-2.webp': 'swap-image-background-ai.webp',

    // Features - Upscaler
    'feature-upscale.webp': 'ai-image-upscaler-free.webp',
    'feature-upscale-1.webp': 'upscale-image-quality-ai.webp',
    'feature-upscale-boat.webp': 'photo-upscaler-boat-example.webp',
    'feature-upscale-cat.webp': 'ai-upscale-cat-photo.webp',
    'feature-upscale-cat-new.webp': 'enhance-cat-image-quality.webp',
    'feature-upscale-woman.webp': 'upscale-portrait-photo-ai.webp',

    // Hero
    'hero-comparison.webp': 'watermark-removal-before-after.webp',
    'hero-comparison-v2.webp': 'ai-watermark-remover-comparison.webp',

    // Video Page
    'video-page-tiktok-girls.webp': 'remove-tiktok-watermark-video.webp',
    'video-page-red-panda.webp': 'video-watermark-removal-example.webp',

    // Sora Page
    'sora-page-man.webp': 'sora-ai-watermark-remover-man.webp',
    'sora-page-woman.webp': 'remove-sora-watermark-woman.webp',
    'sora-page-woman-v2.webp': 'sora-watermark-removal-ai.webp',
    'sora-page-woman-v3.webp': 'free-sora-remover-woman.webp',
    'sora-page-woman-v4.webp': 'openai-sora-watermark-remover.webp',

    // Sora Tools
    'sora-page-tool1.webp': 'sora-watermark-remover-tool-1.webp',
    'sora-page-tool2.webp': 'sora-watermark-remover-tool-2.webp',
    'sora-page-tool3.webp': 'sora-watermark-remover-tool-3.webp',
    'sora-page-tool4.webp': 'sora-watermark-remover-tool-4.webp',
    'sora-page-tool5.webp': 'sora-watermark-remover-tool-5.webp',
    'sora-page-tool6.webp': 'sora-watermark-remover-tool-6.webp',
    'sora-page-tool7.webp': 'sora-watermark-remover-tool-7.webp',
    'sora-page-tool8.webp': 'sora-watermark-remover-tool-8.webp',

    // Sora Remover Cards
    'sora-remover-1.webp': 'free-sora-watermark-remover-1.webp',
    'sora-remover-2.webp': 'free-sora-watermark-remover-2.webp',
    'sora-remover-3.webp': 'free-sora-watermark-remover-3.webp',
    'sora-remover-4.webp': 'free-sora-watermark-remover-4.webp',
    'sora-remover-5.webp': 'free-sora-watermark-remover-5.webp',
    'sora-remover-6.webp': 'free-sora-watermark-remover-6.webp',
    'sora-remover-7.webp': 'free-sora-watermark-remover-7.webp',
    'sora-remover-8.webp': 'free-sora-watermark-remover-8.webp',
    'sora-remover-9.webp': 'free-sora-watermark-remover-9.webp',

    // Tool Cards - Main Tools
    'watermark-remover.webp': 'free-watermark-remover-tool.webp',
    'tool-card-video-page.webp': 'video-watermark-remover-tool.webp',
    'tool-card-text-page.webp': 'ai-text-remover-tool.webp',
    'tool-card-object-page.webp': 'ai-object-remover-tool.webp',
    'tool-card-upscaler-page.webp': 'ai-image-upscaler-tool.webp',
    'tool-card-auto-people-page.webp': 'ai-people-remover-tool.webp',
    'tool-card-replace-bg-page.webp': 'ai-background-changer-tool.webp',
    'tool-card-remove-bg-page.webp': 'ai-background-remover-tool.webp',

    // Tool Cards - Home Page
    'tool-card-remove-bg-home.webp': 'background-remover-home-tool.webp',
    'tool-card-remove-object-home.webp': 'object-remover-home-tool.webp',
    'tool-card-replace-bg-home.webp': 'background-changer-home-tool.webp',

    // Tool Cards - Variations
    'tool-card-remove-bg-object.webp': 'remove-background-object-tool.webp',
    'tool-card-remove-bg-text.webp': 'remove-background-text-tool.webp',
    'tool-card-remove-bg-video.webp': 'remove-background-video-tool.webp',
    'tool-card-remove-bg-people-page.webp': 'remove-background-people-tool.webp',
    'tool-card-remove-bg-replace-page.webp': 'remove-background-replace-tool.webp',
    'tool-card-remove-bg-upscaler-page.webp': 'remove-background-upscaler-tool.webp',
    'tool-card-remove-bg-remove-bg-page.webp': 'background-removal-main-tool.webp',

    'tool-card-remove-object-object-page.webp': 'object-removal-main-tool.webp',
    'tool-card-remove-object-text.webp': 'remove-object-text-tool.webp',
    'tool-card-remove-object-video.webp': 'remove-object-video-tool.webp',
    'tool-card-remove-object-people-page.webp': 'remove-object-people-tool.webp',
    'tool-card-remove-object-replace-page.webp': 'remove-object-replace-tool.webp',
    'tool-card-remove-object-upscaler-page.webp': 'remove-object-upscaler-tool.webp',
    'tool-card-remove-object-remove-bg-page.webp': 'remove-object-bg-tool.webp',

    'tool-card-replace-bg-home.webp': 'replace-background-home-tool.webp',
    'tool-card-replace-bg-object.webp': 'replace-background-object-tool.webp',
    'tool-card-replace-bg-text.webp': 'replace-background-text-tool.webp',
    'tool-card-replace-bg-video.webp': 'replace-background-video-tool.webp',
    'tool-card-replace-bg-people-page.webp': 'replace-background-people-tool.webp',
    'tool-card-replace-bg-replace-page.webp': 'background-replacement-main-tool.webp',
    'tool-card-replace-bg-upscaler-page.webp': 'replace-background-upscaler-tool.webp',
    'tool-card-replace-bg-remove-page.webp': 'replace-background-remove-tool.webp',

    // Video Watermark Cards
    'video-watermark-2.webp': 'video-watermark-remover-2.webp',
    'video-watermark-3.webp': 'video-watermark-remover-3.webp',
    'video-watermark-4.webp': 'video-watermark-remover-4.webp',
    'video-watermark-5.webp': 'video-watermark-remover-5.webp',
    'video-watermark-6.webp': 'video-watermark-remover-6.webp',
    'video-watermark-7.webp': 'video-watermark-remover-7.webp',
    'video-watermark-8.webp': 'video-watermark-remover-8.webp',
    'video-watermark-home.webp': 'video-watermark-remover-home.webp',

    // Text Removal Cards
    'remove-text-beige.webp': 'text-remover-beige-card.webp',
    'remove-text-dark-blue.webp': 'text-remover-dark-blue-card.webp',
    'remove-text-green.webp': 'text-remover-green-card.webp',
    'remove-text-light-blue.webp': 'text-remover-light-blue-card.webp',
    'remove-text-lime.webp': 'text-remover-lime-card.webp',
    'remove-text-orange.webp': 'text-remover-orange-card.webp',
    'remove-text-pink.webp': 'text-remover-pink-card.webp',
    'remove-text-yellow.webp': 'text-remover-yellow-card.webp',

    // People Remover Cards
    'people-remover-beach-woman.webp': 'people-remover-beach-woman-card.webp',
    'people-remover-colosseum.webp': 'people-remover-colosseum-card.webp',
    'people-remover-field-man.webp': 'people-remover-field-man-card.webp',
    'people-remover-field-woman.webp': 'people-remover-field-woman-card.webp',
    'people-remover-museum.webp': 'people-remover-museum-card.webp',
    'people-remover-station.webp': 'people-remover-station-card.webp',
    'people-remover-street-man.webp': 'people-remover-street-man-card.webp',
    'people-remover-street-woman.webp': 'people-remover-street-woman-card.webp',

    // Upscaler Cards
    'upscaler-bear.webp': 'image-upscaler-bear-card.webp',
    'upscaler-fox.webp': 'image-upscaler-fox-card.webp',
    'upscaler-lion.webp': 'image-upscaler-lion-card.webp',
    'upscaler-owl.webp': 'image-upscaler-owl-card.webp',
    'upscaler-panda.webp': 'image-upscaler-panda-card.webp',
    'upscaler-panther.webp': 'image-upscaler-panther-card.webp',
    'upscaler-penguin.webp': 'image-upscaler-penguin-card.webp',
    'upscaler-tiger.webp': 'image-upscaler-tiger-card.webp'
};

// Statistiques
const stats = {
    filesRenamed: 0,
    codeFilesUpdated: 0,
    totalReplacements: 0,
    errors: []
};

// Fonction pour renommer les fichiers
function renameImages() {
    const imagesDir = './public/images-optimized';

    console.log('📝 Renommage des images...\n');

    for (const [oldName, newName] of Object.entries(imageRenameMap)) {
        const oldPath = path.join(imagesDir, oldName);
        const newPath = path.join(imagesDir, newName);

        if (fs.existsSync(oldPath)) {
            try {
                fs.renameSync(oldPath, newPath);
                stats.filesRenamed++;
                console.log(`✅ ${oldName} → ${newName}`);
            } catch (error) {
                stats.errors.push(`Erreur renommage ${oldName}: ${error.message}`);
                console.error(`❌ ${oldName}: ${error.message}`);
            }
        }
    }
}

// Fonction pour mettre à jour les références dans le code
function updateCodeReferences() {
    console.log('\n🔄 Mise à jour des références dans le code...\n');

    function processDirectory(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                if (entry.name !== 'node_modules' && entry.name !== '.next') {
                    processDirectory(fullPath);
                }
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name);
                if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
                    updateFileReferences(fullPath);
                }
            }
        }
    }

    function updateFileReferences(filePath) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            let replacements = 0;

            for (const [oldName, newName] of Object.entries(imageRenameMap)) {
                const regex = new RegExp(oldName.replace('.webp', '\\.webp'), 'g');
                const matches = content.match(regex);

                if (matches) {
                    content = content.replace(regex, newName);
                    replacements += matches.length;
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                stats.codeFilesUpdated++;
                stats.totalReplacements += replacements;
                console.log(`✅ ${path.basename(filePath)} - ${replacements} remplacement(s)`);
            }
        } catch (error) {
            stats.errors.push(`Erreur mise à jour ${filePath}: ${error.message}`);
        }
    }

    processDirectory('./app');
    processDirectory('./components');
}

// Fonction principale
function main() {
    console.log('🚀 RENOMMAGE SEO DES IMAGES\n');
    console.log('═'.repeat(70) + '\n');

    const startTime = Date.now();

    // Étape 1: Renommer les fichiers
    renameImages();

    // Étape 2: Mettre à jour le code
    updateCodeReferences();

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(1);

    // Résumé
    console.log('\n' + '═'.repeat(70));
    console.log('\n📊 RÉSUMÉ\n');
    console.log(`✅ Images renommées: ${stats.filesRenamed}`);
    console.log(`✅ Fichiers code mis à jour: ${stats.codeFilesUpdated}`);
    console.log(`✅ Références mises à jour: ${stats.totalReplacements}`);
    console.log(`⏱️  Temps d'exécution: ${duration}s`);

    if (stats.errors.length > 0) {
        console.log(`\n❌ Erreurs: ${stats.errors.length}`);
        stats.errors.forEach(err => console.log(`   - ${err}`));
    }

    console.log('\n✅ Renommage SEO terminé !\n');
    console.log('💡 Prochaine étape: Testez votre site et déployez en production\n');
}

// Lancer le script
main();
