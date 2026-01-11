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
import { textRemovalFaqItemsNo } from '@/utils/textRemovalFaqItemsNo'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from '../../watermark-remover/watermark.module.css'

export default function TextRemoverClientNo() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const t = (translations as any).no

    useEffect(() => { setIsAuthenticated(localStorage.getItem('userAuthenticated') === 'true') }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof pageId="remove-text" />
                        <h1 className={styles.title}><span className={styles.violetText}>{t.removeTextPage.hero.titleHighlight}</span> {t.removeTextPage.hero.title}</h1>
                        <p className={styles.description}>{t.removeTextPage.hero.description}</p>
                        <CategoryTabs />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader onImageUpload={(file, preview) => { setUploadedImage(file); setOriginalPreview(preview); setProcessedImage(preview); }} isAuthenticated={isAuthenticated} onAuthRequired={() => setShowAuthPopup(true)} />
                            {processedImage && originalPreview && (<><ResultDisplay originalImage={originalPreview} processedImage={processedImage} onDownload={() => { if (!processedImage) return; const link = document.createElement('a'); link.href = processedImage; link.download = 'processed-image.png'; link.click(); }} onGenerateNew={() => { setUploadedImage(null); setOriginalPreview(null); setProcessedImage(null); setTimeout(() => { if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }, 100); }} /><RelatedTools /></>)}
                        </div>
                        <div className={styles.ratingsBelow}><RatingBadges /></div>
                    </section>
                    <ExamplesSection />
                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}><span className={styles.badge}>{t.removeTextPage.features.badge}</span></div>
                        <div className={styles.featureGrid}>
<<<<<<< HEAD
                            {[1, 2, 3].map(i => (<div key={i} className={styles.featureItem}><div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}><img src={`/images/feature-remove-text-${i === 1 ? 'tablet.png' : i === 2 ? 'tshirt.jpg' : 'paint.png'}`} alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" /></div><div className={styles.featureContent}><h3>{t.removeTextPage.features[`feature${i}`].title}</h3><p className={styles.sectionText}>{t.removeTextPage.features[`feature${i}`].description}</p><button className="btn btn-primary" onClick={() => { if (!localStorage.getItem('userAuthenticated')) setShowAuthPopup(true); else if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{t.removeTextPage.features[`feature${i}`].button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button></div></div>))}
=======
                            {[1, 2, 3].map(i => (<div key={i} className={styles.featureItem}><div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}><img src={`/images/feature-remove-text-${i === 1 ? 'tablet.png' : i === 2 ? 'tshirt.jpg' : 'paint.png'}`} alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div><div className={styles.featureContent}><h3>{t.removeTextPage.features[`feature${i}`].title}</h3><p className={styles.sectionText}>{t.removeTextPage.features[`feature${i}`].description}</p><button className="btn btn-primary" onClick={() => { if (!localStorage.getItem('userAuthenticated')) setShowAuthPopup(true); else if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{t.removeTextPage.features[`feature${i}`].button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button></div></div>))}
>>>>>>> feature/qwen-api-integration
                        </div>
                    </section>
                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}><span className={styles.badge}>{t.removeTextPage.howItWorks.badge}</span><h2 className={styles.sectionTitle}>{t.removeTextPage.howItWorks.title}</h2></div>
                        <div className={styles.steps}>{[1, 2, 3].map(i => (<div key={i} className={styles.step}><div className={styles.stepNumber}>{i}</div><h3 className={styles.stepTitle}>{t.removeTextPage.howItWorks[`step${i}`].title}</h3><p className={styles.stepText}>{t.removeTextPage.howItWorks[`step${i}`].description}</p></div>))}</div>
                    </section>
                    <Pricing />
                    <Testimonials pageId="remove-text" onCtaClick={() => { if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} />
                    <FAQ items={textRemovalFaqItemsNo} />
<<<<<<< HEAD
                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/ai-text-remover-tool.webp', 'tool2': '/images-optimized/video-watermark-remover-3.webp', 'tool3': '/images-optimized/text-remover-light-blue-card.webp', 'tool4': '/images-optimized/remove-object-text-tool.webp', 'tool5': '/images-optimized/replace-background-text-tool.webp', 'tool6': '/images-optimized/remove-background-text-tool.webp', 'tool7': '/images-optimized/people-remover-beach-woman-card.webp', 'tool8': '/images-optimized/image-upscaler-owl-card.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-3.webp' }} />
=======
                    <ToolsGrid customImages={{ 'tool1': '/images/tools/tool-card-text-page.png', 'tool2': '/images/tools/video-watermark-3.png', 'tool3': '/images/tools/remove-text-light-blue.jpg', 'tool4': '/images/tools/tool-card-remove-object-text.png', 'tool5': '/images/tools/tool-card-replace-bg-text.png', 'tool6': '/images/tools/tool-card-remove-bg-text.png', 'tool7': '/images/tools/people-remover-beach-woman.jpg', 'tool8': '/images/tools/upscaler-owl.jpg', 'tool9': '/images/tools/sora-remover-3.png' }} />
>>>>>>> feature/qwen-api-integration
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={() => { setShowAuthPopup(false); setIsAuthenticated(localStorage.getItem('userAuthenticated') === 'true'); }} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
