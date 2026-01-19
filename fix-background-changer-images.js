const fs = require('fs');
const path = require('path');

console.log('🔧 CORRECTION DES IMAGES BACKGROUND CHANGER\n');

// Images correctes depuis la version anglaise
const correctImages = [
    '/images-optimized/replace-background-photo-ai.webp',
    '/images-optimized/swap-image-background-ai.webp',
    '/images-optimized/change-photo-background-free.webp'
];

const languages = ['pt', 'es', 'de', 'ko', 'no'];

function updateBackgroundChangerImages(filePath) {
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
        for (let i = 2; i >= 0; i--) {
            const oldMatch = matches[i].fullMatch;
            const newMatch = matches[i].prefix + correctImages[i] + matches[i].suffix;

            if (oldMatch !== newMatch) {
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

function findBackgroundChangerFiles(dir) {
    const files = [];

    function walk(currentPath) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walk(fullPath);
            } else if (item.includes('BackgroundChanger') && item.endsWith('.tsx')) {
                files.push(fullPath);
            }
        }
    }

    walk(dir);
    return files;
}

let totalFixed = 0;

console.log('📝 Images correctes:');
correctImages.forEach((img, i) => {
    console.log(`   ${i + 1}. ${path.basename(img)}`);
});
console.log('');

languages.forEach(lang => {
    const langDir = path.join(__dirname, 'app', lang);
    const files = findBackgroundChangerFiles(langDir);

    files.forEach(file => {
        const relativePath = path.relative(__dirname, file);
        if (updateBackgroundChangerImages(file)) {
            console.log(`✅ ${relativePath}`);
            totalFixed++;
        } else {
            console.log(`⏭️  ${relativePath} (déjà correct)`);
        }
    });
});

console.log(`\n✨ Terminé! ${totalFixed} fichiers corrigés.`);
