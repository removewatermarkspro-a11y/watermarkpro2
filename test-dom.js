const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
        page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
        
        console.log('Navigating to http://localhost:3000/blog ...');
        await page.goto('http://localhost:3000/blog', { waitUntil: 'networkidle0' });
        
        console.log('Evaluating DOM...');
        const cards = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a[href^="/blog/"]')).map(el => {
                const img = el.querySelector('img');
                return {
                    href: el.getAttribute('href'),
                    hasImg: !!img,
                    imgSrc: img ? img.getAttribute('src') : null
                };
            }).filter(c => c.href !== '/blog');
        });
        
        console.log(JSON.stringify(cards, null, 2));
        await browser.close();
    } catch (err) {
        console.error('SCRIPT ERROR:', err);
        process.exit(1);
    }
})();
