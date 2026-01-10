const fs = require('fs');
const path = require('path');

// Statistiques
const stats = {
    original: { count: 0, totalSize: 0, byFormat: {} },
    optimized: { count: 0, totalSize: 0, byFormat: {} },
    issues: []
};

function getFileSize(filePath) {
    try {
        return fs.statSync(filePath).size;
    } catch (error) {
        return 0;
    }
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function scanDirectory(dir, type) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            scanDirectory(fullPath, type);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) {
                const size = getFileSize(fullPath);
                stats[type].count++;
                stats[type].totalSize += size;
                const format = ext.replace('.', '');
                if (!stats[type].byFormat[format]) {
                    stats[type].byFormat[format] = { count: 0, size: 0 };
                }
                stats[type].byFormat[format].count++;
                stats[type].byFormat[format].size += size;

                if (type === 'original' && size > 500 * 1024) {
                    stats.issues.push({ file: entry.name, size: formatSize(size) });
                }
            }
        }
    }
}

function checkCodeReferences() {
    const codeIssues = [];

    function scanCodeDirectory(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name !== 'node_modules' && entry.name !== '.next') {
                    scanCodeDirectory(fullPath);
                }
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name);
                if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const oldPathMatches = content.match(/\/images\/[^"'\s]+\.(png|jpg|jpeg|gif)/gi);
                    if (oldPathMatches && oldPathMatches.length > 0) {
                        codeIssues.push({
                            file: path.relative(process.cwd(), fullPath),
                            count: oldPathMatches.length
                        });
                    }
                }
            }
        }
    }

    scanCodeDirectory('./app');
    scanCodeDirectory('./components');
    return codeIssues;
}

// Exécuter le diagnostic
scanDirectory('./public/images', 'original');
scanDirectory('./public/images-optimized', 'optimized');
const codeIssues = checkCodeReferences();

// Créer le rapport
let report = '# 🔍 DIAGNOSTIC COMPLET DES IMAGES\n\n';
report += `Date: ${new Date().toLocaleString('fr-FR')}\n\n`;
report += '---\n\n';

report += '## 📊 STATISTIQUES GLOBALES\n\n';
report += `- **Images totales**: ${stats.original.count + stats.optimized.count}\n`;
report += `- **Images originales**: ${stats.original.count} (${formatSize(stats.original.totalSize)})\n`;
report += `- **Images optimisées**: ${stats.optimized.count} (${formatSize(stats.optimized.totalSize)})\n\n`;

if (stats.original.totalSize > 0 && stats.optimized.totalSize > 0) {
    const reduction = ((stats.original.totalSize - stats.optimized.totalSize) / stats.original.totalSize * 100).toFixed(1);
    const saved = stats.original.totalSize - stats.optimized.totalSize;
    report += '## 💰 GAINS D\'OPTIMISATION\n\n';
    report += `- **Réduction**: ${reduction}%\n`;
    report += `- **Économisé**: ${formatSize(saved)}\n`;
    report += `- **Avant**: ${formatSize(stats.original.totalSize)}\n`;
    report += `- **Après**: ${formatSize(stats.optimized.totalSize)}\n\n`;
}

report += '---\n\n';
report += '## 📁 IMAGES ORIGINALES (public/images/)\n\n';
report += `**Total**: ${stats.original.count} fichiers - ${formatSize(stats.original.totalSize)}\n\n`;
report += '**Par format**:\n';
for (const [format, data] of Object.entries(stats.original.byFormat)) {
    report += `- ${format.toUpperCase()}: ${data.count} fichiers (${formatSize(data.size)})\n`;
}

report += '\n---\n\n';
report += '## 📁 IMAGES OPTIMISÉES (public/images-optimized/)\n\n';
report += `**Total**: ${stats.optimized.count} fichiers - ${formatSize(stats.optimized.totalSize)}\n\n`;
report += '**Par format**:\n';
for (const [format, data] of Object.entries(stats.optimized.byFormat)) {
    report += `- ${format.toUpperCase()}: ${data.count} fichiers (${formatSize(data.size)})\n`;
}

if (stats.issues.length > 0) {
    report += '\n---\n\n';
    report += '## ⚠️ IMAGES LOURDES À OPTIMISER\n\n';
    report += `${stats.issues.length} image(s) > 500 KB détectée(s):\n\n`;
    stats.issues.forEach((issue, i) => {
        report += `${i + 1}. **${issue.file}** - ${issue.size}\n`;
    });
}

report += '\n---\n\n';
report += '## 🔍 VÉRIFICATION DU CODE\n\n';
if (codeIssues.length > 0) {
    report += `⚠️ **${codeIssues.length} fichier(s)** utilisent encore des images non optimisées:\n\n`;
    codeIssues.forEach(issue => {
        report += `- \`${issue.file}\` (${issue.count} référence(s))\n`;
    });
} else {
    report += '✅ **Tous les fichiers utilisent les images optimisées !**\n';
}

report += '\n---\n\n';
report += '## 📋 RÉSUMÉ FINAL\n\n';
const totalImages = stats.original.count + stats.optimized.count;
const optimizedPercentage = ((stats.optimized.count / totalImages) * 100).toFixed(1);

report += `- Images totales: **${totalImages}**\n`;
report += `- Images optimisées: **${stats.optimized.count}** (${optimizedPercentage}%)\n`;
report += `- Images originales: **${stats.original.count}**\n\n`;

if (stats.optimized.count > 100) {
    report += '### ✅ STATUT: OPTIMISATION RÉUSSIE\n\n';
    report += 'Toutes les images principales ont été optimisées avec succès !\n';
} else if (stats.optimized.count > 0) {
    report += '### ⚠️ STATUT: OPTIMISATION PARTIELLE\n\n';
    report += 'Certaines images ont été optimisées, mais il reste du travail.\n';
} else {
    report += '### ❌ STATUT: AUCUNE OPTIMISATION\n\n';
    report += 'Aucune image n\'a été optimisée.\n';
}

// Sauvegarder le rapport
fs.writeFileSync('IMAGE-DIAGNOSTIC-REPORT.md', report);
console.log('✅ Rapport de diagnostic créé: IMAGE-DIAGNOSTIC-REPORT.md\n');
console.log(report);
