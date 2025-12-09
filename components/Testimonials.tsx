import styles from './Testimonials.module.css'
import { testimonialsByPage } from '@/utils/testimonialData'

interface TestimonialsProps {
    onCtaClick?: () => void
    pageId?: 'home' | 'auto-remove-people' | 'image-upscaler' | 'remove-background' | 'remove-object' | 'remove-text' | 'remove-watermark-video' | 'replace-background'
}

export default function Testimonials({ onCtaClick, pageId = 'home' }: TestimonialsProps) {
    const testimonials = testimonialsByPage[pageId] || testimonialsByPage['home']

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
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%' }}
                                />
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
