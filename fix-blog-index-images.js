const fs = require('fs');
const path = require('path');

const BLOG_INDEX_FILE = path.join(__dirname, 'app', 'blog', 'page.tsx');

const localImages = {
    'remove-watermark-from-photo-free': 'dewatermark-1.jpg',
    'how-to-remove-a-watermark-in-word': 'dewatermark-2.jpg',
    'how-do-i-remove-watermarks-from-photos': 'dewatermark-3.jpg',
    'tiktok-remove-watermark': 'remove-tiktok-watermark-1.jpg',
    'free-video-watermark-remover': 'remove-video-watermark-1.jpg',
    'how-to-save-tiktok-without-watermark': 'save-tiktok-without-watermark-1.jpg',
    'remove-watermark-from-pdf': 'dewatermark-4.jpg',
    'how-to-remove-proof-from-photo': 'remove-proof-from-picture-1.jpg',
    'how-do-you-remove-watermarks-from-photos': 'dewatermark-5.jpg',
    'delete-watermark-from-photo': 'remove-proof-from-picture-2.jpg',
    'tiktok-watermark': 'remove-tiktok-watermark-2.jpg',
    'how-to-remove-watermark-in-word': 'remove-proof-from-picture-3.jpg',
    'remove-watermark-from-video-free': 'remove-video-watermark-2.jpg',
    'watermark-remover-tiktok': 'remove-tiktok-watermark-3.jpg',
    'hitpaw-watermark-remover': 'dewatermark-3.jpg'
};

function fixBlogIndexImages() {
    console.log(`\n🔧 Fixing image URLs in ${BLOG_INDEX_FILE}\n`);

    if (!fs.existsSync(BLOG_INDEX_FILE)) {
        console.error(`❌ File not found: ${BLOG_INDEX_FILE}`);
        return;
    }

    let content = fs.readFileSync(BLOG_INDEX_FILE, 'utf8');
    let originalContent = content;
    let totalFixed = 0;

    // Pattern to match blog cards
    // Example: <Link href="/blog/remove-watermark-from-photo-free" ... <img src="https://replicate.delivery/..."
    
    for (const [slug, imageName] of Object.entries(localImages)) {
        const linkPattern = new RegExp(`(<Link href="/blog/${slug}"[\\s\\S]*?<img\\s+src=")(https:\\/\\/replicate\\.delivery\\/[^"]+)(")`, 'g');
        const localUrl = `/images/blog/${imageName}`;
        
        let match;
        let replaced = false;
        while ((match = linkPattern.exec(originalContent)) !== null) {
            content = content.replace(match[0], `${match[1]}${localUrl}${match[3]}`);
            replaced = true;
        }

        if (replaced) {
            console.log(`✅ Replaced image for blog: ${slug} -> ${localUrl}`);
            totalFixed++;
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(BLOG_INDEX_FILE, content, 'utf8');
        console.log(`\n✅ Saved changes to page.tsx. Total URLs replaced: ${totalFixed}\n`);
    } else {
        console.log(`\nℹ️ No changes made. (All URLs might already be local or patterns didn't match)\n`);
    }
}

fixBlogIndexImages();
