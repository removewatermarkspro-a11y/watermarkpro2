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
import { replaceBackgroundFaqItems } from '@/utils/faqItems'
import { replaceBackgroundFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { replaceBackgroundFaqItemsDe } from '@/utils/commonFaqItemsDe'
import { replaceBackgroundFaqItemsEs } from '@/utils/replaceBackgroundFaqItemsEs'
import { replaceBackgroundFaqItemsPt } from '@/utils/replaceBackgroundFaqItemsPt'
import { replaceBackgroundFaqItemsKo } from '@/utils/replaceBackgroundFaqItemsKo'
import { backgroundReplacementFaqItemsNo } from '@/utils/backgroundReplacementFaqItemsNo'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

export default function ReplaceBackground() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

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
                        <SocialProof pageId="replace-background" />
                        <h1 className={styles.title}><span className={styles.violetText}>{t.replaceBackgroundPage.hero.titleHighlight}</span> {t.replaceBackgroundPage.hero.title}</h1>
                        <p className={styles.description}>{t.replaceBackgroundPage.hero.description}</p>
                        <CategoryTabs />
                        <PromptInput placeholder={t.replaceBackgroundPage.hero.promptPlaceholder} />
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
                            <span className={styles.badge}>{t.replaceBackgroundPage.features.badge}</span>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-replace-background-2.png"
                                        alt="Replace Background - Basketball Shoes"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.replaceBackgroundPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.replaceBackgroundPage.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.replaceBackgroundPage.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-replace-background-new-2.jpg"
                                        alt="Replace Background - Beach to Volcano"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.replaceBackgroundPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.replaceBackgroundPage.features.feature2.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.replaceBackgroundPage.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-replace-background-3.jpg"
                                        alt="Replace Background - Building Reconstruction"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.replaceBackgroundPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>{t.replaceBackgroundPage.features.feature3.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.replaceBackgroundPage.features.feature3.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.replaceBackgroundPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>{t.replaceBackgroundPage.howItWorks.title}</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>{t.replaceBackgroundPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>{t.replaceBackgroundPage.howItWorks.step1.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>{t.replaceBackgroundPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>{t.replaceBackgroundPage.howItWorks.step2.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>{t.replaceBackgroundPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>{t.replaceBackgroundPage.howItWorks.step3.description}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials
                        pageId="replace-background"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }} />
                    <FAQ items={
                        language === 'fr' ? replaceBackgroundFaqItemsFr :
                            language === 'de' ? replaceBackgroundFaqItemsDe :
                                language === 'es' ? replaceBackgroundFaqItemsEs :
                                    language === 'pt' ? replaceBackgroundFaqItemsPt :
                                        language === 'ko' ? replaceBackgroundFaqItemsKo :
                                            language === 'no' ? backgroundReplacementFaqItemsNo :
                                                replaceBackgroundFaqItems
                    } />

                    <ToolsGrid customImages={{ 'tool1': '/images/tools/tool-card-replace-bg-page.png', 'tool2': '/images/tools/video-watermark-5.png', 'tool3': '/images/tools/remove-text-beige.jpg', 'tool4': '/images/tools/tool-card-remove-object-replace-page.png', 'tool5': '/images/tools/tool-card-replace-bg-replace-page.png', 'tool6': '/images/tools/tool-card-remove-bg-replace-page.png', 'tool7': '/images/tools/people-remover-field-man.jpg', 'tool8': '/images/tools/upscaler-lion.jpg' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
