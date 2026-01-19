const fs = require('fs');
const path = require('path');

console.log('🔧 CORRECTION DE LA STRUCTURE DES IMAGES\n');
console.log('Alignement avec la version anglaise...\n');

// Mapping des fichiers et leurs images correspondantes
const fileConfigs = [
    // Background Changer
    {
        pattern: 'BackgroundChangerClient',
        images: [
            '/images-optimized/ai-background-replacement-example.webp',
            '/images-optimized/change-photo-background-free.webp',
            '/images-optimized/background-replacement-main-tool.webp'
        ],
        pageKey: 'replaceBackgroundPage'
    },
    // People Remover
    {
        pattern: 'PeopleRemoverClient',
        images: [
            '/images-optimized/ai-people-remover-beach.webp',
            '/images-optimized/beach-people-removal-ai.webp',
            '/images-optimized/delete-people-from-image.webp'
        ],
        pageKey: 'peopleRemovalPage'
    },
    // Object Remover
    {
        pattern: 'ObjectRemoverClient',
        images: [
            '/images-optimized/ai-object-removal-example.webp',
            '/images-optimized/delete-objects-from-image-ai.webp',
            '/images-optimized/remove-object-from-photo-ai.webp'
        ],
        pageKey: 'removeObjectPage'
    },
    // Background Remover
    {
        pattern: 'BackgroundRemoverClient',
        images: [
            '/images-optimized/ai-background-remover-free.webp',
            '/images-optimized/background-removal-tool-ai.webp',
            '/images-optimized/background-removal-main-tool.webp'
        ],
        pageKey: 'removeBackgroundPage'
    },
    // Image Upscaler
    {
        pattern: 'ImageUpscalerClient',
        images: [
            '/images-optimized/upscale-image-quality-ai.webp',
            '/images-optimized/enhance-cat-image-quality.webp',
            '/images-optimized/ai-upscale-cat-photo.webp'
        ],
        pageKey: 'imageUpscalerPage'
    }
];

const languages = ['pt', 'ko', 'no', 'es', 'fr', 'de'];

function generateFeatureSection(config) {
    const { images, pageKey } = config;

    return `                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}><span className={styles.badge}>{t.${pageKey}.features.badge}</span></div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="${images[0]}" alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.${pageKey}.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.${pageKey}.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={() => { if (!user) setShowAuthPopup(true); else if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{t.${pageKey}.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="${images[1]}" alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.${pageKey}.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.${pageKey}.features.feature2.description}</p>
                                    <button className="btn btn-primary" onClick={() => { if (!user) setShowAuthPopup(true); else if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{t.${pageKey}.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="${images[2]}" alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.${pageKey}.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>{t.${pageKey}.features.feature3.description}</p>
                                    <button className="btn btn-primary" onClick={() => { if (!user) setShowAuthPopup(true); else if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{t.${pageKey}.features.feature3.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>`;
}

function findAndReplaceFeatureSection(filePath, config) {
    if (!fs.existsSync(filePath)) {
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const { pageKey } = config;

    // Pattern pour trouver la section features avec .map()
    const mapPattern = new RegExp(
        `<section className={styles\\.features}>\\s*` +
        `<div[^>]*>\\s*<span[^>]*>{t\\.${pageKey}\\.features\\.badge}</span>\\s*</div>\\s*` +
        `<div className={styles\\.featureGrid}>\\s*` +
        `{\\[1, 2, 3\\]\\.map\\(i => \\([\\s\\S]*?\\)\\)}\\s*` +
        `</div>\\s*` +
        `</section>`,
        'g'
    );

    if (mapPattern.test(content)) {
        const newSection = generateFeatureSection(config);
        content = content.replace(mapPattern, newSection);
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    return false;
}

function findFiles(dir, pattern) {
    const files = [];

    function walk(currentPath) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walk(fullPath);
            } else if (item.includes(pattern) && item.endsWith('.tsx')) {
                files.push(fullPath);
            }
        }
    }

    walk(dir);
    return files;
}

let totalFixed = 0;

fileConfigs.forEach(config => {
    console.log(`\n📝 Traitement: ${config.pattern}`);

    languages.forEach(lang => {
        const langDir = path.join(__dirname, 'app', lang);
        const files = findFiles(langDir, config.pattern);

        files.forEach(file => {
            const relativePath = path.relative(__dirname, file);
            if (findAndReplaceFeatureSection(file, config)) {
                console.log(`  ✅ ${relativePath}`);
                totalFixed++;
            }
        });
    });
});

console.log(`\n\n✨ Terminé! ${totalFixed} fichiers corrigés.`);
