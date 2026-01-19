const fs = require('fs');
const path = require('path');

console.log('🔧 APPLICATION DES CHEMINS D\'IMAGES EXACTS\n');

// Charger les chemins extraits
const extractedPaths = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted-image-paths.json'), 'utf8'));

// Ajouter manuellement Background Changer (fichier anglais introuvable)
extractedPaths['BackgroundChangerClient'] = {
    images: [
        '/images-optimized/ai-background-replacement-example.webp',
        '/images-optimized/change-photo-background-free.webp',
        '/images-optimized/background-replacement-main-tool.webp'
    ],
    pageKey: 'replaceBackgroundPage'
};

const languages = ['pt', 'ko', 'no', 'es', 'fr', 'de'];

function updateFileImages(filePath, correctImages) {
    if (!fs.existsSync(filePath)) {
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Trouver toutes les balises img avec /images-optimized/
    const imgRegex = /(<img\s+src=")\/images-optimized\/[^"]+\.webp(")/g;
    const matches = [];
    let match;

    while ((match = imgRegex.exec(content)) !== null) {
        matches.push({
            fullMatch: match[0],
            prefix: match[1],
            suffix: match[2],
            index: match.index
        });
    }

    // Remplacer les 3 premières occurrences (features section)
    if (matches.length >= 3) {
        // Remplacer en ordre inverse pour ne pas décaler les index
        for (let i = Math.min(2, matches.length - 1); i >= 0; i--) {
            const oldMatch = matches[i].fullMatch;
            const newMatch = matches[i].prefix + correctImages[i] + matches[i].suffix;

            if (oldMatch !== newMatch) {
                // Trouver et remplacer cette occurrence spécifique
                const before = content.substring(0, matches[i].index);
                const after = content.substring(matches[i].index + oldMatch.length);
                content = before + newMatch + after;
                modified = true;
            }
        }
    }

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
let totalSkipped = 0;

Object.entries(extractedPaths).forEach(([clientPattern, config]) => {
    console.log(`\n📝 ${clientPattern}:`);
    config.images.forEach((img, i) => {
        console.log(`   ${i + 1}. ${path.basename(img)}`);
    });

    languages.forEach(lang => {
        const langDir = path.join(__dirname, 'app', lang);
        const files = findFiles(langDir, clientPattern);

        files.forEach(file => {
            const relativePath = path.relative(__dirname, file);
            if (updateFileImages(file, config.images)) {
                console.log(`  ✅ ${relativePath}`);
                totalFixed++;
            } else {
                console.log(`  ⏭️  ${relativePath} (déjà correct)`);
                totalSkipped++;
            }
        });
    });
});

console.log(`\n\n✨ Terminé!`);
console.log(`📊 Corrigés: ${totalFixed} | Ignorés: ${totalSkipped} | Total: ${totalFixed + totalSkipped}`);
