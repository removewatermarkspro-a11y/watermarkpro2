'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryTabs from '@/components/CategoryTabs'
import SocialProof from '@/components/SocialProof'
import RatingBadges from '@/components/RatingBadges'
import ImageUploader from '@/components/ImageUploader'
import ExamplesSection from '@/components/ExamplesSection'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ToolsGrid from '@/components/ToolsGrid'
import AuthPopup from '@/components/AuthPopup'
import PromoPopup from '@/components/PromoPopup'
import ResultDisplay from '@/components/ResultDisplay'
import RelatedTools from '@/components/RelatedTools'
import PromptInput from '@/components/PromptInput'
import { replaceBackgroundFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from '../../watermark-remover/watermark.module.css'

export default function BackgroundChangerClientFr() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()
    const { language } = useLanguage()
    // Force French language
    const t = (translations as any).fr
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof pageId="replace-background" />
                        <h1 className={styles.title}>
                            {t.replaceBackgroundPage.hero.title} <span className={styles.violetText}>{t.replaceBackgroundPage.hero.titleHighlight}</span>
                        </h1>
                        <p className={styles.description}>{t.replaceBackgroundPage.hero.description}</p>
                        <CategoryTabs />
                        <PromptInput placeholder={t.replaceBackgroundPage.hero.promptPlaceholder} />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader onImageUpload={(file, preview) => { setUploadedImage(file); setOriginalPreview(preview); setProcessedImage(preview); }} isAuthenticated={!!user} onAuthRequired={() => setShowAuthPopup(true)} />
                            {processedImage && originalPreview && (<><ResultDisplay originalImage={originalPreview} processedImage={processedImage} onDownload={() => { if (!processedImage) return; const link = document.createElement('a'); link.href = processedImage; link.download = 'processed-image.png'; link.click(); }} onGenerateNew={() => { setUploadedImage(null); setOriginalPreview(null); setProcessedImage(null); setTimeout(() => { if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }, 100); }} /><RelatedTools /></>)}
                        </div>
                        <div className={styles.ratingsBelow}><RatingBadges /></div>
                    </section>
                    <ExamplesSection />
                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}><span className={styles.badge}>{t.replaceBackgroundPage.features.badge}</span></div>
                        <div className={styles.featureGrid}>
                            {[1, 2, 3].map(i => (<div key={i} className={styles.featureItem}><div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}><img src={`/images/feature-replace-background-${i === 1 ? '2.png' : i === 2 ? 'new-2.jpg' : '3.jpg'}`} alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" /></div><div className={styles.featureContent}><h3>{t.replaceBackgroundPage.features[`feature${i}`].title}</h3><p className={styles.sectionText}>{t.replaceBackgroundPage.features[`feature${i}`].description}</p><button className="btn btn-primary" onClick={() => { if (!user) setShowAuthPopup(true); else if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{t.replaceBackgroundPage.features[`feature${i}`].button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button></div></div>))}
                        </div>
                    </section>
                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}><span className={styles.badge}>{t.replaceBackgroundPage.howItWorks.badge}</span><h2 className={styles.sectionTitle}>{t.replaceBackgroundPage.howItWorks.title}</h2></div>
                        <div className={styles.steps}>{[1, 2, 3].map(i => (<div key={i} className={styles.step}><div className={styles.stepNumber}>{i}</div><h3 className={styles.stepTitle}>{t.replaceBackgroundPage.howItWorks[`step${i}`].title}</h3><p className={styles.stepText}>{t.replaceBackgroundPage.howItWorks[`step${i}`].description}</p></div>))}</div>
                    </section>
                    <Pricing />
                    <Testimonials pageId="replace-background" onCtaClick={() => { if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} />
                    <FAQ items={replaceBackgroundFaqItemsFr} />
                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/ai-background-changer-tool.webp', 'tool2': '/images-optimized/video-watermark-remover-5.webp', 'tool3': '/images-optimized/text-remover-beige-card.webp', 'tool4': '/images-optimized/remove-object-replace-tool.webp', 'tool5': '/images-optimized/background-replacement-main-tool.webp', 'tool6': '/images-optimized/remove-background-replace-tool.webp', 'tool7': '/images-optimized/people-remover-field-man-card.webp', 'tool8': '/images-optimized/image-upscaler-lion-card.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-5.webp' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
