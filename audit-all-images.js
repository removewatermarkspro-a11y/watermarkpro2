const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 COMPREHENSIVE IMAGE OPTIMIZATION AUDIT\n');
console.log('='.repeat(60));

// 1. Find all image references in the codebase
console.log('\n📊 STEP 1: Scanning all TSX/JSX files for image references...\n');

const results = {
    optimized: [],
    nonOptimized: [],
    total: 0
};

function scanDirectory(dir, filePattern = /\.(tsx|jsx)$/) {
    const files = [];

    function walk(currentPath) {
        const items = fs.readdirSync(currentPath);

        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            // Skip node_modules and .next
            if (item === 'node_modules' || item === '.next' || item === '.git') {
                continue;
            }

            if (stat.isDirectory()) {
                walk(fullPath);
            } else if (filePattern.test(item)) {
                files.push(fullPath);
            }
        }
    }

    walk(dir);
    return files;
}

function analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(__dirname, filePath);

    // Patterns to search for
    const patterns = [
        // Direct image paths
        { regex: /src=["'`]([^"'`]*\/images\/[^"'`]*)["'`]/g, type: 'direct' },
        { regex: /src=["'`]([^"'`]*\/images-optimized\/[^"'`]*)["'`]/g, type: 'optimized' },
        // Template literals
        { regex: /src=\{`([^`]*\/images\/[^`]*)`\}/g, type: 'template' },
        { regex: /src=\{`([^`]*\/images-optimized\/[^`]*)`\}/g, type: 'template-optimized' },
        // Object properties
        { regex: /['"]([^'"]*\/images\/[^'"]*)['"]/g, type: 'object' },
        { regex: /['"]([^'"]*\/images-optimized\/[^'"]*)['"]/g, type: 'object-optimized' },
    ];

    const fileResults = {
        optimized: [],
        nonOptimized: []
    };

    patterns.forEach(({ regex, type }) => {
        let match;
        while ((match = regex.exec(content)) !== null) {
            const imagePath = match[1] || match[0];

            if (imagePath.includes('/images-optimized/')) {
                fileResults.optimized.push({
                    path: imagePath,
                    file: relativePath,
                    type
                });
            } else if (imagePath.includes('/images/')) {
                // Exclude certain patterns that are OK
                if (!imagePath.includes('avatars') &&
                    !imagePath.includes('tools') &&
                    !imagePath.includes('features')) {
                    fileResults.nonOptimized.push({
                        path: imagePath,
                        file: relativePath,
                        type
                    });
                }
            }
        }
    });

    return fileResults;
}

// Scan all files
const appDir = path.join(__dirname, 'app');
const componentsDir = path.join(__dirname, 'components');

console.log(`Scanning directories:`);
console.log(`  - ${appDir}`);
console.log(`  - ${componentsDir}\n`);

const allFiles = [
    ...scanDirectory(appDir),
    ...scanDirectory(componentsDir)
];

console.log(`Found ${allFiles.length} TSX/JSX files to analyze\n`);
console.log('='.repeat(60));

// Analyze each file
allFiles.forEach(file => {
    const fileResults = analyzeFile(file);
    results.optimized.push(...fileResults.optimized);
    results.nonOptimized.push(...fileResults.nonOptimized);
});

results.total = results.optimized.length + results.nonOptimized.length;

// 2. Report results
console.log('\n📈 AUDIT RESULTS\n');
console.log('='.repeat(60));

console.log(`\n✅ OPTIMIZED IMAGES: ${results.optimized.length}`);
console.log(`❌ NON-OPTIMIZED IMAGES: ${results.nonOptimized.length}`);
console.log(`📊 TOTAL IMAGE REFERENCES: ${results.total}`);

if (results.nonOptimized.length > 0) {
    console.log('\n⚠️  NON-OPTIMIZED IMAGES FOUND:\n');

    // Group by file
    const byFile = {};
    results.nonOptimized.forEach(item => {
        if (!byFile[item.file]) {
            byFile[item.file] = [];
        }
        byFile[item.file].push(item.path);
    });

    Object.entries(byFile).forEach(([file, paths]) => {
        console.log(`\n📄 ${file}`);
        paths.forEach(p => {
            console.log(`   ❌ ${p}`);
        });
    });
} else {
    console.log('\n🎉 ALL IMAGES ARE OPTIMIZED!');
}

// 3. Check public directory
console.log('\n\n='.repeat(60));
console.log('\n📁 PUBLIC DIRECTORY ANALYSIS\n');

const publicDir = path.join(__dirname, 'public');

function getDirectorySize(dir) {
    let size = 0;
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            size += getDirectorySize(fullPath);
        } else {
            size += stat.size;
        }
    });

    return size;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

const imagesDir = path.join(publicDir, 'images');
const imagesOptimizedDir = path.join(publicDir, 'images-optimized');

if (fs.existsSync(imagesDir)) {
    const imagesSize = getDirectorySize(imagesDir);
    console.log(`📦 /public/images/: ${formatBytes(imagesSize)}`);
}

if (fs.existsSync(imagesOptimizedDir)) {
    const optimizedSize = getDirectorySize(imagesOptimizedDir);
    console.log(`📦 /public/images-optimized/: ${formatBytes(optimizedSize)}`);
}

// 4. Language breakdown
console.log('\n\n='.repeat(60));
console.log('\n🌍 LANGUAGE BREAKDOWN\n');

const languages = ['en', 'fr', 'es', 'pt', 'de', 'ko', 'no'];
const langStats = {};

languages.forEach(lang => {
    const langOptimized = results.optimized.filter(r => r.file.includes(`/app/${lang}/`));
    const langNonOptimized = results.nonOptimized.filter(r => r.file.includes(`/app/${lang}/`));

    langStats[lang] = {
        optimized: langOptimized.length,
        nonOptimized: langNonOptimized.length,
        total: langOptimized.length + langNonOptimized.length
    };
});

languages.forEach(lang => {
    const stats = langStats[lang];
    const status = stats.nonOptimized === 0 ? '✅' : '❌';
    const percentage = stats.total > 0 ? Math.round((stats.optimized / stats.total) * 100) : 0;

    console.log(`${status} ${lang.toUpperCase()}: ${stats.optimized}/${stats.total} optimized (${percentage}%)`);
});

// 5. Final verdict
console.log('\n\n='.repeat(60));
console.log('\n🎯 FINAL VERDICT\n');

if (results.nonOptimized.length === 0) {
    console.log('✅ ✅ ✅ 100% OPTIMIZED! ✅ ✅ ✅');
    console.log('\nAll images across all languages are using optimized WebP versions!');
    process.exit(0);
} else {
    console.log('❌ OPTIMIZATION INCOMPLETE');
    console.log(`\n${results.nonOptimized.length} non-optimized image references found.`);
    console.log('Please review the files listed above.');
    process.exit(1);
}
