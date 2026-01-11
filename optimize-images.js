const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    inputDir: './public/images',
    outputDir: './public/images-optimized',
    formats: {
        webp: { quality: 80 },
        jpg: { quality: 85 },
        png: { quality: 85 }
    },
    maxWidth: 1200,
    preserveOriginal: true
};

// Statistiques
const stats = {
    totalFiles: 0,
    optimized: 0,
    errors: 0,
    sizeBefore: 0,
    sizeAfter: 0
};

// Créer le dossier de sortie s'il n'existe pas
function ensureOutputDir() {
    if (!fs.existsSync(config.outputDir)) {
        fs.mkdirSync(config.outputDir, { recursive: true });
        console.log(`✅ Dossier créé: ${config.outputDir}\n`);
    }
}

// Obtenir la taille d'un fichier
function getFileSize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        return 0;
    }
}

// Formater la taille en KB ou MB
function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// Optimiser une image
async function optimizeImage(inputPath, outputPath, filename) {
    try {
        const sizeBefore = getFileSize(inputPath);
        stats.sizeBefore += sizeBefore;

        // Lire les métadonnées de l'image
        const metadata = await sharp(inputPath).metadata();

        // Déterminer les dimensions optimales
        let width = metadata.width;
        if (width > config.maxWidth) {
            width = config.maxWidth;
        }

        // Optimiser selon le type d'image
        let quality = config.formats.webp.quality;

        // Qualité plus élevée pour les logos et petites images
        if (filename.includes('logo') || filename.includes('icon')) {
            quality = 90;
        }

        // Qualité moyenne pour les avatars
        if (filename.includes('avatar')) {
            quality = 85;
        }

        // Convertir en WebP et optimiser
        const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const finalOutputPath = path.join(config.outputDir, outputFilename);

        await sharp(inputPath)
            .resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .webp({ quality })
            .toFile(finalOutputPath);

        const sizeAfter = getFileSize(finalOutputPath);
        stats.sizeAfter += sizeAfter;
        stats.optimized++;

        const reduction = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);

        console.log(`✅ ${filename}`);
        console.log(`   ${formatSize(sizeBefore)} → ${formatSize(sizeAfter)} (${reduction}% de réduction)`);
        console.log('');

    } catch (error) {
        stats.errors++;
        console.error(`❌ Erreur avec ${filename}: ${error.message}\n`);
    }
}

// Parcourir récursivement les dossiers
async function processDirectory(dir, baseDir = dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Créer le sous-dossier dans le dossier de sortie
            const relativePath = path.relative(baseDir, fullPath);
            const outputSubDir = path.join(config.outputDir, relativePath);
            if (!fs.existsSync(outputSubDir)) {
                fs.mkdirSync(outputSubDir, { recursive: true });
            }
            // Traiter récursivement
            await processDirectory(fullPath, baseDir);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                stats.totalFiles++;
                const relativePath = path.relative(baseDir, dir);
                const outputPath = path.join(config.outputDir, relativePath);
                await optimizeImage(fullPath, outputPath, entry.name);
            }
        }
    }
}

// Fonction principale
async function main() {
    console.log('🚀 Optimisation des images en cours...\n');
    console.log(`📁 Dossier source: ${config.inputDir}`);
    console.log(`📁 Dossier destination: ${config.outputDir}`);
    console.log(`🎯 Largeur max: ${config.maxWidth}px`);
    console.log(`🎨 Format: WebP (qualité ${config.formats.webp.quality}%)\n`);
    console.log('─'.repeat(60) + '\n');

    ensureOutputDir();

    const startTime = Date.now();

    try {
        await processDirectory(config.inputDir);
    } catch (error) {
        console.error('❌ Erreur lors du traitement:', error);
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(1);

    // Afficher le résumé
    console.log('─'.repeat(60));
    console.log('\n📊 RÉSUMÉ DE L\'OPTIMISATION\n');
    console.log(`✅ Images traitées: ${stats.optimized}/${stats.totalFiles}`);
    if (stats.errors > 0) {
        console.log(`❌ Erreurs: ${stats.errors}`);
    }
    console.log(`📦 Poids total avant: ${formatSize(stats.sizeBefore)}`);
    console.log(`📦 Poids total après: ${formatSize(stats.sizeAfter)}`);

    const totalReduction = ((stats.sizeBefore - stats.sizeAfter) / stats.sizeBefore * 100).toFixed(1);
    console.log(`🎉 Gain total: ${totalReduction}% (${formatSize(stats.sizeBefore - stats.sizeAfter)} économisés)`);
    console.log(`⏱️  Temps d'exécution: ${duration}s`);
    console.log('\n✅ Optimisation terminée !');
    console.log(`📁 Images optimisées disponibles dans: ${config.outputDir}\n`);
}

// Lancer le script
main().catch(console.error);
