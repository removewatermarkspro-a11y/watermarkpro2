const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    searchDir: './app',
    componentsDir: './components',
    oldPath: '/images-optimized/tools/',
    newPath: '/images-optimized/',
};

// Statistiques
const stats = {
    filesScanned: 0,
    filesModified: 0,
    replacements: 0
};

// Fonction pour corriger les chemins d'images dans un fichier
function fixToolsPaths(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        let replacementCount = 0;

        // Remplacer /images-optimized/tools/ par /images-optimized/
        const regex = /\/images-optimized\/tools\//g;

        const newContent = content.replace(regex, (match) => {
            replacementCount++;
            modified = true;
            return '/images-optimized/';
        });

        if (modified) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            stats.filesModified++;
            stats.replacements += replacementCount;
            console.log(`✅ ${path.basename(filePath)} - ${replacementCount} remplacement(s)`);
        }

    } catch (error) {
        console.error(`❌ Erreur avec ${filePath}:`, error.message);
    }
}

// Parcourir récursivement les dossiers
function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Ignorer node_modules et .next
            if (entry.name !== 'node_modules' && entry.name !== '.next') {
                processDirectory(fullPath);
            }
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            // Traiter uniquement les fichiers TypeScript/JavaScript/React
            if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
                stats.filesScanned++;
                fixToolsPaths(fullPath);
            }
        }
    }
}

// Fonction principale
function main() {
    console.log('🔧 Correction des chemins d\'images tools...\n');
    console.log(`🔄 Remplacement: ${config.oldPath} → ${config.newPath}\n`);
    console.log('─'.repeat(60) + '\n');

    const startTime = Date.now();

    // Traiter les dossiers
    if (fs.existsSync(config.searchDir)) {
        processDirectory(config.searchDir);
    }
    if (fs.existsSync(config.componentsDir)) {
        processDirectory(config.componentsDir);
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(1);

    // Afficher le résumé
    console.log('\n' + '─'.repeat(60));
    console.log('\n📊 RÉSUMÉ\n');
    console.log(`✅ Fichiers scannés: ${stats.filesScanned}`);
    console.log(`✅ Fichiers modifiés: ${stats.filesModified}`);
    console.log(`✅ Remplacements effectués: ${stats.replacements}`);
    console.log(`⏱️  Temps d'exécution: ${duration}s`);
    console.log('\n✅ Correction terminée !\n');
}

// Lancer le script
main();
