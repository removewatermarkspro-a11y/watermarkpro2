const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Liste des fichiers HTML à convertir
const htmlFiles = [
    'og-watermark-remover.html',
    'og-video-watermark.html',
    'og-sora-remover.html',
    'og-background-remover.html',
    'og-background-changer.html',
    'og-text-remover.html',
    'og-object-remover.html',
    'og-people-remover.html',
    'og-image-upscaler.html'
];

async function generateOGImages() {
    console.log('🚀 Démarrage de la génération automatique des images OG...\n');

    // Lancer le navigateur
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: {
            width: 1200,
            height: 630
        }
    });

    const page = await browser.newPage();

    // Créer le dossier de sortie
    const outputDir = './public';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Générer chaque image
    for (let i = 0; i < htmlFiles.length; i++) {
        const htmlFile = htmlFiles[i];
        const htmlPath = path.join(__dirname, 'og-images-html', htmlFile);
        const outputPath = path.join(outputDir, htmlFile.replace('.html', '.jpg'));

        console.log(`📸 ${i + 1}/${htmlFiles.length} - Génération de ${htmlFile}...`);

        // Charger le HTML
        await page.goto(`file://${htmlPath}`, {
            waitUntil: 'networkidle0'
        });

        // Attendre que tout soit chargé
        await page.waitForTimeout(500);

        // Prendre la capture d'écran
        await page.screenshot({
            path: outputPath,
            type: 'jpeg',
            quality: 90,
            clip: {
                x: 0,
                y: 0,
                width: 1200,
                height: 630
            }
        });

        console.log(`   ✅ Sauvegardé: ${outputPath}`);
    }

    await browser.close();

    console.log('\n🎉 TERMINÉ !\n');
    console.log(`✅ ${htmlFiles.length} images OG générées dans /public/\n`);
    console.log('📋 PROCHAINES ÉTAPES:\n');
    console.log('1. Vérifiez les images dans /public/');
    console.log('2. Mettez à jour les meta tags dans les page.tsx');
    console.log('3. Testez avec https://www.opengraph.xyz/\n');
}

// Lancer la génération
generateOGImages().catch(error => {
    console.error('❌ Erreur:', error);
    process.exit(1);
});
