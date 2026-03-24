const sharp = require('sharp');

async function checkBlack(filePath) {
    try {
        const { data, info } = await sharp(filePath)
            .raw()
            .toBuffer({ resolveWithObject: true });
        
        let isBlack = true;
        // Check if all pixels are black or very dark (e.g. RGB < 10)
        for (let i = 0; i < data.length; i += 3) {
            if (data[i] > 15 || data[i+1] > 15 || data[i+2] > 15) {
                isBlack = false;
                break;
            }
        }
        console.log(`${filePath.split('/').pop().split('\\').pop()}: ${isBlack ? 'SOLID BLACK' : 'Has Content'}`);
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
    }
}

async function run() {
    await checkBlack('public/images/blog/dewatermark-4.jpg');
    await checkBlack('public/images/blog/dewatermark-5.jpg');
    await checkBlack('public/images/blog/remove-tiktok-watermark-1.jpg');
    await checkBlack('public/images/blog/remove-video-watermark-1.jpg');
}

run();
