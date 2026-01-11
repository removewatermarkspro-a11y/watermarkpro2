const fs = require('fs');
const path = require('path');

// Analyse des noms d'images
const analysis = {
    total: 0,
    duplicates: [],
    seoIssues: [],
    goodNames: [],
    byCategory: {}
};

// Critères SEO pour les noms de fichiers
const seoChecks = {
    hasDashes: (name) => name.includes('-'),
    hasKeywords: (name) => {
        const keywords = ['ai', 'free', 'watermark', 'remover', 'remove', 'sora', 'background', 'image', 'photo', 'tool', 'video'];
        return keywords.some(keyword => name.toLowerCase().includes(keyword));
    },
    isDescriptive: (name) => name.split('-').length >= 3,
    noNumbers: (name) => !/^\d+/.test(name) && !/-\d+\.webp$/.test(name),
    properLength: (name) => {
        const nameWithoutExt = name.replace('.webp', '');
        return nameWithoutExt.length >= 15 && nameWithoutExt.length <= 60;
    }
};

// Scanner le dossier
function scanImages() {
    const imagesDir = './public/images-optimized';
    const imageNames = new Map();

    function scanDir(dir, category = '') {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                scanDir(fullPath, entry.name);
            } else if (entry.isFile() && entry.name.endsWith('.webp')) {
                analysis.total++;

                // Vérifier les doublons
                if (imageNames.has(entry.name)) {
                    analysis.duplicates.push({
                        name: entry.name,
                        paths: [imageNames.get(entry.name), fullPath]
                    });
                } else {
                    imageNames.set(entry.name, fullPath);
                }

                // Analyser le SEO
                const seoScore = {
                    name: entry.name,
                    category: category || 'root',
                    checks: {
                        hasDashes: seoChecks.hasDashes(entry.name),
                        hasKeywords: seoChecks.hasKeywords(entry.name),
                        isDescriptive: seoChecks.isDescriptive(entry.name),
                        noNumbers: seoChecks.noNumbers(entry.name),
                        properLength: seoChecks.properLength(entry.name)
                    }
                };

                const passedChecks = Object.values(seoScore.checks).filter(v => v).length;
                seoScore.score = passedChecks;
                seoScore.passed = passedChecks >= 4;

                if (seoScore.passed) {
                    analysis.goodNames.push(seoScore);
                } else {
                    analysis.seoIssues.push(seoScore);
                }

                // Catégoriser
                if (!analysis.byCategory[seoScore.category]) {
                    analysis.byCategory[seoScore.category] = [];
                }
                analysis.byCategory[seoScore.category].push(entry.name);
            }
        }
    }

    scanDir(imagesDir);
}

// Générer le rapport
function generateReport() {
    let report = '# 🔍 DIAGNOSTIC DES NOMS D\'IMAGES SEO\n\n';
    report += `Date: ${new Date().toLocaleString('fr-FR')}\n\n`;
    report += '---\n\n';

    // Statistiques globales
    report += '## 📊 STATISTIQUES GLOBALES\n\n';
    report += `- **Total d'images**: ${analysis.total}\n`;
    report += `- **Noms optimisés SEO**: ${analysis.goodNames.length} (${((analysis.goodNames.length / analysis.total) * 100).toFixed(1)}%)\n`;
    report += `- **Noms à améliorer**: ${analysis.seoIssues.length}\n`;
    report += `- **Doublons détectés**: ${analysis.duplicates.length}\n\n`;

    // Score SEO global
    const avgScore = (analysis.goodNames.reduce((sum, img) => sum + img.score, 0) +
        analysis.seoIssues.reduce((sum, img) => sum + img.score, 0)) / analysis.total;
    report += `**Score SEO moyen**: ${avgScore.toFixed(1)}/5 `;
    report += avgScore >= 4.5 ? '✅ Excellent\n' : avgScore >= 4 ? '✅ Très bon\n' : avgScore >= 3 ? '⚠️ Moyen\n' : '❌ À améliorer\n';
    report += '\n---\n\n';

    // Répartition par catégorie
    report += '## 📁 RÉPARTITION PAR CATÉGORIE\n\n';
    for (const [category, images] of Object.entries(analysis.byCategory)) {
        report += `### ${category === 'root' ? 'Racine' : category}\n`;
        report += `${images.length} image(s)\n\n`;
    }
    report += '---\n\n';

    // Doublons
    if (analysis.duplicates.length > 0) {
        report += '## ⚠️ DOUBLONS DÉTECTÉS\n\n';
        analysis.duplicates.forEach((dup, i) => {
            report += `${i + 1}. **${dup.name}**\n`;
            dup.paths.forEach(p => report += `   - ${p}\n`);
            report += '\n';
        });
        report += '---\n\n';
    }

    // Images à améliorer
    if (analysis.seoIssues.length > 0) {
        report += '## 🔧 NOMS À AMÉLIORER (Score < 4/5)\n\n';
        report += `${analysis.seoIssues.length} image(s) nécessitent une optimisation:\n\n`;

        analysis.seoIssues.sort((a, b) => a.score - b.score).forEach((img, i) => {
            report += `${i + 1}. **${img.name}** (Score: ${img.score}/5)\n`;
            report += '   Problèmes:\n';
            if (!img.checks.hasDashes) report += '   - ❌ Pas de tirets (utiliser des tirets pour séparer les mots)\n';
            if (!img.checks.hasKeywords) report += '   - ❌ Manque de mots-clés SEO\n';
            if (!img.checks.isDescriptive) report += '   - ❌ Nom trop court ou peu descriptif\n';
            if (!img.checks.noNumbers) report += '   - ❌ Contient des numéros génériques\n';
            if (!img.checks.properLength) report += '   - ❌ Longueur non optimale (15-60 caractères recommandés)\n';
            report += '\n';
        });
        report += '---\n\n';
    }

    // Top 10 meilleurs noms
    report += '## ✅ TOP 10 MEILLEURS NOMS SEO\n\n';
    const top10 = analysis.goodNames
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    top10.forEach((img, i) => {
        report += `${i + 1}. **${img.name}** (${img.score}/5)\n`;
    });
    report += '\n---\n\n';

    // Recommandations
    report += '## 💡 RECOMMANDATIONS\n\n';

    if (analysis.seoIssues.length === 0) {
        report += '✅ **Excellent travail !** Tous vos noms d\'images sont optimisés pour le SEO.\n\n';
    } else {
        report += '### Critères SEO pour les noms d\'images:\n\n';
        report += '1. **Utiliser des tirets** pour séparer les mots (ex: `ai-watermark-remover.webp`)\n';
        report += '2. **Inclure des mots-clés** pertinents (ai, free, watermark, remover, etc.)\n';
        report += '3. **Être descriptif** (minimum 3 mots séparés par des tirets)\n';
        report += '4. **Éviter les numéros** génériques (ex: `-1`, `-2`)\n';
        report += '5. **Longueur optimale** entre 15 et 60 caractères\n\n';

        report += '### Actions recommandées:\n\n';
        if (analysis.duplicates.length > 0) {
            report += `- ⚠️ Supprimer ou renommer ${analysis.duplicates.length} doublon(s)\n`;
        }
        if (analysis.seoIssues.length > 0) {
            report += `- 🔧 Optimiser ${analysis.seoIssues.length} nom(s) d'image pour le SEO\n`;
        }
    }

    report += '\n---\n\n';
    report += '## 📋 RÉSUMÉ FINAL\n\n';

    const seoPercentage = (analysis.goodNames.length / analysis.total) * 100;

    if (seoPercentage >= 95) {
        report += '### ✅ EXCELLENT\n\n';
        report += 'Vos noms d\'images sont parfaitement optimisés pour le SEO !\n';
    } else if (seoPercentage >= 80) {
        report += '### ✅ TRÈS BON\n\n';
        report += 'La majorité de vos images ont des noms optimisés. Quelques ajustements mineurs recommandés.\n';
    } else if (seoPercentage >= 60) {
        report += '### ⚠️ MOYEN\n\n';
        report += 'Plusieurs images nécessitent une optimisation de leurs noms pour améliorer le SEO.\n';
    } else {
        report += '### ❌ À AMÉLIORER\n\n';
        report += 'Une révision importante des noms d\'images est recommandée pour optimiser le SEO.\n';
    }

    return report;
}

// Exécuter l'analyse
console.log('🔍 Analyse des noms d\'images en cours...\n');
scanImages();
const report = generateReport();

// Sauvegarder le rapport
fs.writeFileSync('IMAGE-SEO-DIAGNOSTIC.md', report);
console.log('✅ Rapport créé: IMAGE-SEO-DIAGNOSTIC.md\n');
console.log(report);
