const fs = require('fs');
const path = require('path');

console.log('🔧 CORRECTION DES CHEMINS D\'IMAGES - ALIGNEMENT EXACT AVEC L\'ANGLAIS\n');

// Mapping EXACT des images depuis la version anglaise
const correctImagePaths = {
    'TextRemoverClient': [
        '/images-optimized/delete-text-from-photo.webp',
        '/images-optimized/remove-text-from-tshirt-photo.webp',
        '/images-optimized/remove-text-from-image-ai.webp'
    ],
    'BackgroundChangerClient': [
        '/images-optimized/ai-background-replacement-example.webp',
        '/images-optimized/change-photo-background-free.webp',
        '/images-optimized/background-replacement-main-tool.webp'
    ],
    'PeopleRemoverClient': [
        '/images-optimized/beach-photo-people-remover.webp',
        '/images-optimized/street-people-remover-ai.webp',
        '/images-optimized/plaza-people-removal-tool.webp'
    ],
    'ObjectRemoverClient': [
        '/images-optimized/ai-object-removal-example.webp',
        '/images-optimized/delete-objects-from-image-ai.webp',
        '/images-optimized/remove-object-from-photo-ai.webp'
    ],
    'BackgroundRemoverClient': [
        '/images-optimized/ai-background-remover-free.webp',
        '/images-optimized/background-removal-tool-ai.webp',
        '/images-optimized/background-removal-main-tool.webp'
    ],
    'ImageUpscalerClient': [
        '/images-optimized/upscale-image-quality-ai.webp',
        '/images-optimized/enhance-cat-image-quality.webp',
        '/images-optimized/ai-upscale-cat-photo.webp'
    ]
};

const languages = ['pt', 'ko', 'no', 'es', 'fr', 'de'];

function updateFileImages(filePath, correctImages) {
    if (!fs.existsSync(filePath)) {
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remplacer chaque image individuellement
    correctImages.forEach((correctPath, index) => {
        const imageNum = index + 1;

        // Pattern pour trouver la ligne img src pour cette feature
        const patterns = [
            // Pattern 1: img src="/images-optimized/WRONG.webp"
            new RegExp(`(<img src=")(/images-optimized/[^"]+\\.webp)(")`, 'g'),
        ];

        let matches = [];
        patterns.forEach(pattern => {
            let match;
            const regex = new RegExp(pattern.source, 'g');
            while ((match = regex.exec(content)) !== null) {
                matches.push({
                    fullMatch: match[0],
                    start: match.index,
                    currentPath: match[2]
                });
            }
        });

        // Remplacer la Nième occurrence
        if (matches[index]) {
            const oldPath = matches[index].currentPath;
            if (oldPath !== correctPath) {
                content = content.replace(oldPath, correctPath);
                modified = true;
            }
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    return false;
}

function findFiles(dir, pattern) {
    const files = [];

    function walk(currentPath) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walk(fullPath);
            } else if (item.includes(pattern) && item.endsWith('.tsx')) {
                files.push(fullPath);
            }
        }
    }

    walk(dir);
    return files;
}

let totalFixed = 0;

Object.entries(correctImagePaths).forEach(([clientPattern, correctImages]) => {
    console.log(`\n📝 ${clientPattern}:`);
    console.log(`   Images: ${correctImages.map(p => path.basename(p)).join(', ')}`);

    languages.forEach(lang => {
        const langDir = path.join(__dirname, 'app', lang);
        const files = findFiles(langDir, clientPattern);

        files.forEach(file => {
            const relativePath = path.relative(__dirname, file);
            if (updateFileImages(file, correctImages)) {
                console.log(`  ✅ ${relativePath}`);
                totalFixed++;
            } else {
                console.log(`  ⏭️  ${relativePath} (déjà correct)`);
            }
        });
    });
});

console.log(`\n\n✨ Terminé! ${totalFixed} fichiers corrigés.`);
