const fs = require('fs');
const path = require('path');

const stats = { fixed: 0, errors: [] };

// Fix 1: Corriger l'image Sora feature 2 pour toutes les langues
const soraFiles = [
    './app/fr/enlever-filigrane-sora/SoraWatermarkRemoverClientFr.tsx',
    './app/de/sora-wasserzeichen-entfernen/SoraWatermarkRemoverClientDe.tsx',
    './app/es/eliminar-marca-agua-sora/SoraWatermarkRemoverClientEs.tsx',
    './app/pt/remover-marca-dagua-sora/SoraWatermarkRemoverClientPt.tsx',
    './app/ko/sora-watermark-remover/SoraWatermarkRemoverClientKo.tsx',
    './app/no/fjern-sora-vannmerke/SoraWatermarkRemoverClientNo.tsx'
];

console.log('🔧 Correction des problèmes d\'images...\n');
console.log('1️⃣ Correction Sora feature 2 (toutes langues)\n');

soraFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            const before = content;

            // Remplacer le mauvais chemin par le bon
            content = content.replace(
                /openai-sora-free-watermark-remover-tool\.webp/g,
                'openai-sora-watermark-remover.webp'
            );

            if (content !== before) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✅ ${path.basename(filePath)}`);
                stats.fixed++;
            }
        } catch (error) {
            stats.errors.push(`${path.basename(filePath)}: ${error.message}`);
            console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
        }
    }
});

console.log(`\n✅ Total: ${stats.fixed} fichiers corrigés`);

if (stats.errors.length > 0) {
    console.log(`\n❌ Erreurs: ${stats.errors.length}`);
    stats.errors.forEach(err => console.log(`   - ${err}`));
}

console.log('\n✅ Correction terminée !\n');
