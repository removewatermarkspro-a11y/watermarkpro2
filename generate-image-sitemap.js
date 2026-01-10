const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    siteUrl: 'https://removewatermarkpro.com', // À remplacer par votre URL
    imagesDir: './public/images-optimized',
    outputFile: './public/image-sitemap.xml'
};

// Mapping des images vers leurs pages et descriptions
const imageMetadata = {
    // Watermark Remover
    'free-watermark-remover-tool.webp': {
        pages: ['/watermark-remover', '/'],
        caption: 'Free AI Watermark Remover Tool - Remove watermarks from images instantly',
        title: 'Free Watermark Remover'
    },
    'free-watermark-remover-feature.webp': {
        pages: ['/watermark-remover'],
        caption: 'AI-powered watermark removal feature with before and after comparison',
        title: 'Watermark Removal Feature'
    },
    'tiktok-watermark-remover-free.webp': {
        pages: ['/watermark-remover'],
        caption: 'Free TikTok watermark remover - Remove TikTok logos instantly',
        title: 'TikTok Watermark Remover'
    },

    // Sora Remover
    'openai-sora-watermark-remover.webp': {
        pages: ['/sora-watermark-remover'],
        caption: 'OpenAI Sora watermark remover - Remove Sora AI branding from videos',
        title: 'Sora Watermark Remover'
    },
    'sora-watermark-removal-ai.webp': {
        pages: ['/sora-watermark-remover'],
        caption: 'AI-powered Sora watermark removal technology',
        title: 'Sora AI Watermark Removal'
    },

    // Background Tools
    'ai-background-remover-free.webp': {
        pages: ['/background-remover'],
        caption: 'Free AI background remover - Remove backgrounds from images automatically',
        title: 'AI Background Remover'
    },
    'ai-background-changer-tool.webp': {
        pages: ['/background-changer-ai'],
        caption: 'AI background changer tool - Replace image backgrounds instantly',
        title: 'Background Changer Tool'
    },

    // Image Upscaler
    'ai-image-upscaler-free.webp': {
        pages: ['/image-upscaler-ai'],
        caption: 'Free AI image upscaler - Enhance and upscale image quality',
        title: 'AI Image Upscaler'
    },

    // Object & People Remover
    'ai-object-remover-tool.webp': {
        pages: ['/object-remover-ai'],
        caption: 'AI object remover tool - Delete unwanted objects from photos',
        title: 'Object Remover Tool'
    },
    'ai-people-remover-tool.webp': {
        pages: ['/people-remover-ai'],
        caption: 'AI people remover - Remove people from photos automatically',
        title: 'People Remover Tool'
    },

    // Text Remover
    'ai-text-remover-tool.webp': {
        pages: ['/text-remover-ai'],
        caption: 'AI text remover - Remove text from images instantly',
        title: 'Text Remover Tool'
    }
};

// Fonction pour scanner toutes les images
function scanImages() {
    const images = [];

    function scanDir(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                scanDir(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.webp')) {
                const relativePath = path.relative(config.imagesDir, fullPath).replace(/\\/g, '/');
                images.push({
                    filename: entry.name,
                    path: relativePath,
                    url: `${config.siteUrl}/images-optimized/${relativePath}`
                });
            }
        }
    }

    scanDir(config.imagesDir);
    return images;
}

// Fonction pour générer le XML
function generateSitemap(images) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

    // Grouper les images par page
    const pageImages = {};

    images.forEach(img => {
        const metadata = imageMetadata[img.filename];

        if (metadata && metadata.pages) {
            metadata.pages.forEach(page => {
                if (!pageImages[page]) {
                    pageImages[page] = [];
                }
                pageImages[page].push({
                    ...img,
                    caption: metadata.caption,
                    title: metadata.title
                });
            });
        } else {
            // Images sans métadonnées spécifiques - ajouter à la page d'accueil
            if (!pageImages['/']) {
                pageImages['/'] = [];
            }

            // Générer caption depuis le nom de fichier
            const caption = img.filename
                .replace('.webp', '')
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());

            pageImages['/'].push({
                ...img,
                caption: caption,
                title: caption
            });
        }
    });

    // Générer le XML pour chaque page
    for (const [page, imgs] of Object.entries(pageImages)) {
        xml += `  <url>\n`;
        xml += `    <loc>${config.siteUrl}${page}</loc>\n`;

        imgs.forEach(img => {
            xml += `    <image:image>\n`;
            xml += `      <image:loc>${img.url}</image:loc>\n`;
            if (img.caption) {
                xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
            }
            if (img.title) {
                xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
            }
            xml += `    </image:image>\n`;
        });

        xml += `  </url>\n`;
    }

    xml += '</urlset>';
    return xml;
}

// Fonction pour échapper les caractères XML
function escapeXml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Fonction principale
function main() {
    console.log('🗺️  GÉNÉRATION DU SITEMAP D\'IMAGES\n');
    console.log('═'.repeat(70) + '\n');

    console.log(`📂 Scan du dossier: ${config.imagesDir}`);
    const images = scanImages();
    console.log(`✅ ${images.length} images trouvées\n`);

    console.log('📝 Génération du XML...');
    const sitemap = generateSitemap(images);

    console.log(`💾 Sauvegarde: ${config.outputFile}`);
    fs.writeFileSync(config.outputFile, sitemap, 'utf8');

    console.log('\n' + '═'.repeat(70));
    console.log('\n📊 RÉSUMÉ\n');
    console.log(`✅ Images dans le sitemap: ${images.length}`);
    console.log(`✅ Fichier créé: ${config.outputFile}`);
    console.log(`✅ URL du sitemap: ${config.siteUrl}/image-sitemap.xml`);

    console.log('\n💡 PROCHAINES ÉTAPES\n');
    console.log('1. Vérifiez le fichier image-sitemap.xml');
    console.log('2. Ajoutez-le à votre robots.txt:');
    console.log('   Sitemap: https://votresite.com/image-sitemap.xml');
    console.log('3. Soumettez-le dans Google Search Console');
    console.log('4. Attendez l\'indexation (quelques jours)\n');

    console.log('✅ Sitemap d\'images créé avec succès !\n');
}

// Lancer le script
main();
