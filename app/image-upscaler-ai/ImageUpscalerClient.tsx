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
import { imageUpscalerFaqItems } from '@/utils/faqItems'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

export default function ImageUpscalerClient() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { language } = useLanguage()
    // Force English language
    const t = (translations as any).en

    useEffect(() => {
        const authenticated = localStorage.getItem('userAuthenticated') === 'true'
        setIsAuthenticated(authenticated)
    }, [])

    const handleImageUpload = (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)
        setProcessedImage(preview)
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
        const authenticated = localStorage.getItem('userAuthenticated') === 'true'
        setIsAuthenticated(authenticated)
    }

    const handleDownload = () => {
        if (!processedImage) return
        const link = document.createElement('a')
        link.href = processedImage
        link.download = 'processed-image.png'
        link.click()
    }

    const handleGenerateNew = () => {
        setUploadedImage(null)
        setOriginalPreview(null)
        setProcessedImage(null)
        setTimeout(() => {
            if (uploadRef.current) {
                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }, 100)
    }

    const handleGetStarted = () => {
        const authenticated = localStorage.getItem('userAuthenticated') === 'true'
        if (!authenticated) {
            setShowAuthPopup(true)
        } else {
            if (uploadRef.current) {
                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof pageId="image-upscaler" />
                        <h1 className={styles.title}><span className={styles.violetText}>{t.imageUpscalerPage.hero.titleHighlight}</span> {t.imageUpscalerPage.hero.title}</h1>
                        <p className={styles.description}>{t.imageUpscalerPage.hero.description}</p>
                        <CategoryTabs />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} isAuthenticated={isAuthenticated} onAuthRequired={() => setShowAuthPopup(true)} />
                            {processedImage && originalPreview && (
                                <>
                                    <ResultDisplay originalImage={originalPreview} processedImage={processedImage} onDownload={handleDownload} onGenerateNew={handleGenerateNew} />
                                    <RelatedTools />
                                </>
                            )}
                        </div>
                        <div className={styles.ratingsBelow}><RatingBadges /></div>
                    </section>

                    <ExamplesSection />

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.imageUpscalerPage.features.badge}</span>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images/feature-upscale-woman.jpg" alt="Image Upscaler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.imageUpscalerPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.imageUpscalerPage.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.imageUpscalerPage.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images/feature-upscale-cat-new.png" alt="Image Upscaler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.imageUpscalerPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.imageUpscalerPage.features.feature2.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.imageUpscalerPage.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images/feature-upscale-boat.png" alt="Image Upscaler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.imageUpscalerPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>{t.imageUpscalerPage.features.feature3.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.imageUpscalerPage.features.feature3.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.imageUpscalerPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>{t.imageUpscalerPage.howItWorks.title}</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div><h3 className={styles.stepTitle}>{t.imageUpscalerPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>{t.imageUpscalerPage.howItWorks.step1.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div><h3 className={styles.stepTitle}>{t.imageUpscalerPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>{t.imageUpscalerPage.howItWorks.step2.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div><h3 className={styles.stepTitle}>{t.imageUpscalerPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>{t.imageUpscalerPage.howItWorks.step3.description}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials pageId="image-upscaler" onCtaClick={() => { if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} />
                    <FAQ items={imageUpscalerFaqItems} />
                    <ToolsGrid customImages={{ 'tool1': '/images/tools/tool-card-upscaler-page.png', 'tool2': '/images/tools/video-watermark-7.png', 'tool3': '/images/tools/remove-text-lime.jpg', 'tool4': '/images/tools/tool-card-remove-object-upscaler-page.png', 'tool5': '/images/tools/tool-card-replace-bg-upscaler-page.png', 'tool6': '/images/tools/tool-card-remove-bg-upscaler-page.png', 'tool7': '/images/tools/people-remover-colosseum.jpg', 'tool8': '/images/tools/upscaler-fox.jpg', 'tool9': '/images/tools/sora-remover-8.png' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
