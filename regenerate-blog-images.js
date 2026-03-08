/**
 * regenerate-blog-images.js
 * 
 * Re-generates images for blog articles using prunaai/z-image-turbo on Replicate,
 * downloads them locally to public/images/blog/, and updates all references
 * in both the blog listing page and individual article pages.
 * 
 * Usage: REPLICATE_API_TOKEN=xxx node regenerate-blog-images.js
 */

const Replicate = require('replicate');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Manually parse .env.local since dotenv is not installed
if (fs.existsSync('.env.local')) {
    const envContent = fs.readFileSync('.env.local', 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            process.env[match[1]] = match[2].trim().replace(/^"|"$/g, '');
        }
    });
}

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
if (!REPLICATE_API_TOKEN) {
    console.error('❌ REPLICATE_API_TOKEN environment variable is required');
    process.exit(1);
}

const BLOG_DIR = path.join(__dirname, 'app', 'blog');
const PUBLIC_BLOG_IMAGES_DIR = path.join(__dirname, 'public', 'images', 'blog');
const BLOG_INDEX_FILE = path.join(BLOG_DIR, 'page.tsx');

// The 9 articles with broken replicate.delivery image URLs
const ARTICLES = [
    'mediaio-watermark-remover',
    'tiktok-without-watermark',
    'tiktok-download-without-watermark',
    'tiktok-video-download-without-watermark',
    'download-tiktok-videos-without-watermark',
    'watermark-remover-video-free',
    'download-tiktok-video-no-watermark',
    'remove-watermark-video',
    'tiktok-video-downloader-without-watermark',
];

// Image scene templates (same as generate-daily-blog.js)
const IMAGE_SCENE_TEMPLATES = [
    "A professional photographer editing photos on a sleek modern laptop in a bright minimalist workspace, removing watermarks from images displayed on screen, {keyword}, realistic, 8k, cinematic lighting, soft focus background, no text",
    "Close-up of a modern computer screen showing before-and-after comparison of watermark removal from a stunning landscape photo, {keyword}, realistic, 8k, sharp details, professional workspace, no text",
    "Young creative professional using AI tools on a large monitor to clean up photos, modern office with plants and natural light, {keyword}, realistic, 8k, cinematic lighting, no text",
    "Split-screen view on a high-end display showing a watermarked image transforming into a clean image, sleek desk setup with coffee cup, {keyword}, realistic, 8k, warm lighting, no text",
    "Aerial view of a creative workspace with multiple screens showing image editing software, watermark removal in progress, {keyword}, realistic, 8k, soft ambient lighting, no text",
    "Freelancer working on a tablet editing photos in a cozy cafe setting, removing watermarks from downloaded images, {keyword}, realistic, 8k, golden hour lighting, bokeh background, no text",
    "Digital artist at a standing desk with ultrawide monitor displaying AI-powered photo editing tools, clean modern apartment, {keyword}, realistic, 8k, natural daylight, no text",
    "Close-up of hands typing on a keyboard while an AI tool processes and removes watermarks from photos on screen, {keyword}, realistic, 8k, shallow depth of field, no text",
    "Modern home office setup with dual monitors showing batch watermark removal processing, dark theme interface, {keyword}, realistic, 8k, moody lighting, no text",
    "Content creator reviewing cleaned photos on a sleek laptop in a bright studio space, social media content preparation, {keyword}, realistic, 8k, professional lighting, no text",
    "Team of creatives collaborating around a large screen displaying watermark removal results, modern office space, {keyword}, realistic, 8k, bright ambient lighting, no text",
    "Minimalist desk with MacBook showing a clear before-after watermark removal comparison, aesthetic workspace with succulents, {keyword}, realistic, 8k, soft natural light, no text",
    "Professional retoucher using advanced AI software to process multiple images simultaneously, removing watermarks efficiently, {keyword}, realistic, 8k, studio lighting, no text",
    "E-commerce product photographer cleaning watermarks from product images on a calibrated monitor, studio setup, {keyword}, realistic, 8k, precise lighting, no text",
    "Social media manager batch processing images for content calendar, removing watermarks from stock photos, {keyword}, realistic, 8k, trendy office space, no text",
    "Close-up of a smartphone screen showing an app that removes watermarks from photos instantly, hand holding phone, {keyword}, realistic, 8k, blurred city background, no text",
    "Designer's workspace with Wacom tablet and large monitor showing precise watermark removal work, creative studio, {keyword}, realistic, 8k, warm studio lighting, no text",
    "Student using a free online tool to remove watermarks for a school project, laptop on desk in library, {keyword}, realistic, 8k, quiet ambiance, no text",
    "Marketing professional preparing clean visuals for a campaign, AI watermark remover on screen, corporate office, {keyword}, realistic, 8k, professional setting, no text",
    "Night-time coding session with a developer building an AI watermark removal tool, dark room lit by screens, {keyword}, realistic, 8k, neon ambient glow, no text"
];

// Map slug -> keyword (the original keyword used to generate each article)
const SLUG_TO_KEYWORD = {
    'mediaio-watermark-remover': 'media.io watermark remover',
    'tiktok-without-watermark': 'tiktok without watermark',
    'tiktok-download-without-watermark': 'tiktok download without watermark',
    'tiktok-video-download-without-watermark': 'tiktok video download without watermark',
    'download-tiktok-videos-without-watermark': 'download tiktok videos without watermark',
    'watermark-remover-video-free': 'watermark remover video free',
    'download-tiktok-video-no-watermark': 'download tiktok video no watermark',
    'remove-watermark-video': 'remove watermark video',
    'tiktok-video-downloader-without-watermark': 'tiktok video downloader without watermark',
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getImagePrompts(keyword, count = 5) {
    let hash = 0;
    for (let i = 0; i < keyword.length; i++) {
        hash = ((hash << 5) - hash) + keyword.charCodeAt(i);
        hash |= 0;
    }
    hash = Math.abs(hash);

    const prompts = [];
    const usedIndices = new Set();
    for (let i = 0; i < count; i++) {
        let idx = (hash + i * 7) % IMAGE_SCENE_TEMPLATES.length;
        while (usedIndices.has(idx)) {
            idx = (idx + 1) % IMAGE_SCENE_TEMPLATES.length;
        }
        usedIndices.add(idx);
        prompts.push(IMAGE_SCENE_TEMPLATES[idx].replace('{keyword}', keyword));
    }
    return prompts;
}

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(destPath);
        protocol.get(url, (response) => {
            // Handle redirects
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                file.close();
                fs.unlinkSync(destPath);
                return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                file.close();
                fs.unlinkSync(destPath);
                return reject(new Error(`HTTP ${response.statusCode}`));
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(destPath);
            });
        }).on('error', (err) => {
            file.close();
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            reject(err);
        });
    });
}

async function generateAndDownloadImages(replicate, slug, keyword) {
    console.log(`\n🎨 Generating images for "${slug}" (keyword: "${keyword}")...`);

    const prompts = getImagePrompts(keyword, 5);
    const localPaths = [];

    for (let i = 0; i < prompts.length; i++) {
        const filename = `${slug}-${i + 1}.jpg`;
        const localPath = path.join(PUBLIC_BLOG_IMAGES_DIR, filename);
        const publicUrl = `/images/blog/${filename}`;

        console.log(`   Image ${i + 1}/5: Generating...`);

        try {
            const output = await replicate.run('prunaai/z-image-turbo', {
                input: {
                    prompt: prompts[i],
                    width: 1024,
                    height: 576,
                    output_format: "jpg",
                    output_quality: 85,
                    guidance_scale: 0,
                    num_inference_steps: 8
                }
            });

            let imageUrl = null;
            if (typeof output === 'string') {
                imageUrl = output;
            } else if (Array.isArray(output) && output.length > 0) {
                const first = output[0];
                if (typeof first === 'string') {
                    imageUrl = first;
                } else if (first && first.constructor && first.constructor.name === 'FileOutput') {
                    imageUrl = String(first);
                } else if (first && first.url) {
                    imageUrl = typeof first.url === 'function' ? await first.url() : first.url;
                }
            } else if (output && typeof output === 'object') {
                if (output.constructor && output.constructor.name === 'FileOutput') {
                    imageUrl = String(output);
                } else if (typeof output.url === 'function') {
                    imageUrl = await output.url();
                } else if (output.url) {
                    imageUrl = output.url;
                } else if (output.result) {
                    imageUrl = output.result;
                }
            }

            if (imageUrl && typeof imageUrl === 'object') {
                if (imageUrl.href) imageUrl = imageUrl.href;
                else imageUrl = String(imageUrl);
            }

            if (imageUrl === '[object Object]') imageUrl = null;

            if (imageUrl && typeof imageUrl === 'string') {
                // Download the image locally
                await downloadFile(imageUrl, localPath);
                localPaths.push(publicUrl);
                console.log(`   ✅ Image ${i + 1} downloaded: ${filename}`);
            } else {
                console.log(`   ❌ Image ${i + 1} failed: no URL returned`);
                localPaths.push(null);
            }
        } catch (error) {
            console.log(`   ❌ Image ${i + 1} error: ${error.message}`);
            localPaths.push(null);
        }

        // 10-second pause between image generations to avoid rate limits
        if (i < prompts.length - 1) await sleep(10000);
    }

    return localPaths;
}

function replaceImageUrls(fileContent, oldUrls, newUrls) {
    let updated = fileContent;
    for (let i = 0; i < oldUrls.length; i++) {
        if (oldUrls[i] && newUrls[i]) {
            // Use global replace to catch all occurrences
            updated = updated.split(oldUrls[i]).join(newUrls[i]);
        }
    }
    return updated;
}

function findReplicateUrls(content) {
    const regex = /https:\/\/replicate\.delivery\/[^\s"'`<>]+/g;
    const matches = content.match(regex) || [];
    // Deduplicate while preserving order
    return [...new Set(matches)];
}

async function main() {
    const replicate = new Replicate({ auth: REPLICATE_API_TOKEN });

    // Ensure output directory exists
    if (!fs.existsSync(PUBLIC_BLOG_IMAGES_DIR)) {
        fs.mkdirSync(PUBLIC_BLOG_IMAGES_DIR, { recursive: true });
    }

    console.log('🚀 Starting blog image regeneration...\n');

    for (const slug of ARTICLES) {
        const keyword = SLUG_TO_KEYWORD[slug];
        const articleFile = path.join(BLOG_DIR, slug, 'page.tsx');

        if (!fs.existsSync(articleFile)) {
            console.log(`⏭️  Skipping ${slug}: article file not found`);
            continue;
        }

        // Find all replicate URLs in the article
        const articleContent = fs.readFileSync(articleFile, 'utf8');
        const replicateUrls = findReplicateUrls(articleContent);

        if (replicateUrls.length === 0) {
            console.log(`⏭️  Skipping ${slug}: no replicate URLs found`);
            continue;
        }

        console.log(`\n${'='.repeat(60)}`);
        console.log(`📰 Processing: ${slug}`);
        console.log(`   Found ${replicateUrls.length} replicate URLs to replace`);
        console.log(`${'='.repeat(60)}`);

        // Generate new images
        const newLocalPaths = await generateAndDownloadImages(replicate, slug, keyword);

        // Map old URLs to new local paths
        // First URL is typically the hero image, then section images
        const replacements = {};
        for (let i = 0; i < replicateUrls.length && i < newLocalPaths.length; i++) {
            if (newLocalPaths[i]) {
                replacements[replicateUrls[i]] = newLocalPaths[i];
            }
        }

        // Update the article page.tsx
        let updatedArticle = articleContent;
        for (const [oldUrl, newUrl] of Object.entries(replacements)) {
            updatedArticle = updatedArticle.split(oldUrl).join(newUrl);
        }
        fs.writeFileSync(articleFile, updatedArticle, 'utf8');
        console.log(`   ✅ Updated article: ${slug}/page.tsx`);

        // Update the blog index page
        let indexContent = fs.readFileSync(BLOG_INDEX_FILE, 'utf8');
        for (const [oldUrl, newUrl] of Object.entries(replacements)) {
            indexContent = indexContent.split(oldUrl).join(newUrl);
        }
        fs.writeFileSync(BLOG_INDEX_FILE, indexContent, 'utf8');
        console.log(`   ✅ Updated blog index`);

        // Pause between articles to avoid rate limits
        console.log(`   ⏳ Waiting 15 seconds before next article...`);
        await sleep(15000);
    }

    console.log('\n\n✅ All done! Images have been regenerated and saved locally.');
    console.log(`📁 Images saved to: ${PUBLIC_BLOG_IMAGES_DIR}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Review the images in public/images/blog/');
    console.log('   2. Run "npm run build" to verify everything compiles');
    console.log('   3. Push to GitHub');
}

main().catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
});
