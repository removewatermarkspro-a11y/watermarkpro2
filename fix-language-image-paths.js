const fs = require('fs');
const path = require('path');

// Mapping des chemins d'images à remplacer
const replacements = [
    // Text Remover
    { old: `/images/feature-remove-text-tablet.png`, new: `/images-optimized/delete-text-from-photo.webp` },
    { old: `/images/feature-remove-text-tshirt.jpg`, new: `/images-optimized/remove-text-from-tshirt-photo.webp` },
    { old: `/images/feature-remove-text-paint.png`, new: `/images-optimized/remove-text-from-image-ai.webp` },

    // Background Changer
    { old: `/images/feature-replace-background-2.png`, new: `/images-optimized/ai-background-replacement-example.webp` },
    { old: `/images/feature-replace-background-new-2.jpg`, new: `/images-optimized/change-photo-background-free.webp` },
    { old: `/images/feature-replace-background-3.jpg`, new: `/images-optimized/background-replacement-main-tool.webp` },

    // People Remover
    { old: `/images/feature-people-remover-beach-new.png`, new: `/images-optimized/ai-people-remover-beach.webp` },
    { old: `/images/feature-people-remover-street.jpg`, new: `/images-optimized/beach-people-removal-ai.webp` },
    { old: `/images/feature-people-remover-plaza.jpg`, new: `/images-optimized/delete-people-from-image.webp` },

    // Object Remover
    { old: `/images/feature-remove-object-3.png`, new: `/images-optimized/ai-object-removal-example.webp` },
    { old: `/images/feature-remove-object-1.png`, new: `/images-optimized/delete-objects-from-image-ai.webp` },
    { old: `/images/feature-remove-object-2.jpg`, new: `/images-optimized/remove-object-from-photo-ai.webp` },

    // Background Remover
    { old: `/images/feature-remove-bg-3.png`, new: `/images-optimized/ai-background-remover-free.webp` },
    { old: `/images/feature-remove-bg-1.jpg`, new: `/images-optimized/background-removal-tool-ai.webp` },
    { old: `/images/feature-remove-bg-2.jpg`, new: `/images-optimized/background-removal-main-tool.webp` },

    // Image Upscaler
    { old: `/images/feature-upscale-woman.jpg`, new: `/images-optimized/upscale-image-quality-ai.webp` },
    { old: `/images/feature-upscale-cat-new.png`, new: `/images-optimized/enhance-cat-image-quality.webp` },
    { old: `/images/feature-upscale-boat.png`, new: `/images-optimized/ai-upscale-cat-photo.webp` },
];

// Fichiers à mettre à jour (ceux qui utilisent des template strings)
const filesToUpdate = [
    // Portuguese
    'app/pt/remover-texto-imagem/TextRemoverClientPt.tsx',
    'app/pt/trocar-fundo-imagem/BackgroundChangerClientPt.tsx',
    'app/pt/remover-pessoas-foto/PeopleRemoverClientPt.tsx',
    'app/pt/remover-objeto-imagem/ObjectRemoverClientPt.tsx',
    'app/pt/remover-fundo-imagem/BackgroundRemoverClientPt.tsx',
    'app/pt/melhorar-qualidade-imagem/ImageUpscalerClientPt.tsx',

    // Korean
    'app/ko/text-remover-ai/TextRemoverClientKo.tsx',
    'app/ko/background-changer-ai/BackgroundChangerClientKo.tsx',
    'app/ko/people-remover-ai/PeopleRemoverClientKo.tsx',
    'app/ko/object-remover-ai/ObjectRemoverClientKo.tsx',
    'app/ko/background-remover/BackgroundRemoverClientKo.tsx',
    'app/ko/image-upscaler-ai/ImageUpscalerClientKo.tsx',

    // Norwegian
    'app/no/fjern-tekst-fra-bilde/TextRemoverClientNo.tsx',
    'app/no/endre-bakgrunn/BackgroundChangerClientNo.tsx',
    'app/no/fjern-personer-foto/PeopleRemoverClientNo.tsx',
    'app/no/fjern-objekt-fra-bilde/ObjectRemoverClientNo.tsx',
    'app/no/fjern-bakgrunn/BackgroundRemoverClientNo.tsx',
    'app/no/forbedre-bildekvalitet/ImageUpscalerClientNo.tsx',

    // Spanish
    'app/es/eliminar-texto-imagen/TextRemoverClientEs.tsx',
    'app/es/cambiar-fondo-imagen/BackgroundChangerClientEs.tsx',
    'app/es/eliminar-personas-foto/PeopleRemoverClientEs.tsx',
    'app/es/eliminar-objeto-imagen/ObjectRemoverClientEs.tsx',
    'app/es/eliminar-fondo-imagen/BackgroundRemoverClientEs.tsx',
    'app/es/mejorar-calidad-imagen/ImageUpscalerClientEs.tsx',

    // German
    'app/de/text-entfernen/TextRemoverClientDe.tsx',
    'app/de/hintergrund-wechseln/BackgroundChangerClientDe.tsx',
    'app/de/personen-entfernen/PeopleRemoverClientDe.tsx',
    'app/de/objekt-entfernen/ObjectRemoverClientDe.tsx',
    'app/de/hintergrund-entfernen/BackgroundRemoverClientDe.tsx',
    'app/de/bild-hochskalieren/ImageUpscalerClientDe.tsx',
];

function updateFile(filePath) {
    const fullPath = path.join(__dirname, filePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    let changeCount = 0;

    // Appliquer tous les remplacements
    replacements.forEach(({ old, new: newPath }) => {
        const regex = new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = (content.match(regex) || []).length;

        if (matches > 0) {
            content = content.replace(regex, newPath);
            modified = true;
            changeCount += matches;
        }
    });

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Updated: ${filePath} (${changeCount} replacements)\n`);
    } else {
        console.log(`⏭️  No changes needed: ${filePath}\n`);
    }
}

console.log('🚀 Starting image path optimization for all languages...\n');
console.log(`📊 Processing ${filesToUpdate.length} files...\n`);

let totalUpdated = 0;
filesToUpdate.forEach(file => {
    const before = fs.existsSync(path.join(__dirname, file)) ? fs.readFileSync(path.join(__dirname, file), 'utf8') : '';
    updateFile(file);
    const after = fs.existsSync(path.join(__dirname, file)) ? fs.readFileSync(path.join(__dirname, file), 'utf8') : '';
    if (before !== after) totalUpdated++;
});

console.log(`\n✨ Optimization complete!`);
console.log(`📈 Files updated: ${totalUpdated}/${filesToUpdate.length}`);
