/**
 * fix-article-images.js
 * 
 * Replaces ALL expired replicate.delivery image URLs inside blog article page.tsx files
 * with local images from public/images/blog/
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'app', 'blog');
const LOCAL_IMAGES_DIR = path.join(__dirname, 'public', 'images', 'blog');

// Available local image sets (grouped by theme)
const IMAGE_SETS = {
    'photo': [
        '/images/blog/dewatermark-1.jpg',
        '/images/blog/dewatermark-2.jpg',
        '/images/blog/dewatermark-3.jpg',
        '/images/blog/dewatermark-4.jpg',
        '/images/blog/dewatermark-5.jpg',
    ],
    'proof': [
        '/images/blog/remove-proof-from-picture-1.jpg',
        '/images/blog/remove-proof-from-picture-2.jpg',
        '/images/blog/remove-proof-from-picture-3.jpg',
        '/images/blog/remove-proof-from-picture-4.jpg',
        '/images/blog/remove-proof-from-picture-5.jpg',
    ],
    'tiktok': [
        '/images/blog/remove-tiktok-watermark-1.jpg',
        '/images/blog/remove-tiktok-watermark-2.jpg',
        '/images/blog/remove-tiktok-watermark-3.jpg',
        '/images/blog/remove-tiktok-watermark-4.jpg',
        '/images/blog/remove-tiktok-watermark-5.jpg',
    ],
    'video': [
        '/images/blog/remove-video-watermark-1.jpg',
        '/images/blog/remove-video-watermark-2.jpg',
        '/images/blog/remove-video-watermark-3.jpg',
        '/images/blog/remove-video-watermark-4.jpg',
        '/images/blog/remove-video-watermark-5.jpg',
    ],
    'save-tiktok': [
        '/images/blog/save-tiktok-without-watermark-1.jpg',
        '/images/blog/save-tiktok-without-watermark-2.jpg',
        '/images/blog/save-tiktok-without-watermark-3.jpg',
        '/images/blog/save-tiktok-without-watermark-4.jpg',
        '/images/blog/save-tiktok-without-watermark-5.jpg',
    ],
    'download-tiktok': [
        '/images/blog/download-tiktok-video-without-watermark-1.jpg',
        '/images/blog/download-tiktok-video-without-watermark-2.jpg',
        '/images/blog/download-tiktok-video-without-watermark-3.jpg',
        '/images/blog/download-tiktok-video-without-watermark-4.jpg',
        '/images/blog/download-tiktok-video-without-watermark-5.jpg',
    ],
};

// Map each blog slug to the best-matching image set
function getImageSetForSlug(slug) {
    if (slug.includes('tiktok') && (slug.includes('download') || slug.includes('downloader'))) return IMAGE_SETS['download-tiktok'];
    if (slug.includes('tiktok') && slug.includes('save')) return IMAGE_SETS['save-tiktok'];
    if (slug.includes('tiktok')) return IMAGE_SETS['tiktok'];
    if (slug.includes('video')) return IMAGE_SETS['video'];
    if (slug.includes('proof')) return IMAGE_SETS['proof'];
    // default for photo/word/pdf/etc
    return IMAGE_SETS['photo'];
}

function fixArticleImages() {
    console.log('\n🔧 Fixing images inside all blog articles...\n');

    const dirs = fs.readdirSync(BLOG_DIR).filter(d => {
        const fullPath = path.join(BLOG_DIR, d);
        return fs.statSync(fullPath).isDirectory();
    });

    let totalFilesFixed = 0;
    let totalUrlsReplaced = 0;

    for (const slug of dirs) {
        const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
        if (!fs.existsSync(pagePath)) continue;

        let content = fs.readFileSync(pagePath, 'utf8');
        const originalContent = content;

        // Find all replicate.delivery URLs
        const replicateUrlPattern = /https:\/\/replicate\.delivery\/[^\s"'`)]+/g;
        const matches = [...content.matchAll(replicateUrlPattern)];

        if (matches.length === 0) continue;

        // Get unique URLs in order of appearance
        const uniqueUrls = [];
        const seen = new Set();
        for (const m of matches) {
            if (!seen.has(m[0])) {
                uniqueUrls.push(m[0]);
                seen.add(m[0]);
            }
        }

        // Get the appropriate image set for this article
        const imageSet = getImageSetForSlug(slug);

        // Replace each unique URL with a local image (cycling through the 5 available)
        for (let i = 0; i < uniqueUrls.length; i++) {
            const localImage = imageSet[i % imageSet.length];
            // Escape special regex chars in URL
            const escapedUrl = uniqueUrls[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            content = content.replace(new RegExp(escapedUrl, 'g'), localImage);
        }

        if (content !== originalContent) {
            fs.writeFileSync(pagePath, content, 'utf8');
            const urlCount = matches.length;
            totalFilesFixed++;
            totalUrlsReplaced += urlCount;
            console.log(`✅ ${slug}/page.tsx — replaced ${uniqueUrls.length} unique URLs (${urlCount} occurrences)`);
        }
    }

    console.log(`\n📊 Summary: Fixed ${totalFilesFixed} files, replaced ${totalUrlsReplaced} total URL occurrences\n`);
}

fixArticleImages();
