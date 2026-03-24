/**
 * generate-daily-blog.js
 * 
 * Automated daily blog article generator for RemoveWatermark Pro
 * Uses Claude (via Replicate) for text + z-image (via Replicate) for images
 * English only — generates ~2000-word SEO-optimized articles
 */

const Replicate = require('replicate');
const fs = require('fs');
const path = require('path');

// ============================================================
// CONFIGURATION
// ============================================================

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
const DOMAIN = 'https://removewatermarkpro.co';
const SITE_NAME = 'Remove Watermark Pro';
const BRAND = 'RemoveWatermarkPro';
const BRAND_URL = 'https://removewatermarkpro.co';
const CTA_COLOR = '#a855f7'; // Purple accent matching the site
const LINK_COLOR = '#ec4899'; // Pink link color matching existing articles

const TOPICS_FILE = path.join(__dirname, 'data', 'blog-topics.json');
const BLOG_DIR = path.join(__dirname, 'app', 'blog');
const BLOG_INDEX_FILE = path.join(BLOG_DIR, 'page.tsx');
const ARTICLE_CSS_TEMPLATE = path.join(BLOG_DIR, 'how-to-remove-watermark-from-photo', 'Article.module.css');

const LIMIT = 3; // Number of topics to process per run

// ============================================================
// HELPERS
// ============================================================

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getToday() {
    const d = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    return {
        formatted: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
        iso: d.toISOString(),
        year: d.getFullYear()
    };
}

function escapeForJsx(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, "&apos;")
        .replace(/"/g, '&quot;');
}

// ============================================================
// CLAUDE PROMPT — ARTICLE GENERATION
// ============================================================

function buildArticlePrompt(keyword, otherKeywords) {
    const today = getToday();
    const otherKwList = otherKeywords.map(k => `"${k}"`).join(', ');

    return `You are an expert SEO content writer optimized for 2026 SEO and Generative Engine Optimization (GEO). You write for ${SITE_NAME} (${BRAND_URL}), the leading AI-powered watermark removal tool.

TASK: Write a 1,500-word blog post about "${keyword}" optimized for both Google E-E-A-T and AI Retrieval Engines (Perplexity, ChatGPT, Gemini, SearchGPT).
IMPORTANT: You MUST write the ENTIRE article in ENGLISH ONLY, regardless of the language of the keyword. Even if the keyword is in Spanish, Portuguese, or French, the title, headings, and all body text MUST be in English.

=== 1. ATOMIC ARTICLE STRUCTURE ===

A) MAGNETIC H1 / TITLE:
   - Must be 60-70 characters long
   - Must include the primary keyword "${keyword}" + a specific value proposition
   - Must start with one of: "How to", "Best Ways to", "Top 5", "Top 10", "Best"
   - Do NOT use colons (:) in the title
   - Do NOT append robotic suffixes like " — The AI-Powered Guide", "in ${today.year}", or "2026 AI Guide". Keep titles naturally human-sounding.
   - Example format: "How to Remove Watermarks from PDFs: The Complete Guide"

B) DIRECT ANSWER (THE LLM BAIT):
   - Immediately under the H1, place a 40-60 word paragraph that directly answers the main query
   - This is what AI models scrape for summaries and what Google uses for Featured Snippets
   - Must be factual, concise, and self-contained

C) KEY TAKEAWAYS BOX:
   - Right after the Direct Answer, include a bulleted summary (5-6 bullet points) of the most important information
   - Wrap in <div class="keyTakeaways"> with an <h2>Key Takeaways</h2>
   - For users (and bots) in a hurry

D) SLUG:
   - The slug must be EXACTLY: "${slugify(keyword)}"

=== 2. GEO (GENERATIVE ENGINE OPTIMIZATION) REQUIREMENTS ===

A) HIGH FACTUAL DENSITY:
   - Cut ALL fluff. No "In today's digital world..." or "With the rise of AI..."
   - Every sentence must provide value. Instead of filler, use direct statements like "Removing watermarks typically involves AI inpainting or frame cropping."
   - Use short sentences and clear transitions to facilitate LLM parsing

B) H2 & H3 AS NATURAL QUESTIONS:
   - All major section headings must be phrased as questions users actually ask
   - Examples: "Can I remove a watermark without losing quality?", "What is the best free watermark remover?"
   - This targets "People Also Ask" and voice search queries

C) DATA STRUCTURES (TABLES & LISTS):
   - You MUST include at least ONE comparison table (HTML <table>) comparing tools/methods with columns like: Tool, Price, Best For, Limitations
   - You MUST include at least TWO step-by-step lists (<ol>) for actionable guides
   - AI models love organized, structured data

D) NPOV (NEUTRAL POINT OF VIEW):
   - Write as an objective expert, NOT a salesperson
   - LLMs prioritize unbiased information
   - Present facts and let the reader draw conclusions
   - ${BRAND} should win on merits, not hype

E) ENTITY LINKING:
   - Mention specific technologies: AI Inpainting, FFmpeg, Deep Learning, SaaS, Neural Networks, Computer Vision
   - This helps AI categorize your content correctly
   - Name specific algorithms or techniques when relevant

=== 3. E-E-A-T (EXPERIENCE, EXPERTISE, AUTHORITATIVENESS, TRUSTWORTHINESS) ===

A) REAL-WORLD TESTING:
   - Include phrases like "I tested 45 different tools and among those..." or "After testing 38 watermark removal solutions..."
   - Use specific numbers: "processed over 920 images", "achieved 94% success rate"
   - Describe specific test scenarios (e.g., removing a complex moving logo from 4K footage)

B) PRO TIP SECTION:
   - Include a dedicated "Pro Tip" or "Expert Tip" section with <div class="proTip">
   - Share a specific, technical insight that only an expert would know
   - Example: "Pro Tip: For semi-transparent watermarks, reducing the opacity detection threshold to 15% before applying AI inpainting yields 23% cleaner results."

C) BALANCED VIEW (PROS & CONS):
   - Include what tools CAN'T do (e.g., "May struggle with high-transparency overlays" or "Not ideal for batch processing of 500+ files")
   - This builds massive trust with Google's quality raters
   - A trustworthy article acknowledges limitations

=== 4. ARTICLE SECTIONS (must include ALL) ===

   a) Direct Answer — 40-60 word paragraph answering the query (for AI snippet extraction)
   b) Key Takeaways — Bulleted summary box
   c) Table of Contents — Links to all sections
   d) Introduction — Hook the reader with a real scenario, not generic fluff
   e) [H2 as Question] Understanding the Topic — Deep dive with entity linking
   f) [H2 as Question] Step-by-Step Guide — Numbered actionable steps (6-8 steps) in TWO methods
   g) [H2 as Question] Tools Comparison — HTML <table> comparing 5-7 tools with ${BRAND} as #1
   h) Pro Tip / Expert Tip — Technical testing insight
   i) [H2 as Question] Pros & Cons — Balanced view of the approach  
   j) Legal/Ethical Considerations — When relevant to watermark topics. You MUST include this exact sentence right after the H2: "<p>For official guidance on image copyright and fair use, we recommend consulting the <a href=\\"https://www.copyright.gov\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"color: #ec4899; font-weight: bold;\\">U.S. Copyright Office</a> or your local intellectual property authority.</p>"
   k) FAQ Section — EXACTLY 15 questions (last 4 optimized for Voice Search and "People Also Ask")

=== 5. KEYWORD STRATEGY ===

   - A natural, grammatically correct variation of "${keyword}" must appear in the H1 title (e.g., if the keyword is "How to PDF Remove Watermark", write "How to Remove Watermarks from PDFs")
   - The exact phrase "${keyword}" must appear approximately 8-10 times naturally throughout the article body
   - These related keywords must also appear naturally (2-3 times each, NO keyword stuffing): ${otherKwList}

=== 6. PROMOTION OF ${BRAND} (OBJECTIVE, NOT SALESY) ===

   - ${BRAND} should be presented as the top-performing tool based on test results
   - Include 5-8 natural mentions throughout the article
   - Use internal links: <a href="${BRAND_URL}" style="color: ${LINK_COLOR}; font-weight: bold;">${BRAND}</a>
   - Also link to specific features:
     * <a href="${BRAND_URL}/watermark-remover" style="color: ${LINK_COLOR}; font-weight: bold;">watermark remover tool</a>
     * <a href="${BRAND_URL}/background-remover" style="color: ${LINK_COLOR}; font-weight: bold;">background remover</a>
     * <a href="${BRAND_URL}/text-remover-ai" style="color: ${LINK_COLOR}; font-weight: bold;">text remover AI</a>
     * <a href="${BRAND_URL}/object-remover-ai" style="color: ${LINK_COLOR}; font-weight: bold;">object remover AI</a>
   - Compare fairly with competitors, highlight ${BRAND}'s advantages WITH data

=== 7. COMPETITOR DATA (use these real competitors) ===

   - ${BRAND} — Best overall, AI-powered, 3 free removals, $9.99/mo pro
   - Apowersoft Watermark Remover — $29.95/year, desktop app, decent for batch
   - HitPaw Watermark Remover — $19.95/month, good for video, slower
   - Inpaint — $19.99 one-time, manual selection, good for simple cases
   - Fotor — Free tier available, AI-powered, adds own watermark
   - MarkGo (iMyFone) — $29.99/month, video & photo, feature-rich
   - Photoshop — $22.99/mo, professional but complex, steep learning curve

=== 8. IMAGE PLACEHOLDERS & ALT TEXT ===

   - Insert exactly 5 image placeholders:
     [IMAGE_PLACEHOLDER_1] — After the introduction
     [IMAGE_PLACEHOLDER_2] — After the Understanding section
     [IMAGE_PLACEHOLDER_3] — In the Step-by-Step Guide section
     [IMAGE_PLACEHOLDER_4] — In the Tools Comparison section
     [IMAGE_PLACEHOLDER_5] — Before the FAQ section
   - For each placeholder, also provide a descriptive alt text in the JSON output
   - Alt text must describe the UI/scene specifically (e.g., "Screenshot of AI selection tool highlighting a watermark on a 4K video frame") — NOT just keywords

=== 9. LINK STYLE ===

    - All links to ${BRAND_URL} should use: <a href="URL" style="color: ${LINK_COLOR}; font-weight: bold;">text</a>
    - External competitor links should use: <a href="URL" target="_blank" rel="noopener noreferrer">text</a>

=== 10. HTML FORMATTING ===

    - Use proper HTML tags: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <table>, <thead>, <tbody>, <tr>, <th>, <td>
    - Do NOT include <h1> in the HTML body (it will be added separately)
    - Do NOT include <html>, <head>, <body> tags
    - Use <div class="step"> for step-by-step items
    - Use <div class="faq-item"> for FAQ items
    - Use <div class="keyTakeaways"> for the Key Takeaways box
    - Use <div class="proTip"> for the Pro Tip section
    - Comparison tables MUST use <table> with <thead> and <tbody>

=== 11. WRITING TONE ===

    - Expert, objective, and information-dense
    - Avoid marketing clichés ("game-changer", "revolutionary", "cutting-edge")
    - Avoid filler phrases ("In today's digital world", "As we all know")
    - Use active voice and short sentences
    - Write like a senior software engineer reviewing tools, not a marketer

=== OUTPUT FORMAT ===

You MUST return your response in this EXACT format:

\`\`\`json
{
  "title": "Your Article Title Here (60-70 chars)",
  "meta_description": "Compelling meta description under 160 characters with the keyword",
  "slug": "${slugify(keyword)}",
  "quick_answer": "40-60 word direct answer for AI snippet extraction and Featured Snippets",
  "key_takeaways": ["Takeaway 1", "Takeaway 2", "Takeaway 3", "Takeaway 4", "Takeaway 5"],
  "category": "APPROPRIATE CATEGORY IN CAPS (e.g., PHOTO TOOLS, VIDEO TOOLS, AI TOOLS, IMAGE EDITING)",
  "read_time": "10 min read",
  "image_alt_texts": [
    "Descriptive alt text for image 1 describing the UI or scene",
    "Descriptive alt text for image 2 describing the UI or scene",
    "Descriptive alt text for image 3 describing the UI or scene",
    "Descriptive alt text for image 4 describing the UI or scene",
    "Descriptive alt text for image 5 describing the UI or scene"
  ],
  "faq": [
    {"question": "FAQ question 1?", "answer": "Detailed answer 1"},
    {"question": "FAQ question 2?", "answer": "Detailed answer 2"},
    {"question": "FAQ question 3?", "answer": "Detailed answer 3"},
    {"question": "FAQ question 4?", "answer": "Detailed answer 4"},
    {"question": "FAQ question 5?", "answer": "Detailed answer 5"},
    {"question": "FAQ question 6?", "answer": "Detailed answer 6"},
    {"question": "FAQ question 7?", "answer": "Detailed answer 7"},
    {"question": "FAQ question 8?", "answer": "Detailed answer 8"},
    {"question": "FAQ question 9?", "answer": "Detailed answer 9"},
    {"question": "FAQ question 10?", "answer": "Detailed answer 10"},
    {"question": "FAQ question 11?", "answer": "Detailed answer 11"},
    {"question": "FAQ question 12 (voice search optimized)?", "answer": "Detailed answer 12"},
    {"question": "FAQ question 13 (voice search optimized)?", "answer": "Detailed answer 13"},
    {"question": "FAQ question 14 (voice search optimized)?", "answer": "Detailed answer 14"},
    {"question": "FAQ question 15 (voice search optimized)?", "answer": "Detailed answer 15"}
  ]
}
\`\`\`

[[[HTML_CONTENT_START]]]
<Your full HTML article content here>
[[[HTML_CONTENT_END]]]

IMPORTANT: The JSON block must come FIRST, then the HTML content between the markers. Do not put HTML inside the JSON.`;
}

// ============================================================
// IMAGE PROMPT TEMPLATES
// ============================================================

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

function getImagePrompts(keyword, count = 5) {
    // Deterministic selection based on keyword hash
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

// ============================================================
// PHASE 1: GENERATE ARTICLE VIA CLAUDE
// ============================================================

async function generateArticle(replicate, keyword, otherKeywords) {
    const prompt = buildArticlePrompt(keyword, otherKeywords);
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        console.log(`\n📝 Phase 1: Generating article (attempt ${attempt}/${maxRetries})...`);
        console.log(`   Keyword: "${keyword}"`);

        try {
            const output = await replicate.run('anthropic/claude-4-sonnet', {
                input: {
                    prompt: prompt,
                    system_prompt: 'You are an expert SEO content writer. Follow the instructions precisely and output in the exact format requested.',
                    max_tokens: 8192
                }
            });

            // Claude returns an array of strings, concatenate them
            const fullResponse = Array.isArray(output) ? output.join('') : String(output);
            console.log(`   Response length: ${fullResponse.length} chars`);

            // Parse JSON metadata
            const jsonMatch = fullResponse.match(/```json\s*([\s\S]*?)```/);
            if (!jsonMatch) {
                console.log('   ❌ No JSON block found in response');
                if (attempt < maxRetries) { await sleep(3000); continue; }
                throw new Error('Failed to extract JSON metadata from Claude response');
            }

            let metadata;
            try {
                metadata = JSON.parse(jsonMatch[1].trim());
            } catch (e) {
                console.log('   ❌ Failed to parse JSON:', e.message);
                if (attempt < maxRetries) { await sleep(3000); continue; }
                throw new Error('Failed to parse JSON metadata: ' + e.message);
            }

            // Parse HTML content
            let htmlContent = '';
            const htmlMatch = fullResponse.match(/\[\[\[HTML_CONTENT_START\]\]\]([\s\S]*?)\[\[\[HTML_CONTENT_END\]\]\]/);
            if (htmlMatch) {
                htmlContent = htmlMatch[1].trim();
            } else {
                // Fallback: try to find HTML after the JSON block
                const afterJson = fullResponse.substring(fullResponse.indexOf('```', jsonMatch.index + 7) + 3);
                const htmlStartIdx = afterJson.indexOf('<');
                if (htmlStartIdx !== -1) {
                    htmlContent = afterJson.substring(htmlStartIdx).trim();
                    // Clean up any trailing markers
                    htmlContent = htmlContent.replace(/\[\[\[.*?\]\]\]/g, '').trim();
                }
            }

            if (htmlContent.length < 2000) {
                console.log(`   ❌ HTML content too short: ${htmlContent.length} chars`);
                if (attempt < maxRetries) { await sleep(3000); continue; }
                throw new Error('Generated HTML content is too short');
            }

            // Sanitize HTML
            htmlContent = sanitizeHtml(htmlContent);

            console.log(`   ✅ Article generated successfully`);
            console.log(`   📊 Title: "${metadata.title}"`);
            console.log(`   📊 HTML length: ${htmlContent.length} chars`);
            console.log(`   📊 FAQ count: ${metadata.faq ? metadata.faq.length : 0}`);

            return { metadata, htmlContent };

        } catch (error) {
            console.log(`   ❌ Error: ${error.message}`);
            if (attempt < maxRetries) {
                console.log(`   ⏳ Retrying in 3 seconds...`);
                await sleep(3000);
            } else {
                throw error;
            }
        }
    }
}

function sanitizeHtml(html) {
    // Remove any duplicate H1 tags (they'll be added in the template)
    html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '');

    // Strip duplicate Key Takeaways and FAQ blocks from the body, as they are rendered statically by the template
    html = html.replace(/<div class="keyTakeaways">\s*<h2>Key Takeaways<\/h2>\s*<ul>[\s\S]*?<\/ul>\s*<\/div>/g, '');
    html = html.replace(/<div class="keyTakeaways">[\s\S]*?<\/ul>\s*<\/div>/g, '');
    html = html.replace(/<h2(?: id="?faq"?)?>Frequently Asked Questions<\/h2>[\s\S]*$/i, '');

    // Remove empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');

    // Fix self-closing tags
    html = html.replace(/<br\s*\/?>/g, '<br />');
    html = html.replace(/<hr\s*\/?>/g, '<hr />');

    // Clean up markdown artifacts that might have leaked
    html = html.replace(/```[\s\S]*?```/g, '');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Add rel attributes to external links
    html = html.replace(/<a\s+href="(https?:\/\/(?!removewatermark)[^"]*)"(?![^>]*rel=)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer"');

    // Ensure all links to our domain have proper styling
    html = html.replace(/<a\s+href="(https?:\/\/removewatermark[^"]*)"(?![^>]*style=)/g,
        `<a href="$1" style="color: ${LINK_COLOR}; font-weight: bold;"`);

    return html;
}

// ============================================================
// PHASE 2: GENERATE IMAGES VIA Z-IMAGE
// ============================================================

async function generateImages(replicate, keyword) {
    console.log(`\n🎨 Phase 2: Generating 5 images...`);

    const prompts = getImagePrompts(keyword, 5);
    const imageUrls = [];

    for (let i = 0; i < prompts.length; i++) {
        console.log(`   Image ${i + 1}/5: Generating...`);

        try {
            const output = await replicate.run('prunaai/z-image-turbo', {
                input: {
                    prompt: prompts[i],
                    width: 1024,
                    height: 576, // 16:9 equivalent
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

            // Convert anything that's still an object (like a native URL) to string
            if (imageUrl && typeof imageUrl === 'object') {
                if (imageUrl.href) imageUrl = imageUrl.href;
                else imageUrl = String(imageUrl);
            }

            // Fallback for empty/bad strings
            if (imageUrl === '[object Object]') imageUrl = null;

            if (imageUrl && typeof imageUrl === 'string') {
                imageUrls.push(imageUrl);
                console.log(`   ✅ Image ${i + 1} generated: ${imageUrl.substring(0, Math.min(imageUrl.length, 80))}...`);
            } else {
                console.log(`   ❌ Image ${i + 1} failed: no URL returned`);
                imageUrls.push('https://placehold.co/1024x576/1a1a2e/a855f7?text=Image+Generation+Failed');
            }
        } catch (error) {
            console.log(`   ❌ Image ${i + 1} error: ${error.message}`);
            imageUrls.push('https://placehold.co/1024x576/1a1a2e/a855f7?text=Image+Generation+Failed');
        }

        // 10-second pause between image generations to avoid 429 Too Many Requests
        // The Replicate account has a limit of 6 requests per minute
        if (i < prompts.length - 1) await sleep(10000);
    }

    const successfulImageUrls = imageUrls.filter(u => u && typeof u === 'string' && !u.includes('placehold'));
    console.log(`   📊 Generated ${successfulImageUrls.length}/5 images successfully`);
    return imageUrls;
}

// ============================================================
// PHASE 3: WRITE ARTICLE PAGE.TSX
// ============================================================

function buildPageTsx(metadata, htmlContent, imageUrls, slug) {
    const today = getToday();

    // Replace image placeholders with descriptive alt texts for Vision AI
    const altTexts = metadata.image_alt_texts || [];
    for (let i = 0; i < 5; i++) {
        const placeholder = `[IMAGE_PLACEHOLDER_${i + 1}]`;
        const imgUrl = imageUrls[i] || 'https://placehold.co/1024x576/1a1a2e/a855f7?text=Image';
        const altText = altTexts[i] || `${metadata.title} - illustration ${i + 1}`;
        const imgTag = `<div class="sectionImage"><img src="${imgUrl}" alt="${altText}" width="1024" height="576" loading="${i === 0 ? 'eager' : 'lazy'}" style="width:100%;height:auto;border-radius:12px;" /></div>`;
        htmlContent = htmlContent.replace(placeholder, imgTag);
    }

    // Remove any remaining unreplaced placeholders
    htmlContent = htmlContent.replace(/\[IMAGE_PLACEHOLDER_\d+\]/g, '');

    // Escape backticks and ${} in HTML for template literal safety
    const safeHtml = htmlContent
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

    // Build FAQ schema
    const faqSchemaEntries = (metadata.faq || []).map(f => `            {
                "@type": "Question",
                "name": ${JSON.stringify(f.question)},
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": ${JSON.stringify(f.answer)}
                }
            }`).join(',\n');

    // Build FAQ HTML
    const faqHtml = (metadata.faq || []).map((f, i) => `                                <div className={styles.faqItem}>
                                    <h3>${i + 1}. ${escapeForJsx(f.question)}</h3>
                                    <p>${escapeForJsx(f.answer)}</p>
                                </div>`).join('\n');

    const title = metadata.title || 'Blog Article';
    const metaDesc = metadata.meta_description || '';
    const quickAnswer = metadata.quick_answer || '';
    const keyTakeaways = metadata.key_takeaways || [];
    const category = metadata.category || 'AI TOOLS';
    const readTime = metadata.read_time || '10 min read';
    const heroImage = imageUrls[0] || 'https://placehold.co/1200x630/1a1a2e/a855f7?text=Blog+Image';
    const heroAltText = (metadata.image_alt_texts && metadata.image_alt_texts[0]) || title;

    // Build Key Takeaways HTML
    const keyTakeawaysHtml = keyTakeaways.length > 0 ? `
                        {/* Key Takeaways */}
                        <div className={styles.keyTakeaways}>
                            <h2>\uD83D\uDD11 Key Takeaways</h2>
                            <ul>
${keyTakeaways.map(t => `                                <li>${escapeForJsx(t)}</li>`).join('\n')}
                            </ul>
                        </div>` : '';

    const pageTsx = `import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './Article.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogSidebar from '@/components/BlogSidebar'
import MobileFloatingCTA from '@/components/MobileFloatingCTA'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
    title: '${title.replace(/'/g, "\\'")}',
    description: '${metaDesc.replace(/'/g, "\\'")}',

    alternates: {
        canonical: '${DOMAIN}/blog/${slug}',
    },

    openGraph: {
        title: '${title.replace(/'/g, "\\'")}',
        description: '${metaDesc.replace(/'/g, "\\'")}',
        url: '${DOMAIN}/blog/${slug}',
        siteName: '${SITE_NAME}',
        locale: 'en_US',
        type: 'article',
        publishedTime: '${today.iso}',
        modifiedTime: '${today.iso}',
        authors: ['${SITE_NAME}'],
        images: [
            {
                url: '${heroImage}',
                width: 1200,
                height: 630,
                alt: '${title.replace(/'/g, "\\'")}'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: '${title.replace(/'/g, "\\'")}',
        description: '${metaDesc.replace(/'/g, "\\'")}',
        images: ['${heroImage}']
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function BlogArticle() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
${faqSchemaEntries}
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${title.replace(/"/g, '\\"')}",
        "image": "${heroImage}",
        "datePublished": "${today.iso}",
        "dateModified": "${today.iso}",
        "author": {
            "@type": "Organization",
            "name": "${SITE_NAME}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "${SITE_NAME}",
            "logo": {
                "@type": "ImageObject",
                "url": "${DOMAIN}/logo.png"
            }
        },
        "description": "${metaDesc.replace(/"/g, '\\"')}"
    }

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "${title.replace(/"/g, '\\"')}",
        "description": "${metaDesc.replace(/"/g, '\\"')}",
        "image": "${heroImage}",
        "totalTime": "PT5M",
        "tool": {
            "@type": "HowToTool",
            "name": "${BRAND}"
        }
    }

    return (
        <LanguageProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <Header />
            <main className={styles.article}>
                <div className={styles.container}>
                    <article className={styles.articleContent}>
                        <div className={styles.articleHeader}>
                            <span className={styles.category}>${category}</span>
                            <h1 className={styles.title}>
                                ${escapeForJsx(title)}
                            </h1>
                            <div className={styles.meta}>
                                <span>${today.formatted}</span>
                                <span>&bull;</span>
                                <span>${readTime}</span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className={styles.heroImage}>
                            <img
                                src="${heroImage}"
                                alt="${escapeForJsx(heroAltText)}"
                                width={1200}
                                height={630}
                            />
                        </div>

                        {/* Direct Answer — LLM Snippet Extraction */}
                        <div className={styles.quickAnswer}>
                            <h2>\uD83D\uDD39 Direct Answer</h2>
                            <p>
                                ${escapeForJsx(quickAnswer)}
                            </p>
                        </div>
${keyTakeawaysHtml}

                        {/* Article Body */}
                        <div
                            className={styles.section}
                            dangerouslySetInnerHTML={{ __html: \`${safeHtml}\` }}
                        />

                        {/* FAQ Section */}
                        <section id="faq" className={styles.section}>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faq}>
${faqHtml}
                            </div>
                        </section>

                        <div className={styles.finalCta}>
                            <h2>Ready to Remove Watermarks in Seconds?</h2>
                            <p>Try the #1 rated watermark remover today. No credit card required for trial.</p>
                            <Link href="/watermark-remover" className={styles.ctaButtonLarge}>
                                Remove Watermark Now
                            </Link>
                        </div>

                    </article>

                    <div className={styles.sidebarWrapper}>
                        <BlogSidebar />
                    </div>
                </div>
                <MobileFloatingCTA />
            </main>
            <Footer />
        </LanguageProvider>
    )
}
`;

    return pageTsx;
}

// ============================================================
// PHASE 4: UPDATE BLOG INDEX
// ============================================================

function updateBlogIndex(slug, title, category, description, heroImage) {
    const today = getToday();

    console.log(`\n📋 Phase 4: Updating blog index...`);

    let indexContent = fs.readFileSync(BLOG_INDEX_FILE, 'utf8');

    // Create new card JSX
    const newCard = `                        {/* Blog Post Card - ${title} */}
                        <Link href="/blog/${slug}" className={styles.blogCard}>
                            <div className={styles.blogImageWrapper}>
                                <img
                                    src="${heroImage}"
                                    alt="${escapeForJsx(title)}"
                                    className={styles.blogCardImage}
                                />
                            </div>
                            <div className={styles.blogCardContent}>
                                <span className={styles.blogCategory}>${category}</span>
                                <h2 className={styles.blogCardTitle}>
                                    ${escapeForJsx(title)}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </h2>
                                <p className={styles.blogCardDescription}>
                                    ${escapeForJsx(description)}
                                </p>
                                <div className={styles.blogCardMeta}>
                                    <span>${today.formatted}</span>
                                    <span>&bull;</span>
                                    <span>12 min read</span>
                                </div>
                            </div>
                        </Link>`;

    // Insert at the TOP of the blogGrid (after the opening div)
    const gridMarker = '<div className={styles.blogGrid}>';
    const gridIndex = indexContent.indexOf(gridMarker);

    if (gridIndex !== -1) {
        const insertPos = gridIndex + gridMarker.length;
        indexContent = indexContent.substring(0, insertPos) + '\n' + newCard + '\n' + indexContent.substring(insertPos);
        fs.writeFileSync(BLOG_INDEX_FILE, indexContent, 'utf8');
        console.log(`   ✅ Blog index updated with new card for "${slug}"`);
    } else {
        console.log(`   ❌ Could not find blogGrid in blog index file`);
    }
}

// ============================================================
// PHASE 5: WRITE FILES AND MARK COMPLETE
// ============================================================

async function processOneTopic(replicate, topic, topicIndex, topics) {
    const keyword = topic.keyword;
    const otherKeywords = topic.otherKeywords || [];
    const slug = slugify(keyword);

    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 Processing topic: "${keyword}"`);
    console.log(`   Slug: ${slug}`);
    console.log(`${'='.repeat(60)}`);

    // Check if article already exists
    const articleDir = path.join(BLOG_DIR, slug);
    if (fs.existsSync(path.join(articleDir, 'page.tsx'))) {
        console.log(`   ⏭️  Article already exists at app/blog/${slug}/page.tsx — skipping`);
        topics[topicIndex].status = 'completed';
        topics[topicIndex].completedDate = new Date().toISOString();
        fs.writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2), 'utf8');
        return false; // Return false so it doesn't count towards the daily limit
    }

    // PHASE 1: Generate article
    const { metadata, htmlContent } = await generateArticle(replicate, keyword, otherKeywords);

    // PHASE 2: Generate images
    const imageUrls = await generateImages(replicate, keyword);

    // PHASE 3: Write article files
    console.log(`\n📁 Phase 3: Writing article files...`);

    // Create article directory
    if (!fs.existsSync(articleDir)) {
        fs.mkdirSync(articleDir, { recursive: true });
    }

    // Copy CSS template
    if (fs.existsSync(ARTICLE_CSS_TEMPLATE)) {
        fs.copyFileSync(ARTICLE_CSS_TEMPLATE, path.join(articleDir, 'Article.module.css'));
        console.log(`   ✅ Copied Article.module.css`);
    } else {
        console.log(`   ❌ CSS template not found at ${ARTICLE_CSS_TEMPLATE}`);
    }

    // Build and write page.tsx
    const pageTsx = buildPageTsx(metadata, htmlContent, imageUrls, slug);
    fs.writeFileSync(path.join(articleDir, 'page.tsx'), pageTsx, 'utf8');
    console.log(`   ✅ Written page.tsx (${pageTsx.length} chars)`);

    // PHASE 4: Update blog index
    const heroImage = imageUrls[0] || 'https://placehold.co/800x450/1a1a2e/a855f7?text=Blog';
    const description = metadata.meta_description || `Learn about ${keyword} with our comprehensive guide.`;
    updateBlogIndex(slug, metadata.title, metadata.category || 'AI TOOLS', description, heroImage);

    // PHASE 5: Mark topic completed
    console.log(`\n✅ Phase 5: Marking topic as completed...`);
    topics[topicIndex].status = 'completed';
    topics[topicIndex].completedDate = new Date().toISOString();
    topics[topicIndex].primaryImage = heroImage;
    if (metadata.title) { topics[topicIndex].title = metadata.title; }
    fs.writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2), 'utf8');
    console.log(`   ✅ Topic "${keyword}" marked as completed`);

    return true;
}

// ============================================================
// MAIN
// ============================================================

async function main() {
    console.log(`\n${'🔷'.repeat(30)}`);
    console.log(`📰 RemoveWatermark Pro — Daily Blog Generator`);
    console.log(`📅 ${getToday().formatted}`);
    console.log(`${'🔷'.repeat(30)}\n`);

    // Validate token
    if (!REPLICATE_API_TOKEN) {
        console.error('❌ REPLICATE_API_TOKEN environment variable is required');
        process.exit(1);
    }

    // Initialize Replicate client
    const replicate = new Replicate({ auth: REPLICATE_API_TOKEN });

    // Read topics
    if (!fs.existsSync(TOPICS_FILE)) {
        console.error(`❌ Topics file not found: ${TOPICS_FILE}`);
        process.exit(1);
    }

    const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'));
    const pendingTopics = topics.map((t, i) => ({ ...t, _index: i })).filter(t => t.status === 'pending');

    console.log(`📊 Total topics: ${topics.length}`);
    console.log(`📊 Pending topics: ${pendingTopics.length}`);
    console.log(`📊 Will process: ${Math.min(LIMIT, pendingTopics.length)} topic(s)\n`);

    if (pendingTopics.length === 0) {
        console.log('✅ No pending topics to process. All done!');
        return;
    }

    // Process topics until LIMIT is reached (or no more topics)
    let processed = 0;
    let index = 0;

    while (processed < LIMIT && index < pendingTopics.length) {
        const topic = pendingTopics[index];
        index++;

        // Add a delay between articles to avoid API rate limits (skip before the first one)
        if (processed > 0) {
            console.log(`\n⏳ Waiting 30 seconds before generating the next article...`);
            await sleep(30000);
        }

        try {
            const success = await processOneTopic(replicate, topic, topic._index, topics);
            if (success) processed++;
        } catch (error) {
            console.error(`\n❌ Failed to process topic "${topic.keyword}": ${error.message}`);
            console.error(error.stack);
            // If it failed completely, we still count it towards the limit to prevent infinite error loops
            processed++;
        }
    }

    console.log(`\n${'🔷'.repeat(30)}`);
    console.log(`✅ Done! Processed ${processed} new topic(s). Checked ${index} topic(s) total.`);
    console.log(`${'🔷'.repeat(30)}\n`);
}

main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
