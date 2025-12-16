export interface Testimonial {
    name: string
    role: string
    text: string
    avatar: string
}

// Pool of reliable Unsplash photos (20 total)
const avatarPool = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", // Man 1
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces", // Man 2
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces", // Man 3
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces", // Man 4
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces", // Man 5
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=faces", // Man 6
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces", // Man 7
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=faces", // Man 8
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces", // Man 9
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces", // Man 10
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces", // Woman 1
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces", // Woman 2
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces", // Woman 3
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces", // Woman 4
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces", // Woman 5
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces", // Woman 6
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces", // Woman 7
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces", // Woman 8
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces", // Woman 9
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"  // Woman 10
]

export const testimonialsByPage: Record<string, Testimonial[]> = {
    // Homepage - Watermark Remover  
    'home': [
        {
            name: "James Cooper",
            role: "Video Editor",
            text: "I use a lot of TikTok clips for edits, so finding a good tiktok watermark remover was important. This tool removes the TikTok logo cleanly and much faster than other apps I've tried. Definitely recommended.",
            avatar: avatarPool[0]
        },
        {
            name: "Marcus Williams",
            role: "Filmmaker",
            text: "I needed to delete watermark from video for some old footage, and the results were amazing. The video looked untouched and the process was super quick. Great for content creators.",
            avatar: avatarPool[1]
        },
        {
            name: "Daniel Chen",
            role: "Social Media Manager",
            text: "As someone who edits videos daily, having a reliable watermark remover video tool is a must. This one removed the logo cleanly and kept the quality high, which is usually hard to find.",
            avatar: avatarPool[2]
        },
        {
            name: "Rachel Green",
            role: "Photographer",
            text: "This is the first time a watermark eraser didn't leave strange smudges or blurry spots. I tested it on pictures with complicated backgrounds and the watermark removal was flawless.",
            avatar: avatarPool[10]
        },
        {
            name: "Sophie Turner",
            role: "Content Creator",
            text: "I was really surprised by how well this watermark remover works. I needed to remove watermark from photo for a client project, and the results looked completely natural.",
            avatar: avatarPool[11]
        },
        {
            name: "Jessica Liu",
            role: "Digital Marketer",
            text: "The AI behind this tool is impressive. The ai watermark remover detects the watermark instantly and rebuilds the background perfectly. I've used it to remove watermark from image dozens of times.",
            avatar: avatarPool[12]
        },
        {
            name: "Robert Taylor",
            role: "Freelance Editor",
            text: "I saw this tool mentioned online and decided to try it. The watermark remover did a great job on both pictures and videos. It handled everything easily.",
            avatar: avatarPool[3]
        },
        {
            name: "Priya Sharma",
            role: "YouTube Creator",
            text: "I was expecting much, but this tool can truly remove watermark from video better than some paid software. The interface is simple and the results look professional.",
            avatar: avatarPool[13]
        },
        {
            name: "Isabella Martinez",
            role: "Graphic Designer",
            text: "I upload a lot of images online and sometimes forget to save the originals. The image watermark remover helped me restore several important photos with almost perfect accuracy.",
            avatar: avatarPool[14]
        }
    ],

    // Auto Remove People
    'auto-remove-people': [
        {
            name: "Kevin Anderson",
            role: "Real Estate Photographer",
            text: "Perfect for removing random people from property photos. I used to spend hours in Photoshop, but this AI does it in seconds with incredible accuracy. Game changer for my business.",
            avatar: avatarPool[4]
        },
        {
            name: "Nathan Brooks",
            role: "Travel Blogger",
            text: "Tourist spots are always crowded, but now I can get clean photos without photobombers. The AI removes people seamlessly while preserving the background perfectly.",
            avatar: avatarPool[5]
        },
        {
            name: "Oliver Davis",
            role: "Landscape Photographer",
            text: "This tool saved my vacation photos! Removing unwanted people from my landscape shots has never been easier. The results are so natural, you can't tell anyone was there.",
            avatar: avatarPool[6]
        },
        {
            name: "Amanda Collins",
            role: "Event Photographer",
            text: "Sometimes guests walk into the frame during important moments. This tool lets me clean up the shots perfectly without affecting the main subjects. Absolutely love it!",
            avatar: avatarPool[18]
        },
        {
            name: "Victoria Hayes",
            role: "Instagram Influencer",
            text: "Getting the perfect shot for Instagram often means waiting for crowds to clear. Not anymore! This AI removes people instantly and my feed looks so much cleaner now.",
            avatar: avatarPool[19]
        },
        {
            name: "Maya Johnson",
            role: "Architecture Photographer",
            text: "Architectural photography requires clean, people-free shots. This tool delivers professional-grade results that would normally require expensive editing software.",
            avatar: avatarPool[15]
        },
        {
            name: "Christopher Lee",
            role: "Wedding Photographer",
            text: "Occasionally someone walks into the background during wedding shots. This AI removes them flawlessly, keeping the focus on the couple. It's a lifesaver!",
            avatar: avatarPool[7]
        },
        {
            name: "Zara Ahmed",
            role: "Fashion Photographer",
            text: "Street fashion shoots always have random people in the background. This tool cleans them up perfectly while maintaining the urban aesthetic I want.",
            avatar: avatarPool[16]
        },
        {
            name: "Olivia Parker",
            role: "Product Photographer",
            text: "Product shoots in public spaces used to be challenging with people walking by. Now I can remove them in post and get that clean, professional look every time.",
            avatar: avatarPool[17]
        }
    ],

    // Image Upscaler
    'image-upscaler': [
        {
            name: "Alex Morgan",
            role: "Print Designer",
            text: "I needed to upscale old client logos for large format printing. This AI upscaler maintained perfect clarity and sharpness. My prints look amazing!",
            avatar: avatarPool[8]
        },
        {
            name: "Benjamin White",
            role: "Digital Artist",
            text: "Upscaling artwork for exhibitions used to be a nightmare. This tool enhances resolution without losing detail. The AI is incredibly smart at preserving textures.",
            avatar: avatarPool[9]
        },
        {
            name: "Ryan Mitchell",
            role: "E-commerce Manager",
            text: "Our old product photos were low-res, but this upscaler transformed them into high-quality images perfect for our website. Sales have improved thanks to better visuals!",
            avatar: avatarPool[0]
        },
        {
            name: "Emily Watson",
            role: "Magazine Editor",
            text: "Sometimes we receive low-resolution images from contributors. This upscaler saves the day, making them print-ready without quality loss. Absolutely essential!",
            avatar: avatarPool[10]
        },
        {
            name: "Sophia Rodriguez",
            role: "Brand Manager",
            text: "Upscaling our vintage brand photos for modern marketing materials was effortless. The AI enhanced them beautifully while keeping the authentic look intact.",
            avatar: avatarPool[11]
        },
        {
            name: "Hannah Kim",
            role: "Portrait Photographer",
            text: "I love this upscaler for client prints. It enhances facial details and skin textures perfectly. My clients are thrilled with the quality of their enlarged portraits.",
            avatar: avatarPool[12]
        },
        {
            name: "Lucas Thompson",
            role: "Web Developer",
            text: "Needed to upscale icons and graphics for a 4K website. This tool delivered crisp, sharp results without pixelation. Perfect for modern high-res displays!",
            avatar: avatarPool[1]
        },
        {
            name: "Aisha Patel",
            role: "Content Manager",
            text: "Our image library had many outdated low-res photos. This AI upscaler brought them back to life, saving us thousands in new photoshoots.",
            avatar: avatarPool[13]
        },
        {
            name: "Chloe Bennett",
            role: "Art Director",
            text: "Upscaling vintage photos for a retro campaign was seamless. The AI preserved the grain and character while dramatically improving clarity. Fantastic results!",
            avatar: avatarPool[14]
        }
    ],

    // Remove Background
    'remove-background': [
        {
            name: "William Carter",
            role: "E-commerce Seller",
            text: "Removing backgrounds from product photos used to take forever. This AI does it instantly with perfect edge detection. My product listings look so much more professional now!",
            avatar: avatarPool[2]
        },
        {
            name: "Ethan Garcia",
            role: "Social Media Designer",
            text: "Creating social media graphics is so much faster now. The background removal is precise, even with complex hair and fine details. Total game changer!",
            avatar: avatarPool[3]
        },
        {
            name: "Mason Scott",
            role: "Marketing Specialist",
            text: "I use this for creating promotional materials daily. The AI removes backgrounds cleanly, making it easy to place subjects on any backdrop. Super efficient!",
            avatar: avatarPool[4]
        },
        {
            name: "Grace Anderson",
            role: "Portrait Photographer",
            text: "Perfect for creating professional headshots with clean backgrounds. The edge detection is incredibly accurate, even with flyaway hair. My clients love the results!",
            avatar: avatarPool[15]
        },
        {
            name: "Mia Thompson",
            role: "Graphic Designer",
            text: "This tool is essential for my design workflow. Removing backgrounds is instant and precise, letting me focus on creativity instead of tedious masking.",
            avatar: avatarPool[16]
        },
        {
            name: "Lily Evans",
            role: "Online Store Owner",
            text: "My product photos now have that professional white background look. The AI handles even tricky items like jewelry and glassware perfectly. Sales are up!",
            avatar: avatarPool[17]
        },
        {
            name: "Jacob Wilson",
            role: "Creative Director",
            text: "We use this for client presentations and marketing materials. The background removal quality is outstanding, saving our team countless hours of manual editing.",
            avatar: avatarPool[5]
        },
        {
            name: "Ava Martinez",
            role: "Fashion Blogger",
            text: "Creating outfit collages for my blog is so easy now. The AI removes backgrounds flawlessly, making my content look polished and professional.",
            avatar: avatarPool[18]
        },
        {
            name: "Charlotte Lewis",
            role: "Brand Designer",
            text: "Preparing images for branding projects has never been easier. This tool delivers clean cutouts every time, perfect for logos and marketing materials.",
            avatar: avatarPool[19]
        }
    ],

    // Remove Object
    'remove-object': [
        {
            name: "Michael Adams",
            role: "Travel Photographer",
            text: "Removing unwanted objects from travel photos is effortless now. Power lines, trash bins, everything vanishes perfectly. My portfolio has never looked better!",
            avatar: avatarPool[6]
        },
        {
            name: "Joshua Clark",
            role: "Real Estate Agent",
            text: "Property photos often have distracting elements. This AI removes them seamlessly, making homes look their absolute best. My listings sell faster now!",
            avatar: avatarPool[7]
        },
        {
            name: "Samuel Turner",
            role: "Sports Photographer",
            text: "Sometimes equipment or spectators distract from the action. This tool removes them perfectly while keeping the athletes sharp. It's a must-have!",
            avatar: avatarPool[8]
        },
        {
            name: "Emma Wilson",
            role: "Wedding Photographer",
            text: "Exit signs, cables, and other distractions used to ruin perfect shots. This AI removes them flawlessly, delivering the dreamy wedding photos my clients want.",
            avatar: avatarPool[10]
        },
        {
            name: "Amelia Harris",
            role: "Nature Photographer",
            text: "Removing litter and modern elements from nature shots helps preserve the wild beauty. This tool does it perfectly, making my photos truly immersive.",
            avatar: avatarPool[11]
        },
        {
            name: "Sarah Johnson",
            role: "Food Blogger",
            text: "Food photography requires clean compositions. This AI removes unwanted utensils, crumbs, or distractions instantly. My food photos look restaurant-quality!",
            avatar: avatarPool[12]
        },
        {
            name: "David King",
            role: "Commercial Photographer",
            text: "Client shoots sometimes have unavoidable clutter. This tool cleans it up perfectly in post, delivering the pristine images businesses need.",
            avatar: avatarPool[9]
        },
        {
            name: "Natalie Moore",
            role: "Interior Designer",
            text: "Removing temporary furniture or staging elements from design photos is instant. The AI reconstructs backgrounds beautifully. Perfect for before/after presentations!",
            avatar: avatarPool[13]
        },
        {
            name: "Elena Rodriguez",
            role: "Lifestyle Photographer",
            text: "Sometimes random objects photobomb lifestyle shots. This AI erases them seamlessly, keeping the focus on the moments that matter. Love it!",
            avatar: avatarPool[14]
        }
    ],

    // Remove Text
    'remove-text': [
        {
            name: "Andrew Hall",
            role: "Image Restorer",
            text: "Removing old captions and dates from vintage photos is my specialty. This AI does it flawlessly, preserving the original image quality perfectly.",
            avatar: avatarPool[0]
        },
        {
            name: "Tyler Young",
            role: "Graphic Designer",
            text: "Sometimes stock photos have unwanted text overlays. This tool removes them cleanly, giving me a blank canvas to work with. Incredibly useful!",
            avatar: avatarPool[1]
        },
        {
            name: "Brandon Wright",
            role: "Social Media Manager",
            text: "Repurposing images with old text is easy now. The AI erases text perfectly while keeping the background intact. My content creation is so much faster!",
            avatar: avatarPool[2]
        },
        {
            name: "Lauren Mitchell",
            role: "Digital Marketer",
            text: "Removing watermarked text from licensed images for presentations is seamless. The AI reconstructs backgrounds beautifully. Professional results every time!",
            avatar: avatarPool[15]
        },
        {
            name: "Rebecca Clark",
            role: "Content Creator",
            text: "I often need to remove captions and timestamps from screenshots. This tool does it perfectly, making my content look polished and professional.",
            avatar: avatarPool[16]
        },
        {
            name: "Jasmine Lee",
            role: "Photo Editor",
            text: "Cleaning up meme text or unwanted annotations is instant with this AI. The results are seamless, perfect for creating fresh, clean content.",
            avatar: avatarPool[17]
        },
        {
            name: "Cameron Brown",
            role: "Archivist",
            text: "Restoring historical photos often means removing old labels and stamps. This AI does it precisely, helping preserve cultural heritage beautifully.",
            avatar: avatarPool[3]
        },
        {
            name: "Nina Santos",
            role: "E-learning Designer",
            text: "Removing outdated text from educational images saves time and budget. This tool updates visuals perfectly for new course materials.",
            avatar: avatarPool[18]
        },
        {
            name: "Diana Green",
            role: "Publication Editor",
            text: "Sometimes we need to remove copyright text or captions for reprints. This AI handles it flawlessly, maintaining image integrity perfectly.",
            avatar: avatarPool[19]
        }
    ],

    // Remove Watermark Video
    'remove-watermark-video': [
        {
            name: "Jordan Phillips",
            role: "Video Producer",
            text: "Removing watermarks from stock footage used to be impossible. This AI does it seamlessly, saving me tons of money on licensing fees. Absolutely essential!",
            avatar: avatarPool[4]
        },
        {
            name: "Hunter Evans",
            role: "YouTuber",
            text: "TikTok watermarks were ruining my compilation videos. This tool removes them perfectly while keeping video quality intact. My channel has grown significantly!",
            avatar: avatarPool[5]
        },
        {
            name: "Connor Martinez",
            role: "Film Student",
            text: "For my projects, I needed clean footage without demo watermarks. This AI removes them flawlessly, helping me create professional-looking films on a student budget.",
            avatar: avatarPool[6]
        },
        {
            name: "Bella Thompson",
            role: "Social Media Influencer",
            text: "Reposting TikTok content for Instagram used to show ugly watermarks. This tool removes them perfectly, making my cross-platform strategy seamless.",
            avatar: avatarPool[10]
        },
        {
            name: "Madison White",
            role: "Content Manager",
            text: "Our team repurposes video content across platforms. Removing platform-specific watermarks is crucial, and this AI does it perfectly every time.",
            avatar: avatarPool[11]
        },
        {
            name: "Stella Anderson",
            role: "Marketing Coordinator",
            text: "Campaign videos sometimes have unwanted logos or watermarks. This tool cleans them up beautifully, delivering professional results for client presentations.",
            avatar: avatarPool[12]
        },
        {
            name: "Dylan Cooper",
            role: "Video Editor",
            text: "Removing timestamps and watermarks from client footage is part of my daily workflow. This AI handles it effortlessly, saving hours of manual editing.",
            avatar: avatarPool[7]
        },
        {
            name: "Ruby Garcia",
            role: "Digital Strategist",
            text: "Clean, watermark-free videos perform better on social media. This tool helps us create polished content that drives engagement and conversions.",
            avatar: avatarPool[13]
        },
        {
            name: "Aria Davis",
            role: "Videographer",
            text: "Sometimes downloaded footage has unwanted watermarks. This AI removes them seamlessly, letting me deliver pristine videos to clients every time.",
            avatar: avatarPool[14]
        }
    ],

    // Replace Background
    'replace-background': [
        {
            name: "Isaac Robinson",
            role: "Portrait Photographer",
            text: "Replacing backgrounds for portrait sessions is now instant. The AI creates perfect cutouts and blends subjects naturally into any backdrop. My clients love the variety!",
            avatar: avatarPool[8]
        },
        {
            name: "Caleb Walker",
            role: "Product Photographer",
            text: "Creating lifestyle product shots with different backgrounds is effortless. The AI handles lighting and shadows perfectly. My portfolio has never looked better!",
            avatar: avatarPool[9]
        },
        {
            name: "Aaron Martinez",
            role: "Creative Director",
            text: "Background replacement for campaigns is lightning fast now. The AI matches tones and perspectives perfectly, delivering professional results in seconds.",
            avatar: avatarPool[0]
        },
        {
            name: "Scarlett Taylor",
            role: "Fashion Photographer",
            text: "Placing models in exotic locations without travel is possible now. The background replacement is so realistic, you'd never know it wasn't shot on location!",
            avatar: avatarPool[15]
        },
        {
            name: "Violet Jackson",
            role: "E-commerce Specialist",
            text: "Creating seasonal product backdrops is instant. The AI adapts backgrounds beautifully, helping us refresh our store's look for every holiday. Sales love it!",
            avatar: avatarPool[16]
        },
        {
            name: "Hazel Moore",
            role: "Brand Photographer",
            text: "Consistency across brand imagery is crucial. This tool lets me replace backgrounds uniformly, creating a cohesive visual identity for all clients.",
            avatar: avatarPool[17]
        },
        {
            name: "Blake Carter",
            role: "Advertising Designer",
            text: "Testing different background concepts for ads is effortless. The AI generates natural-looking variations instantly, speeding up our creative process dramatically.",
            avatar: avatarPool[1]
        },
        {
            name: "Aurora Lee",
            role: "Social Media Designer",
            text: "Creating themed social content is so much faster. The background replacement tool adapts perfectly to trends, keeping our feed fresh and engaging.",
            avatar: avatarPool[18]
        },
        {
            name: "Luna Williams",
            role: "Visual Merchandiser",
            text: "Virtual staging with background replacement has transformed our online presentations. Products look amazing in any setting, boosting customer confidence and sales!",
            avatar: avatarPool[19]
        }
    ],

    // Free Sora Remover
    'free-sora-remover': [
        {
            name: "Marcus Reynolds",
            role: "AI Content Creator",
            text: "Sora generates amazing videos, but the watermark was a problem. This tool removes it perfectly without affecting video quality. Now I can use my AI videos professionally!",
            avatar: avatarPool[0]
        },
        {
            name: "Derek Chang",
            role: "Digital Marketer",
            text: "Removing the Sora watermark from AI-generated videos is essential for client work. This tool does it seamlessly in seconds. Game changer for marketing campaigns!",
            avatar: avatarPool[1]
        },
        {
            name: "Ryan Foster",
            role: "Video Editor",
            text: "I use Sora for b-roll footage, but the watermark is distracting. This AI remover cleans it up flawlessly. The output looks completely professional!",
            avatar: avatarPool[2]
        },
        {
            name: "Laura Mitchell",
            role: "Creative Director",
            text: "Our agency uses AI-generated content a lot. Removing Sora watermarks quickly is crucial for client presentations. This tool delivers perfect results every time!",
            avatar: avatarPool[10]
        },
        {
            name: "Jennifer Park",
            role: "Social Media Manager",
            text: "Sora creates stunning visuals, but watermarks don't fit our brand. This tool removes them cleanly, making AI content ready for social media instantly!",
            avatar: avatarPool[11]
        },
        {
            name: "Rachel Kim",
            role: "Content Strategist",
            text: "AI video generation is the future, but watermarks limit usability. This remover solves that problem perfectly. Now I can integrate Sora videos seamlessly!",
            avatar: avatarPool[12]
        },
        {
            name: "Trevor Johnson",
            role: "Filmmaker",
            text: "Sora is incredible for concept videos, but I can't show watermarks to clients. This tool removes them instantly while preserving quality. Absolutely essential!",
            avatar: avatarPool[3]
        },
        {
            name: "Nina Rodriguez",
            role: "Brand Designer",
            text: "Using AI-generated videos for branding requires clean, watermark-free content. This tool handles Sora watermarks perfectly. Professional results in seconds!",
            avatar: avatarPool[13]
        },
        {
            name: "Samantha Lee",
            role: "YouTube Creator",
            text: "Incorporating Sora videos into my content workflow is easy now. The watermark remover is fast and accurate, keeping my videos looking polished and professional!",
            avatar: avatarPool[14]
        }
    ]
}
