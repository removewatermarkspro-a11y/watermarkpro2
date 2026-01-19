const fs = require('fs');
const path = require('path');

console.log('🧹 NETTOYAGE DES IMAGES INUTILISÉES\n');
console.log('='.repeat(60));

// 1. Lister toutes les images dans /public/images/
const imagesDir = path.join(__dirname, 'public', 'images');
const imagesToCheck = [];

function scanImagesDirectory(dir, baseDir = dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Skip avatars directory (used in testimonials)
            if (item !== 'avatars') {
                scanImagesDirectory(fullPath, baseDir);
            }
        } else if (/\.(png|jpg|jpeg|webp|gif)$/i.test(item)) {
            const relativePath = path.relative(baseDir, fullPath);
            imagesToCheck.push({
                name: item,
                path: fullPath,
                relativePath: relativePath,
                size: stat.size
            });
        }
    }
}

console.log('\n📊 ÉTAPE 1: Scan du dossier /public/images/\n');
scanImagesDirectory(imagesDir);

console.log(`Trouvé ${imagesToCheck.length} images à vérifier\n`);

// 2. Chercher les références dans le code
console.log('='.repeat(60));
console.log('\n🔍 ÉTAPE 2: Recherche des références dans le code\n');

function searchInCodebase(imageName) {
    const searchDirs = [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'components'),
        path.join(__dirname, 'utils')
    ];

    let found = false;

    for (const dir of searchDirs) {
        if (searchInDirectory(dir, imageName)) {
            found = true;
            break;
        }
    }

    return found;
}

function searchInDirectory(dir, searchTerm) {
    if (!fs.existsSync(dir)) return false;

    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (item === 'node_modules' || item === '.next' || item === '.git') {
            continue;
        }

        if (stat.isDirectory()) {
            if (searchInDirectory(fullPath, searchTerm)) {
                return true;
            }
        } else if (/\.(tsx|jsx|ts|js)$/i.test(item)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes(searchTerm)) {
                return true;
            }
        }
    }

    return false;
}

// 3. Classifier les images
const results = {
    used: [],
    unused: [],
    totalSize: 0,
    unusedSize: 0
};

imagesToCheck.forEach(image => {
    const isUsed = searchInCodebase(image.name);

    if (isUsed) {
        results.used.push(image);
        console.log(`✅ UTILISÉE: ${image.relativePath}`);
    } else {
        results.unused.push(image);
        results.unusedSize += image.size;
        console.log(`❌ NON UTILISÉE: ${image.relativePath} (${formatBytes(image.size)})`);
    }

    results.totalSize += image.size;
});

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// 4. Rapport final
console.log('\n\n='.repeat(60));
console.log('\n📊 RAPPORT FINAL\n');

console.log(`Images utilisées: ${results.used.length}`);
console.log(`Images inutilisées: ${results.unused.length}`);
console.log(`Taille totale: ${formatBytes(results.totalSize)}`);
console.log(`Espace récupérable: ${formatBytes(results.unusedSize)}`);

if (results.unused.length > 0) {
    console.log('\n\n📋 LISTE DES IMAGES À SUPPRIMER:\n');

    results.unused.forEach(image => {
        console.log(`  - ${image.relativePath} (${formatBytes(image.size)})`);
    });

    // Créer un fichier de commandes pour supprimer
    const deleteCommands = results.unused.map(img =>
        `Remove-Item -Path "${img.path}" -Force`
    ).join('\n');

    const scriptPath = path.join(__dirname, 'delete-unused-images.ps1');
    fs.writeFileSync(scriptPath, deleteCommands, 'utf8');

    console.log(`\n✅ Script de suppression créé: delete-unused-images.ps1`);
    console.log(`\nPour supprimer ces images, exécutez:`);
    console.log(`  powershell -ExecutionPolicy Bypass -File delete-unused-images.ps1`);
} else {
    console.log('\n✅ Aucune image inutilisée trouvée!');
}

// Sauvegarder le rapport
const reportPath = path.join(__dirname, 'unused-images-report.json');
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');
console.log(`\n📄 Rapport détaillé sauvegardé: unused-images-report.json`);
