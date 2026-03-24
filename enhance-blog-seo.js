const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'app', 'blog');
const BLOG_INDEX = path.join(BLOG_DIR, 'page.tsx');

let totalModified = 0;

function cleanString(str) {
    let s = str;
    // Replace various robotic suffixes from the LLM
    const badSuffixes = [
        / — The AI-Powered Guide/gi,
        / - The AI-Powered Guide/gi,
        / The AI-Powered Guide/gi,
        / 2026 AI Guide/gi,
        / Using AI Tools 2026/gi,
        / Using AI in 2026/gi,
        / in 2026/gi,
        / 2026/g
    ];

    for (const suffix of badSuffixes) {
        s = s.replace(suffix, '');
    }
    
    // Trim any trailing spaces or hyphens that might be left over
    return s.trim().replace(/[-—]+$/, '').trim();
}

// 1. Process individual articles
const dirs = fs.readdirSync(BLOG_DIR).filter(d => fs.statSync(path.join(BLOG_DIR, d)).isDirectory());

for (const slug of dirs) {
    const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');
    let originalContent = content;

    // A. Clean Titles inside the file
    // We can't just String.replace because we don't want to mess up other code, but replacing these specific strings is generally safe.
    const badSuffixesStr = [
        " — The AI-Powered Guide",
        " - The AI-Powered Guide",
        " The AI-Powered Guide",
        " 2026 AI Guide",
        " Using AI Tools 2026",
        " Using AI in 2026",
        " in 2026",
        " 2026"
    ];

    for (const suffix of badSuffixesStr) {
        // Only replace inside title: '', alt: '', headline: "", <h1...>, name: ""
        content = content.replace(new RegExp(`(title|description|alt|headline|name|h1[^>]*>)([^<]*?)${suffix}(.*?)`, 'gi'), (match, p1, p2, p3) => {
            return p1 + p2 + p3;
        });
        
        // Also just do a global replace for these very specific phrases to catch openGraph, twitter, etc.
        content = content.split(suffix).join('');
    }

    // Fix orphaned hyphens left behind before tags
    content = content.replace(/ — <\/h1>/g, '</h1>');
    content = content.replace(/ - <\/h1>/g, '</h1>');


    // B. Inject copyright authoritative link
    if (!content.includes('copyright.gov')) {
        // Look for Legal and Ethical Considerations h2
        content = content.replace(/(<h2[^>]*>Legal and Ethical[^<]*<\/h2>)/i, '$1\n<p>For official guidance on image copyright and fair use, we recommend consulting the <a href="https://www.copyright.gov" target="_blank" rel="noopener noreferrer" style={{ color: \'#ec4899\', fontWeight: \'bold\' }}>U.S. Copyright Office</a> or your local intellectual property authority.</p>');
    }

    if (content !== originalContent) {
        fs.writeFileSync(pagePath, content, 'utf8');
        totalModified++;
        console.log(`✅ Enhanced SEO for: ${slug}`);
    }
}

// 2. Fix Index Page titles
let indexContent = fs.readFileSync(BLOG_INDEX, 'utf8');
let originalIndexContent = indexContent;

const badSuffixesStr = [
    " — The AI-Powered Guide",
    " - The AI-Powered Guide",
    " The AI-Powered Guide",
    " 2026 AI Guide",
    " Using AI Tools 2026",
    " Using AI in 2026",
    " in 2026",
    " 2026"
];

for (const suffix of badSuffixesStr) {
    indexContent = indexContent.split(suffix).join('');
}
indexContent = indexContent.replace(/ — </g, '<');
indexContent = indexContent.replace(/ - </g, '<');
indexContent = indexContent.replace(/ — "/g, '"');
indexContent = indexContent.replace(/ - "/g, '"');


if (indexContent !== originalIndexContent) {
    fs.writeFileSync(BLOG_INDEX, indexContent, 'utf8');
    console.log(`✅ Enhanced titles in the index page (app/blog/page.tsx)`);
}

console.log(`\n🎉 Script finished. Modified ${totalModified} articles.`);
