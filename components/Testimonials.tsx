import styles from './Testimonials.module.css'

interface TestimonialsProps {
    onCtaClick?: () => void
}

export default function Testimonials({ onCtaClick }: TestimonialsProps = {}) {
    const testimonials = [
        {
            name: "Jake Rodriguez",
            role: "Video Editor",
            text: "I use a lot of TikTok clips for edits, so finding a good tiktok watermark remover was important. This tool removes the TikTok logo cleanly and much faster than other apps I've tried. Definitely recommended.",
            avatar: "JR"
        },
        {
            name: "Michael Torres",
            role: "Filmmaker",
            text: "I needed to delete watermark from video for some old footage, and the results were amazing. The video looked untouched and the process was super quick. Great for content creators.",
            avatar: "MT"
        },
        {
            name: "David Kim",
            role: "Social Media Manager",
            text: "As someone who edits videos daily, having a reliable watermark remover video tool is a must. This one removed the logo cleanly and kept the quality high, which is usually hard to find.",
            avatar: "DK"
        },
        {
            name: "Tom Wilson",
            role: "Freelance Editor",
            text: "I saw this tool mentioned online and decided to try it. The watermark remover did a great job on both pictures and videos. I even used it to remove watermark from photo with text overlays, and it handled everything easily.",
            avatar: "TW"
        },
        {
            name: "Lisa Anderson",
            role: "Photographer",
            text: "This is the first time a watermark eraser didn't leave strange smudges or blurry spots. I tested it on pictures with complicated backgrounds and the watermark removal was flawless.",
            avatar: "LA"
        },
        {
            name: "Sarah Mitchell",
            role: "Content Creator",
            text: "I was really surprised by how well this watermark remover works. I needed to remove watermark from photo for a client project, and the results looked completely natural. It's way better than anything I've used before.",
            avatar: "SM"
        },
        {
            name: "Emma Chen",
            role: "Digital Marketer",
            text: "The AI behind this tool is impressive. The ai watermark remover detects the watermark instantly and rebuilds the background perfectly. I've used it to remove watermark from image dozens of times already.",
            avatar: "EC"
        },
        {
            name: "Nina Patel",
            role: "YouTube Creator",
            text: "I was expecting much, but this tool can truly remove watermark from video better than some paid software. The interface is simple and the results look professional.",
            avatar: "NP"
        },
        {
            name: "Maria Santos",
            role: "Graphic Designer",
            text: "I upload a lot of images online and sometimes forget to save the originals. The image watermark remover helped me restore several important photos with almost perfect accuracy. Love it.",
            avatar: "MS"
        }
    ]

    return (
        <section id="testimonials" className={styles.testimonials}>
            <span className={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '0.5rem' }}>
                    <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="currentColor" />
                </svg>
                HUNDREDS OF REVIEWS
            </span>

            <h2 className={styles.title}>
                Don't take it from us,<br />hear it from our users
            </h2>

            <div className={styles.grid}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.stars}>
                            {'⭐'.repeat(5)}
                        </div>
                        <p className={styles.text}>{testimonial.text}</p>
                        <div className={styles.header}>
                            <div className={styles.avatar}>
                                {testimonial.avatar}
                            </div>
                            <div>
                                <div className={styles.name}>{testimonial.name}</div>
                                <div className={styles.role}>{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaBadge}>
                        <span className={styles.avatarGroup}>
                            <span className={styles.miniAvatar}>👤</span>
                            <span className={styles.miniAvatar}>👤</span>
                            <span className={styles.miniAvatar}>👤</span>
                        </span>
                        Trusted by 20,000+ users
                    </div>

                    <h3 className={styles.ctaTitle}>
                        Ready to clean your images?
                    </h3>

                    <p className={styles.ctaText}>
                        From removing watermarks to erasing unwanted objects — unlock professional photo editing. All powered by AI.
                    </p>

                    <button className={styles.ctaButton} onClick={onCtaClick}>
                        Start Now for Free
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
