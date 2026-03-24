const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'app', 'blog');
const BLOG_INDEX_FILE = path.join(BLOG_DIR, 'page.tsx');

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

function getImageSetForSlug(slug) {
    if (slug.includes('tiktok') && (slug.includes('download') || slug.includes('downloader'))) return IMAGE_SETS['download-tiktok'];
    if (slug.includes('tiktok') && slug.includes('save')) return IMAGE_SETS['save-tiktok'];
    if (slug.includes('tiktok')) return IMAGE_SETS['tiktok'];
    if (slug.includes('video')) return IMAGE_SETS['video'];
    if (slug.includes('proof')) return IMAGE_SETS['proof'];
    return IMAGE_SETS['photo'];
}

function replaceInFile(filePath, slug) {
    if (!fs.existsSync(filePath)) return 0;
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace placehold.co and replicate.delivery
    const urlPattern = /(https:\/\/(?:replicate\.delivery|placehold\.co)\/[^\s"'`)]+)/g;
    const matches = [...content.matchAll(urlPattern)];
    
    if (matches.length === 0) return 0;
    
    const uniqueUrls = [...new Set(matches.map(m => m[1]))];
    const imageSet = getImageSetForSlug(slug);
    
    for (let i = 0; i < uniqueUrls.length; i++) {
        const localImage = imageSet[i % imageSet.length];
        const escapedUrl = uniqueUrls[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        content = content.replace(new RegExp(escapedUrl, 'g'), localImage);
    }
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        return matches.length;
    }
    return 0;
}

// 1. Fix inner pages
const dirs = fs.readdirSync(BLOG_DIR).filter(d => fs.statSync(path.join(BLOG_DIR, d)).isDirectory());
let innerFixed = 0;
for (const slug of dirs) {
    const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
    innerFixed += replaceInFile(pagePath, slug);
}
console.log(`Replaced ${innerFixed} URLs in individual article pages.`);

// 2. Fix index page (app/blog/page.tsx)
let indexContent = fs.readFileSync(BLOG_INDEX_FILE, 'utf8');
let indexOriginal = indexContent;
let indexFixed = 0;

// Find all cards
const cardRegex = /<Link href="\/blog\/([a-zA-Z0-9-]+)"[\s\S]*?<img\s+src="(https:\/\/(?:replicate\.delivery|placehold\.co)[^"]+)"/g;
let match;
while ((match = cardRegex.exec(indexOriginal)) !== null) {
    const [fullMatch, slug, badUrl] = match;
    const localImage = getImageSetForSlug(slug)[0];
    const escapedUrl = badUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Replace just this specific image URL within the index page
    indexContent = indexContent.replace(new RegExp(escapedUrl, 'g'), localImage);
    indexFixed++;
    console.log(`Fixed index card for ${slug} -> ${localImage}`);
}

if (indexContent !== indexOriginal) {
    fs.writeFileSync(BLOG_INDEX_FILE, indexContent, 'utf8');
    console.log(`Replaced ${indexFixed} URLs in index page.`);
} else {
    console.log(`No remaining bad URLs in index page.`);
}
