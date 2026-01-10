const fs = require('fs');
const path = require('path');

// Corrections spécifiques
const fixes = [
    {
        description: 'Fix Sora feature 2 image - wrong mapping',
        oldText: 'openai-sora-free-watermark-remover-tool.webp',
        newText: 'sora-ai-watermark-removal-ai.webp',
        files: [
            './app/sora-watermark-remover/SoraWatermarkRemoverClient.tsx',
            './app/fr/enlever-filigrane-sora/SoraWatermarkRemoverClientFr.tsx',
            './app/de/sora-wasserzeichen-entfernen/SoraWatermarkRemoverClientDe.tsx',
            './app/es/eliminar-marca-agua-sora/SoraWatermarkRemoverClientEs.tsx',
            './app/pt/remover-marca-dagua-sora/SoraWatermarkRemoverClientPt.tsx',
            './app/ko/sora-watermark-remover/SoraWatermarkRemoverClientKo.tsx',
            './app/no/fjern-sora-vannmerke/SoraWatermarkRemoverClientNo.tsx'
        ]
    }
];

let totalFixed = 0;

fixes.forEach(fix => {
    console.log(`\n🔧 ${fix.description}\n`);

    fix.files.forEach(filePath => {
        if (fs.existsSync(filePath)) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                const before = content;
                content = content.replace(new RegExp(fix.oldText, 'g'), fix.newText);

                if (content !== before) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`✅ ${path.basename(filePath)}`);
                    totalFixed++;
                }
            } catch (error) {
                console.error(`❌ ${path.basename(filePath)}: ${error.message}`);
            }
        }
    });
});

console.log(`\n✅ Total: ${totalFixed} fichiers corrigés\n`);
