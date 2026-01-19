const fs = require('fs');
const path = require('path');

// Mapping exact des remplacements à effectuer
const imageReplacements = {
    // Text Remover - template literal pattern
    "src={`/images/feature-remove-text-${i === 1 ? 'tablet.png' : i === 2 ? 'tshirt.jpg' : 'paint.png'}`}":
        "src={`/images-optimized/${i === 1 ? 'delete-text-from-photo.webp' : i === 2 ? 'remove-text-from-tshirt-photo.webp' : 'remove-text-from-image-ai.webp'}`}",

    // Background Changer
    "src={`/images/feature-replace-background-${i === 1 ? '2.png' : i === 2 ? 'new-2.jpg' : '3.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-background-replacement-example.webp' : i === 2 ? 'change-photo-background-free.webp' : 'background-replacement-main-tool.webp'}`}",

    // People Remover
    "src={`/images/feature-people-remover-${i === 1 ? 'beach-new.png' : i === 2 ? 'street.jpg' : 'plaza.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-people-remover-beach.webp' : i === 2 ? 'beach-people-removal-ai.webp' : 'delete-people-from-image.webp'}`}",

    // Object Remover
    "src={`/images/feature-remove-object-${i === 1 ? '3.png' : i === 2 ? '1.png' : '2.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-object-removal-example.webp' : i === 2 ? 'delete-objects-from-image-ai.webp' : 'remove-object-from-photo-ai.webp'}`}",

    // Background Remover
    "src={`/images/feature-remove-bg-${i === 1 ? '3.png' : i === 2 ? '1.jpg' : '2.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-background-remover-free.webp' : i === 2 ? 'background-removal-tool-ai.webp' : 'background-removal-main-tool.webp'}`}",

    // Image Upscaler
    "src={`/images/feature-upscale-${i === 1 ? 'woman.jpg' : i === 2 ? 'cat-new.png' : 'boat.png'}`}":
        "src={`/images-optimized/${i === 1 ? 'upscale-image-quality-ai.webp' : i === 2 ? 'enhance-cat-image-quality.webp' : 'ai-upscale-cat-photo.webp'}`}",
};

const filesToUpdate = [
    // Portuguese (2 already done, 4 remaining)
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
        return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    let replacements = [];

    // Apply all replacements
    Object.entries(imageReplacements).forEach(([oldPattern, newPattern]) => {
        if (content.includes(oldPattern)) {
            content = content.replace(oldPattern, newPattern);
            modified = true;
            replacements.push(oldPattern.substring(0, 50) + '...');
        }
    });

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ ${filePath}`);
        replacements.forEach(r => console.log(`   → ${r}`));
        return true;
    } else {
        console.log(`⏭️  ${filePath} (already optimized)`);
        return false;
    }
}

console.log('🚀 Optimizing remaining language files...\n');

let updated = 0;
let skipped = 0;

filesToUpdate.forEach(file => {
    if (updateFile(file)) {
        updated++;
    } else {
        skipped++;
    }
});

console.log(`\n✨ Complete!`);
console.log(`📊 Updated: ${updated} | Skipped: ${skipped} | Total: ${filesToUpdate.length}`);
