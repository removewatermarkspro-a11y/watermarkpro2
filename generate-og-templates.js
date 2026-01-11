const fs = require('fs');
const path = require('path');

// Liste des outils avec leurs informations
const tools = [
    {
        name: 'Watermark Remover',
        filename: 'og-watermark-remover.jpg',
        subtitle: 'AI-Powered • 1-Click • 100% Free',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Video Watermark Remover',
        filename: 'og-video-watermark.jpg',
        subtitle: 'Remove TikTok Watermarks • Free AI Tool',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Sora Watermark Remover',
        filename: 'og-sora-remover.jpg',
        subtitle: 'Remove OpenAI Sora Branding • Free',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Background Remover',
        filename: 'og-background-remover.jpg',
        subtitle: 'AI-Powered • Instant Results • Free',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Background Changer',
        filename: 'og-background-changer.jpg',
        subtitle: 'Replace Backgrounds with AI • Free',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Text Remover',
        filename: 'og-text-remover.jpg',
        subtitle: 'Remove Text from Images • AI Tool',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Object Remover',
        filename: 'og-object-remover.jpg',
        subtitle: 'Delete Unwanted Objects • AI-Powered',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'People Remover',
        filename: 'og-people-remover.jpg',
        subtitle: 'Remove People from Photos • Free AI',
        color1: '#6366f1',
        color2: '#8b5cf6'
    },
    {
        name: 'Image Upscaler',
        filename: 'og-image-upscaler.jpg',
        subtitle: 'Enhance Image Quality • AI 4x Upscale',
        color1: '#6366f1',
        color2: '#8b5cf6'
    }
];

// Générer le HTML pour chaque image
function generateHTML(tool) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${tool.name} - OG Image</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            width: 1200px;
            height: 630px;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .container {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, ${tool.color1} 0%, ${tool.color2} 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        /* Decorative elements */
        .circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
        }
        
        .circle1 {
            width: 400px;
            height: 400px;
            top: -200px;
            right: -100px;
        }
        
        .circle2 {
            width: 300px;
            height: 300px;
            bottom: -150px;
            left: -100px;
        }
        
        .circle3 {
            width: 200px;
            height: 200px;
            top: 50%;
            left: 10%;
            opacity: 0.5;
        }
        
        /* Content */
        .content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 60px;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 700;
            color: white;
            margin-bottom: 40px;
            opacity: 0.9;
        }
        
        h1 {
            font-size: 72px;
            font-weight: 800;
            color: white;
            margin-bottom: 20px;
            line-height: 1.2;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 36px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 40px;
        }
        
        .badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            padding: 12px 32px;
            border-radius: 50px;
            font-size: 24px;
            font-weight: 600;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        /* Brand */
        .brand {
            position: absolute;
            bottom: 40px;
            right: 60px;
            font-size: 28px;
            font-weight: 700;
            color: white;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        
        <div class="content">
            <div class="logo">Remove Watermark Pro</div>
            <h1>${tool.name}</h1>
            <div class="subtitle">${tool.subtitle}</div>
            <div class="badge">Free AI Tool</div>
        </div>
        
        <div class="brand">removewatermarkpro.com</div>
    </div>
</body>
</html>`;
}

// Créer le dossier de sortie
const outputDir = './og-images-html';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Générer tous les fichiers HTML
console.log('🎨 Génération des templates HTML pour les images OG...\n');

tools.forEach((tool, index) => {
    const html = generateHTML(tool);
    const htmlPath = path.join(outputDir, tool.filename.replace('.jpg', '.html'));

    fs.writeFileSync(htmlPath, html);
    console.log(`✅ ${index + 1}/9 - ${tool.name}`);
});

console.log('\n✅ Tous les templates HTML créés !\n');
console.log('📋 PROCHAINES ÉTAPES:\n');
console.log('1. Ouvrez chaque fichier HTML dans votre navigateur');
console.log('2. Redimensionnez la fenêtre à 1200x630px (ou utilisez les DevTools)');
console.log('3. Prenez une capture d\'écran (ou utilisez un outil comme Puppeteer)');
console.log('4. Sauvegardez les images dans /public/\n');
console.log('💡 OU utilisez le script automatique avec Puppeteer (voir generate-og-images-auto.js)\n');
console.log(`📁 Fichiers HTML créés dans: ${outputDir}/\n`);
