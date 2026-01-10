const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Mapping des fichiers sources vers les noms finaux
const imageMapping = {
    'og_watermark_remover_final_1767966939220.png': 'og-watermark-remover.jpg',
    'video_watermark_simple_1767967248756.png': 'og-video-watermark.jpg',
    'sora_remover_simple_1767967262863.png': 'og-sora-remover.jpg',
    'og_background_remover_1767966456351.png': 'og-background-remover.jpg',
    'og_background_changer_1767966474990.png': 'og-background-changer.jpg',
    'og_text_remover_final_1767966968379.png': 'og-text-remover.jpg',
    'og_object_remover_final_1767966983705.png': 'og-object-remover.jpg',
    'og_people_remover_final_1767966998892.png': 'og-people-remover.jpg',
    'og_image_upscaler_final_1767967014524.png': 'og-image-upscaler.jpg'
};

// Dossiers
const sourceDir = 'C:/Users/victo/.gemini/antigravity/brain/2ac73aa0-6727-4999-9b70-156474080bfc';
const outputDir = './public';

// Stats
const stats = {
    processed: 0,
    errors: [],
    totalSizeBefore: 0,
    totalSizeAfter: 0
};

async function compressAndRename() {
    console.log('🎨 COMPRESSION ET RENOMMAGE DES IMAGES OG\n');
    console.log('═'.repeat(70) + '\n');

    // Créer le dossier public s'il n'existe pas
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Traiter chaque image
    for (const [sourceName, targetName] of Object.entries(imageMapping)) {
        const sourcePath = path.join(sourceDir, sourceName);
        const targetPath = path.join(outputDir, targetName);

        console.log(`📸 ${targetName}`);

        // Vérifier si le fichier source existe
        if (!fs.existsSync(sourcePath)) {
            console.log(`   ⚠️  Fichier source non trouvé: ${sourceName}`);
            stats.errors.push(`${sourceName} - fichier non trouvé`);
            continue;
        }

        try {
            // Obtenir la taille avant
            const statsBefore = fs.statSync(sourcePath);
            stats.totalSizeBefore += statsBefore.size;

            // Compresser et convertir en JPG
            await sharp(sourcePath)
                .resize(1200, 630, {
                    fit: 'cover',
                    position: 'center'
                })
                .jpeg({
                    quality: 85,
                    progressive: true,
                    mozjpeg: true
                })
                .toFile(targetPath);

            // Obtenir la taille après
            const statsAfter = fs.statSync(targetPath);
            stats.totalSizeAfter += statsAfter.size;

            const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);
            const sizeBefore = (statsBefore.size / 1024).toFixed(1);
            const sizeAfter = (statsAfter.size / 1024).toFixed(1);

            console.log(`   ✅ ${sizeBefore} KB → ${sizeAfter} KB (-${reduction}%)`);
            stats.processed++;

        } catch (error) {
            console.log(`   ❌ Erreur: ${error.message}`);
            stats.errors.push(`${sourceName} - ${error.message}`);
        }
    }

    // Résumé
    console.log('\n' + '═'.repeat(70));
    console.log('\n📊 RÉSUMÉ\n');
    console.log(`✅ Images traitées: ${stats.processed}/${Object.keys(imageMapping).length}`);

    const totalReduction = ((1 - stats.totalSizeAfter / stats.totalSizeBefore) * 100).toFixed(1);
    const totalBefore = (stats.totalSizeBefore / 1024).toFixed(1);
    const totalAfter = (stats.totalSizeAfter / 1024).toFixed(1);

    console.log(`📦 Taille totale: ${totalBefore} KB → ${totalAfter} KB`);
    console.log(`💾 Réduction: -${totalReduction}%`);

    if (stats.errors.length > 0) {
        console.log(`\n❌ Erreurs: ${stats.errors.length}`);
        stats.errors.forEach(err => console.log(`   - ${err}`));
    }

    console.log('\n📁 Images sauvegardées dans: ./public/\n');
    console.log('✅ Compression et renommage terminés !\n');

    // Liste des fichiers créés
    console.log('📋 FICHIERS CRÉÉS:\n');
    Object.values(imageMapping).forEach(filename => {
        console.log(`   ✅ ${filename}`);
    });

    console.log('\n💡 PROCHAINES ÉTAPES:\n');
    console.log('1. Vérifiez les images dans /public/');
    console.log('2. Mettez à jour les meta tags dans les page.tsx');
    console.log('3. Déployez en production\n');
}

// Lancer le script
compressAndRename().catch(error => {
    console.error('❌ Erreur fatale:', error);
    process.exit(1);
});
