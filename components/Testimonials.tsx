'use client'

import styles from './Testimonials.module.css'
import { testimonialsByPage } from '@/utils/testimonialData'
import { testimonialsByPageFr } from '@/utils/testimonialDataFr'
import { testimonialDataDe } from '@/utils/testimonialDataDe'
import { testimonialDataEs } from '@/utils/testimonialDataEs'
import { testimonialsByPage as testimonialsByPagePt } from '@/utils/testimonialDataPt'
import { testimonialDataKo } from '@/utils/testimonialDataKo'
import { testimonialDataNo } from '@/utils/testimonialDataNo'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface TestimonialsProps {
    onCtaClick?: () => void
    pageId?: 'home' | 'auto-remove-people' | 'image-upscaler' | 'remove-background' | 'remove-object' | 'remove-text' | 'remove-watermark-video' | 'replace-background' | 'free-sora-remover'
}

export default function Testimonials({ onCtaClick, pageId = 'home' }: TestimonialsProps) {
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    // Map pageId to testimonial keys
    const testimonialKey = pageId === 'home' ? 'home' : pageId

    const testimonials = language === 'ko'
        ? ((testimonialDataKo as any)[testimonialKey] || (testimonialsByPage as any)[pageId] || testimonialsByPage['home'])
        : language === 'no'
            ? ((testimonialDataNo as any)[testimonialKey] || (testimonialsByPage as any)[pageId] || testimonialsByPage['home'])
            : language === 'de'
                ? ((testimonialDataDe as any)[testimonialKey] || (testimonialsByPage as any)[pageId] || testimonialsByPage['home'])
                : language === 'fr'
                    ? ((testimonialsByPageFr as any)[pageId] || (testimonialsByPage as any)[pageId] || testimonialsByPage['home'])
                    : language === 'es'
                        ? ((testimonialDataEs as any)[testimonialKey] || (testimonialsByPage as any)[pageId] || testimonialsByPage['home'])
                        : language === 'pt'
                            ? ((testimonialsByPagePt as any)[pageId] || (testimonialsByPage as any)[pageId] || testimonialsByPage['home'])
                            : ((testimonialsByPage as any)[pageId] || testimonialsByPage['home'])

    return (
        <section id="testimonials" className={styles.testimonials}>
            <span className={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '0.5rem' }}>
                    <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="currentColor" />
                </svg>
                {t.testimonialsCta.badge}
            </span>

            <h2 className={styles.title}>
                {t.testimonials.title}<br />{t.testimonials.subtitle}
            </h2>

            <div className={styles.grid}>
                {testimonials.map((testimonial: any, index: number) => (
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
                        {t.testimonialsCta.trustedBadge}
                    </div>

                    <h3 className={styles.ctaTitle}>
                        {t.testimonialsCta.title}
                    </h3>

                    <p className={styles.ctaText}>
                        {t.testimonialsCta.text}
                    </p>

                    <button className={styles.ctaButton} onClick={onCtaClick}>
                        {t.testimonialsCta.button}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
