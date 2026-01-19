const fs = require('fs');
const path = require('path');

console.log('🔍 EXTRACTION DES CHEMINS D\'IMAGES DEPUIS LA VERSION ANGLAISE\n');

// Mapping des fichiers anglais vers leurs patterns de langue
const englishToLangMapping = {
    'text-remover-ai/TextRemoverClient.tsx': {
        pattern: 'TextRemoverClient',
        pageKey: 'removeTextPage'
    },
    'background-changer-ai/BackgroundChangerClient.tsx': {
        pattern: 'BackgroundChangerClient',
        pageKey: 'replaceBackgroundPage'
    },
    'people-remover-ai/PeopleRemoverClient.tsx': {
        pattern: 'PeopleRemoverClient',
        pageKey: 'peopleRemovalPage'
    },
    'object-remover-ai/ObjectRemoverClient.tsx': {
        pattern: 'ObjectRemoverClient',
        pageKey: 'removeObjectPage'
    },
    'background-remover/BackgroundRemoverClient.tsx': {
        pattern: 'BackgroundRemoverClient',
        pageKey: 'removeBackgroundPage'
    },
    'image-upscaler-ai/ImageUpscalerClient.tsx': {
        pattern: 'ImageUpscalerClient',
        pageKey: 'imageUpscalerPage'
    }
};

function extractImagePaths(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`❌ Fichier non trouvé: ${filePath}`);
        return [];
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const images = [];

    // Regex pour trouver les chemins d'images dans les balises img
    const imgRegex = /<img\s+src="(\/images-optimized\/[^"]+\.webp)"/g;
    let match;

    while ((match = imgRegex.exec(content)) !== null) {
        images.push(match[1]);
    }

    return images;
}

// Extraire les images de chaque fichier anglais
const extractedImages = {};

console.log('📖 Lecture des fichiers anglais...\n');

Object.entries(englishToLangMapping).forEach(([englishPath, config]) => {
    const fullPath = path.join(__dirname, 'app', englishPath);
    const images = extractImagePaths(fullPath);

    // Prendre seulement les 3 premières images (features section)
    const featureImages = images.slice(0, 3);

    if (featureImages.length === 3) {
        extractedImages[config.pattern] = {
            images: featureImages,
            pageKey: config.pageKey
        };
        console.log(`✅ ${config.pattern}:`);
        featureImages.forEach((img, i) => {
            console.log(`   ${i + 1}. ${path.basename(img)}`);
        });
    } else {
        console.log(`⚠️  ${config.pattern}: Trouvé ${featureImages.length} images (attendu 3)`);
    }
});

// Sauvegarder les résultats
const outputPath = path.join(__dirname, 'extracted-image-paths.json');
fs.writeFileSync(outputPath, JSON.stringify(extractedImages, null, 2), 'utf8');

console.log(`\n💾 Chemins extraits sauvegardés dans: extracted-image-paths.json`);
console.log(`\nTotal: ${Object.keys(extractedImages).length} types de pages`);
