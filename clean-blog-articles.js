const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'app', 'blog');
const BLOG_INDEX = path.join(BLOG_DIR, 'page.tsx');

// SEO mappings for awkward titles
const titleFixes = [
    { bad: "How to PDF Remove Watermark", good: "How to Remove Watermarks from PDFs" },
    { bad: "How to Remove Watermark Word", good: "How to Remove Watermarks from Word Documents" },
    { bad: "How to Remove Watermark PDF Files", good: "How to Remove Watermarks from PDF Files" },
    { bad: "How to Remove Watermark PDF", good: "How to Remove Watermarks from PDFs" },
    { bad: "How to Remove Watermark in Word Documents", good: "How to Remove Watermarks from Word Documents" },
    { bad: "Best Ways to Remove Watermark Video Free", good: "Best Free Ways to Remove Watermarks from Video" },
    { bad: "How to TikTok Save Without Watermark", good: "How to Save TikToks Without Watermarks" },
    { bad: "How to Remove Watermark for Video", good: "How to Remove Watermarks from Video" },
    { bad: "How to Remove Water Mark from Video", good: "How to Remove Watermarks from Video" },
    { bad: "How to Remove Watermark from PDF", good: "How to Remove Watermarks from PDFs" },
    { bad: "Best Ways to Use a Watermark Remover from Video", good: "Best Ways to Use a Video Watermark Remover" },
    { bad: "Best Media IO Watermark", good: "Best Media.io Watermark" },
    { bad: "How to Save TikTok Video Without Watermark", good: "How to Save TikTok Videos Without Watermarks" },
    { bad: "How to Put Watermark on PDF", good: "How to Put a Watermark on a PDF" },
    { bad: "How to Remove TikTok Watermark", good: "How to Remove TikTok Watermarks" },
    { bad: "Best Ways to Find Watermark Remover for Videos", good: "Best Ways to Find Video Watermark Removers" },
    { bad: "How to Download Shutterstock Images Without Watermark", good: "How to Download Shutterstock Images Without Watermarks" },
    { bad: "How to Download TikTok Video No Watermark", good: "How to Download TikTok Videos With No Watermark" },
    { bad: "Best Ways to Remove Proof From Picture", good: "Best Ways to Remove 'Proof' from Pictures" },
    { bad: "Best Ways to Remove Video Watermark", good: "Best Ways to Remove Video Watermarks" },
    { bad: "How to Remove Watermark from Photo Online", good: "How to Remove Watermarks from Photos Online" },
    { bad: "How to Remove Watermark from Video Free", good: "How to Remove Watermarks from Videos for Free" },
    { bad: "Top 5 Ways to Remove Watermark From Video Online Free", good: "Top 5 Ways to Remove Watermarks from Video Online for Free" },
    { bad: "How to Save TikTok Without Watermark", good: "How to Save TikToks Without Watermarks" },
    { bad: "Best Ways to TikTok Download Without Watermark", good: "Best Ways to Download TikToks Without Watermarks" },
    { bad: "How to TikTok Remove Watermark", good: "How to Remove TikTok Watermarks" },
    { bad: "How to TikTok Video Download Without Watermark", good: "How to Download TikTok Videos Without Watermarks" },
    { bad: "Best Free Watermark Remover from Video", good: "Best Free Video Watermark Removers" },
    { bad: "How to Remove a Watermark in Word", good: "How to Remove Watermarks in Word" }
];

let totalDocsFixed = 0;

// 1. Process individual articles
const dirs = fs.readdirSync(BLOG_DIR).filter(d => fs.statSync(path.join(BLOG_DIR, d)).isDirectory());

for (const slug of dirs) {
    const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');
    let originalContent = content;

    // A. Remove Duplicate HTML content inside dangerouslySetInnerHTML
    // Remove <div class="keyTakeaways">...</div> completely.
    content = content.replace(/<div class="keyTakeaways">\s*<h2>Key Takeaways<\/h2>\s*<ul>[\s\S]*?<\/ul>\s*<\/div>/g, '');
    content = content.replace(/<div class="keyTakeaways">[\s\S]*?<\/ul>\s*<\/div>/g, ''); // Fallback just in case

    // Remove the FAQ h2 and EVERYTHING after it inside the HTML string, up to the end of the string ` }}` or `"`
    content = content.replace(/<h2(?: id="?faq"?)?>Frequently Asked Questions<\/h2>[\s\S]*?(?=`\s*\}\}|"\s*\}\})/g, '');

    // B. Fix SEO titles
    for (const fix of titleFixes) {
        if (content.includes(fix.bad)) {
            // Escape special chars for regex, allowing for optional quotes/escapes
            content = content.split(fix.bad).join(fix.good);
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(pagePath, content, 'utf8');
        totalDocsFixed++;
        console.log(`✅ Fixed duplicates and titles in: ${slug}`);
    }
}

// 2. Fix Index Page titles
let indexContent = fs.readFileSync(BLOG_INDEX, 'utf8');
let originalIndexContent = indexContent;

for (const fix of titleFixes) {
    if (indexContent.includes(fix.bad)) {
        indexContent = indexContent.split(fix.bad).join(fix.good);
    }
}

if (indexContent !== originalIndexContent) {
    fs.writeFileSync(BLOG_INDEX, indexContent, 'utf8');
    console.log(`✅ Fixed titles in the index page (app/blog/page.tsx)`);
}

console.log(`\n🎉 Script finished. Modified ${totalDocsFixed} articles.`);
