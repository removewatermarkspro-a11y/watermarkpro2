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
import { backgroundRemovalFaqItems } from '@/utils/faqItems'
import { backgroundRemovalFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { removeBackgroundFaqItemsDe } from '@/utils/commonFaqItemsDe'
import { backgroundRemovalFaqItemsEs } from '@/utils/backgroundRemovalFaqItemsEs'
import { backgroundRemovalFaqItemsPt } from '@/utils/backgroundRemovalFaqItemsPt'
import { backgroundRemovalFaqItemsKo } from '@/utils/backgroundRemovalFaqItemsKo'
import { backgroundRemovalFaqItemsNo } from '@/utils/backgroundRemovalFaqItemsNo'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

export default function RemoveBackground() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { language } = useLanguage()
    const t = translations[language]

    useEffect(() => {
        const authenticated = localStorage.getItem('userAuthenticated') === 'true'
        setIsAuthenticated(authenticated)
    }, [])

    const handleImageUpload = (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)
        setProcessedImage(preview) // Simulated processed image
    }

    const handleProcess = async () => {
        if (!uploadedImage) return
        const credits = parseInt(localStorage.getItem('userCredits') || '0')
        if (credits === 0) {
            setShowPromoPopup(true)
            return
        }
        setIsProcessing(true)
        setTimeout(() => {
            const reader = new FileReader()
            reader.onload = (e) => {
                setProcessedImage(e.target?.result as string)
                setIsProcessing(false)
                localStorage.setItem('userCredits', (credits - 1).toString())
            }
            reader.readAsDataURL(uploadedImage)
        }, 2000)
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
                        <SocialProof pageId="remove-background" />
                        <h1 className={styles.title}><span className={styles.violetText}>{t.removeBackgroundPage.hero.titleHighlight}</span> {t.removeBackgroundPage.hero.title}</h1>
                        <p className={styles.description}>{t.removeBackgroundPage.hero.description}</p>
                        <CategoryTabs />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                isAuthenticated={isAuthenticated}
                                onAuthRequired={() => setShowAuthPopup(true)}
                            />

                            {processedImage && originalPreview && (
                                <>
                                    <ResultDisplay
                                        originalImage={originalPreview}
                                        processedImage={processedImage}
                                        onDownload={handleDownload}
                                        onGenerateNew={handleGenerateNew}
                                    />
                                    <RelatedTools />
                                </>
                            )}
                        </div>
                        <div className={styles.ratingsBelow}><RatingBadges /></div>
                    </section>

                    {/* Examples Section */}
                    <ExamplesSection />

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.removeBackgroundPage.features.badge}</span>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-remove-bg-3.png"
                                        alt="Remove Background - Camera Lens"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.removeBackgroundPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.removeBackgroundPage.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.removeBackgroundPage.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-remove-bg-1.jpg"
                                        alt="Remove Background - Woman Portrait"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.removeBackgroundPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.removeBackgroundPage.features.feature2.description}</p>
                                    <button className="btn btn-primary">{t.removeBackgroundPage.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-remove-bg-2.jpg"
                                        alt="Remove Background - Hand on Fence"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.removeBackgroundPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>{t.removeBackgroundPage.features.feature3.description}</p>
                                    <button className="btn btn-primary">{t.removeBackgroundPage.features.feature3.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.removeBackgroundPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>{t.removeBackgroundPage.howItWorks.title}</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>{t.removeBackgroundPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>{t.removeBackgroundPage.howItWorks.step1.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>{t.removeBackgroundPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>{t.removeBackgroundPage.howItWorks.step2.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>{t.removeBackgroundPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>{t.removeBackgroundPage.howItWorks.step3.description}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials
                        pageId="remove-background"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }} />
                    <FAQ items={
                        language === 'fr' ? backgroundRemovalFaqItemsFr :
                            language === 'de' ? removeBackgroundFaqItemsDe :
                                language === 'es' ? backgroundRemovalFaqItemsEs :
                                    language === 'pt' ? backgroundRemovalFaqItemsPt :
                                        language === 'ko' ? backgroundRemovalFaqItemsKo :
                                            language === 'no' ? backgroundRemovalFaqItemsNo :
                                                backgroundRemovalFaqItems
                    } />

                    <ToolsGrid customImages={{ 'tool1': '/images/tools/tool-card-remove-bg-page.png', 'tool2': '/images/tools/video-watermark-4.png', 'tool3': '/images/tools/remove-text-orange.jpg', 'tool4': '/images/tools/tool-card-remove-object-remove-bg-page.png', 'tool5': '/images/tools/tool-card-replace-bg-remove-page.png', 'tool6': '/images/tools/tool-card-remove-bg-remove-bg-page.png', 'tool7': '/images/tools/people-remover-station.jpg', 'tool8': '/images/tools/upscaler-bear.jpg' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
