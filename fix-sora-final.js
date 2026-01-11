const fs = require('fs');
const path = require('path');

const fixes = {
    'sora-ai-watermark-removal-ai.webp': 'sora-watermark-removal-ai.webp'
};

const soraFiles = [
    './app/fr/enlever-filigrane-sora/SoraWatermarkRemoverClientFr.tsx',
    './app/de/sora-wasserzeichen-entfernen/SoraWatermarkRemoverClientDe.tsx',
    './app/es/eliminar-marca-agua-sora/SoraWatermarkRemoverClientEs.tsx',
    './app/pt/remover-marca-dagua-sora/SoraWatermarkRemoverClientPt.tsx',
    './app/ko/sora-watermark-remover/SoraWatermarkRemoverClientKo.tsx',
    './app/no/fjern-sora-vannmerke/SoraWatermarkRemoverClientNo.tsx'
];

let fixed = 0;

console.log('🔧 Correction finale Sora feature 2...\n');

soraFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            for (const [oldName, newName] of Object.entries(fixes)) {
                if (content.includes(oldName)) {
                    content = content.replace(new RegExp(oldName, 'g'), newName);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✅ ${path.basename(filePath)}`);
                fixed++;
            }
        } catch (error) {
            console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
        }
    }
});

console.log(`\n✅ ${fixed} fichiers corrigés\n`);
