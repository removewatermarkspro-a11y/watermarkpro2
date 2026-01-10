const fs = require('fs');
const path = require('path');

const stats = { fixed: 0, errors: 0 };

// Fonction pour corriger la syntaxe cassée
function fixBrokenSyntax(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const original = content;

        // Corriger: }} / loading="lazy" decoding="async">
        // En:      }} loading="lazy" decoding="async" />
        content = content.replace(
            /\}\}\s*\/\s*loading="lazy"\s*decoding="async">/g,
            '}} loading="lazy" decoding="async" />'
        );

        // Corriger aussi les variantes
        content = content.replace(
            /\/\s*loading="lazy"\s*decoding="async">/g,
            'loading="lazy" decoding="async" />'
        );

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            stats.fixed++;
            console.log(`✅ ${path.basename(filePath)}`);
        }
    } catch (error) {
        stats.errors++;
        console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
    }
}

// Parcourir tous les fichiers
function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;

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
                fixBrokenSyntax(fullPath);
            }
        }
    }
}

console.log('🔧 Correction de la syntaxe cassée...\n');

processDirectory('./app');
processDirectory('./components');

console.log(`\n✅ ${stats.fixed} fichiers corrigés`);
if (stats.errors > 0) {
    console.log(`❌ ${stats.errors} erreurs`);
}
console.log('\n✅ Correction terminée !\n');
