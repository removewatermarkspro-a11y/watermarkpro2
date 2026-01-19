const fs = require('fs');
const path = require('path');

// Mapping exact des remplacements à effectuer
const imageReplacements = {
    // Background Remover
    "src={`/images/feature-remove-bg-${i === 1 ? '3.png' : i === 2 ? '1.jpg' : '2.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-background-remover-free.webp' : i === 2 ? 'background-removal-tool-ai.webp' : 'background-removal-main-tool.webp'}`}",

    // Image Upscaler
    "src={`/images/feature-upscale-${i === 1 ? 'woman.jpg' : i === 2 ? 'cat-new.png' : 'boat.png'}`}":
        "src={`/images-optimized/${i === 1 ? 'upscale-image-quality-ai.webp' : i === 2 ? 'enhance-cat-image-quality.webp' : 'ai-upscale-cat-photo.webp'}`}",

    // People Remover
    "src={`/images/feature-people-remover-${i === 1 ? 'beach-new.png' : i === 2 ? 'street.jpg' : 'plaza.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-people-remover-beach.webp' : i === 2 ? 'beach-people-removal-ai.webp' : 'delete-people-from-image.webp'}`}",

    // Background Changer
    "src={`/images/feature-replace-background-${i === 1 ? '2.png' : i === 2 ? 'new-2.jpg' : '3.jpg'}`}":
        "src={`/images-optimized/${i === 1 ? 'ai-background-replacement-example.webp' : i === 2 ? 'change-photo-background-free.webp' : 'background-replacement-main-tool.webp'}`}",
};

const filesToUpdate = [
    // French - remaining files
    'app/fr/supprimer-arriere-plan/BackgroundRemoverClientFr.tsx',
    'app/fr/agrandir-image/ImageUpscalerClientFr.tsx',
    'app/fr/effacer-personnes-photo/PeopleRemoverClientFr.tsx',
    'app/fr/changer-arriere-plan/BackgroundChangerClientFr.tsx',
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
            const toolName = oldPattern.includes('remove-bg') ? 'Background Remover' :
                oldPattern.includes('upscale') ? 'Image Upscaler' :
                    oldPattern.includes('people-remover') ? 'People Remover' :
                        oldPattern.includes('replace-background') ? 'Background Changer' : 'Unknown';
            replacements.push(toolName);
        }
    });

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ ${filePath}`);
        replacements.forEach(r => console.log(`   → Updated: ${r}`));
        return true;
    } else {
        console.log(`⏭️  ${filePath} (already optimized)`);
        return false;
    }
}

console.log('🚀 Optimizing French language files...\n');

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
