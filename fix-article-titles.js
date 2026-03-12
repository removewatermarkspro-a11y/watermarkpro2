/**
 * fix-article-titles.js
 * 
 * Removes AI-generated title suffixes like "— The AI-Powered Guide", 
 * "— AI Guide", "— The Complete AI Guide", etc. from all blog articles
 * and the blog index page.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'app', 'blog');

// Patterns to remove from titles (order matters - most specific first)
const SUFFIXES_TO_REMOVE = [
    / — The AI-Powered Guide/gi,
    / — AI-Powered Guide/gi,
    / — The Complete AI Guide/gi,
    / — The AI Guide/gi,
    / — AI Guide/gi,
    / — AI-Powered/gi,
    / - The AI-Powered Guide/gi,
    / - AI-Powered Guide/gi,
    / - The Complete AI Guide/gi,
    / - AI Guide/gi,
    / \\u2014 The AI-Powered Guide/gi,
    / \\u2014 AI-Powered Guide/gi,
    / \\u2014 The Complete AI Guide/gi,
    / \\u2014 AI Guide/gi,
];

function cleanContent(content) {
    let cleaned = content;
    for (const pattern of SUFFIXES_TO_REMOVE) {
        cleaned = cleaned.replace(pattern, '');
    }
    return cleaned;
}

function fixAllFiles() {
    console.log('\n🔧 Removing AI-generated title suffixes from all blog articles...\n');

    let totalFilesFixed = 0;
    let totalReplacements = 0;

    // Process blog index
    const indexPath = path.join(BLOG_DIR, 'page.tsx');
    if (fs.existsSync(indexPath)) {
        const original = fs.readFileSync(indexPath, 'utf8');
        const cleaned = cleanContent(original);
        if (cleaned !== original) {
            const count = (original.length - cleaned.length);
            fs.writeFileSync(indexPath, cleaned, 'utf8');
            console.log(`✅ blog/page.tsx (index) — cleaned`);
            totalFilesFixed++;
        }
    }

    // Process each article directory
    const dirs = fs.readdirSync(BLOG_DIR).filter(d => {
        const fullPath = path.join(BLOG_DIR, d);
        return fs.statSync(fullPath).isDirectory();
    });

    for (const slug of dirs) {
        const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
        if (!fs.existsSync(pagePath)) continue;

        const original = fs.readFileSync(pagePath, 'utf8');
        const cleaned = cleanContent(original);

        if (cleaned !== original) {
            fs.writeFileSync(pagePath, cleaned, 'utf8');
            console.log(`✅ ${slug}/page.tsx — cleaned`);
            totalFilesFixed++;
        }
    }

    console.log(`\n📊 Summary: Cleaned ${totalFilesFixed} files\n`);
}

fixAllFiles();
