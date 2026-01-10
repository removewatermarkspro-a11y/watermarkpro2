const fs = require('fs');
const path = require('path');

// Mapping des pages vers leurs FAQ items
const pageToFaqMapping = {
    'app/watermark-remover/page.tsx': {
        import: "import { commonFaqItems } from '@/utils/faqItems'",
        variable: 'commonFaqItems'
    },
    'app/watermark-remover-video/page.tsx': {
        import: "import { commonFaqItems } from '@/utils/faqItems'",
        variable: 'commonFaqItems'
    },
    'app/sora-watermark-remover/page.tsx': {
        import: "import { soraRemoverFaqItems } from '@/utils/soraRemoverFaqItems'",
        variable: 'soraRemoverFaqItems'
    },
    'app/background-remover/page.tsx': {
        import: "import { backgroundRemovalFaqItems } from '@/utils/faqItems'",
        variable: 'backgroundRemovalFaqItems'
    },
    'app/background-changer-ai/page.tsx': {
        import: "import { replaceBackgroundFaqItems } from '@/utils/faqItems'",
        variable: 'replaceBackgroundFaqItems'
    },
    'app/text-remover-ai/page.tsx': {
        import: "import { textRemovalFaqItems } from '@/utils/faqItems'",
        variable: 'textRemovalFaqItems'
    },
    'app/object-remover-ai/page.tsx': {
        import: "import { objectRemovalFaqItems } from '@/utils/faqItems'",
        variable: 'objectRemovalFaqItems'
    },
    'app/people-remover-ai/page.tsx': {
        import: "import { peopleRemovalFaqItems } from '@/utils/faqItems'",
        variable: 'peopleRemovalFaqItems'
    },
    'app/image-upscaler-ai/page.tsx': {
        import: "import { imageUpscalerFaqItems } from '@/utils/faqItems'",
        variable: 'imageUpscalerFaqItems'
    }
};

const stats = {
    updated: 0,
    errors: [],
    changes: []
};

function addFaqSchema(filePath, faqConfig) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let modified = false;

        // 1. Vérifier si createFAQSchema est déjà importé
        if (!content.includes('createFAQSchema')) {
            // Ajouter createFAQSchema à l'import de StructuredData
            const structuredDataImport = /import StructuredData, { ([^}]+) } from '@\/components\/StructuredData'/;
            if (content.match(structuredDataImport)) {
                content = content.replace(
                    structuredDataImport,
                    (match, imports) => {
                        if (!imports.includes('createFAQSchema')) {
                            return `import StructuredData, { ${imports}, createFAQSchema } from '@/components/StructuredData'`;
                        }
                        return match;
                    }
                );
                modified = true;
                stats.changes.push(`${path.basename(filePath)}: Added createFAQSchema import`);
            }
        }

        // 2. Vérifier si FAQ items sont déjà importés
        if (!content.includes(faqConfig.variable)) {
            // Ajouter l'import des FAQ items après les imports de StructuredData
            const lastImportLine = content.lastIndexOf('import');
            const endOfLastImport = content.indexOf('\n', lastImportLine);

            content = content.slice(0, endOfLastImport + 1) +
                faqConfig.import + '\n' +
                content.slice(endOfLastImport + 1);
            modified = true;
            stats.changes.push(`${path.basename(filePath)}: Added FAQ items import`);
        }

        // 3. Ajouter le schema FAQ avant </> de fermeture
        if (!content.includes('createFAQSchema')) {
            // Trouver la ligne avec <WatermarkRemoverClient /> ou équivalent
            const clientComponentPattern = /<\w+Client \/>/;
            const match = content.match(clientComponentPattern);

            if (match) {
                const faqSchemaLine = `            <StructuredData data={createFAQSchema(${faqConfig.variable})} />\n`;
                content = content.replace(
                    clientComponentPattern,
                    faqSchemaLine + '            ' + match[0]
                );
                modified = true;
                stats.changes.push(`${path.basename(filePath)}: Added FAQ schema markup`);
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            stats.updated++;
            console.log(`✅ ${path.basename(filePath)}`);
            console.log(`   → FAQ schema added with ${faqConfig.variable}`);
        } else {
            console.log(`⚠️  ${path.basename(filePath)} - Already has FAQ schema or no changes needed`);
        }

    } catch (error) {
        stats.errors.push(`${filePath}: ${error.message}`);
        console.log(`❌ ${path.basename(filePath)}: ${error.message}`);
    }
}

console.log('📋 AJOUT DU SCHEMA FAQ\n');
console.log('═'.repeat(70) + '\n');

// Traiter chaque page
for (const [pagePath, faqConfig] of Object.entries(pageToFaqMapping)) {
    const fullPath = path.join(process.cwd(), pagePath);

    if (fs.existsSync(fullPath)) {
        addFaqSchema(fullPath, faqConfig);
    } else {
        console.log(`⚠️  ${pagePath} - Fichier non trouvé`);
        stats.errors.push(`${pagePath} - fichier non trouvé`);
    }
}

// Résumé
console.log('\n' + '═'.repeat(70));
console.log('\n📊 RÉSUMÉ\n');
console.log(`✅ Fichiers mis à jour: ${stats.updated}/${Object.keys(pageToFaqMapping).length}`);

if (stats.changes.length > 0) {
    console.log('\n📝 CHANGEMENTS:\n');
    stats.changes.forEach(change => console.log(`   ${change}`));
}

if (stats.errors.length > 0) {
    console.log(`\n❌ Erreurs: ${stats.errors.length}`);
    stats.errors.forEach(err => console.log(`   - ${err}`));
}

console.log('\n💡 IMPACT ATTENDU:\n');
console.log('   ✅ Rich snippets FAQ dans Google');
console.log('   ✅ Accordéon FAQ dans les SERPs');
console.log('   ✅ +15% de CTR estimé');
console.log('   ✅ Meilleur positionnement pour les questions');

console.log('\n🧪 PROCHAINES ÉTAPES:\n');
console.log('1. Vérifiez les changements avec git diff');
console.log('2. Testez avec Google Rich Results Test');
console.log('3. Déployez en production\n');

console.log('✅ Ajout du schema FAQ terminé !\n');
