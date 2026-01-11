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
import { commonFaqItems } from '@/utils/faqItems'
import { commonFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { videoWatermarkFaqItemsDe } from '@/utils/commonFaqItemsDe'
import { commonFaqItemsEs } from '@/utils/commonFaqItemsEs'
import { videoWatermarkFaqItemsPt } from '@/utils/videoWatermarkFaqItemsPt'
import { videoWatermarkFaqItemsKo } from '@/utils/videoWatermarkFaqItemsKo'
import { videoWatermarkFaqItemsNo } from '@/utils/videoWatermarkFaqItemsNo'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

// Declare YouTube types
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export default function VideoWatermarkRemoverClient() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<any>(null)
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const { language } = useLanguage()
    const { user, credits } = useAuth()
    const t = (translations as any)[language] || translations.en

    const handleImageUpload = (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)
        setProcessedImage(preview) // Simulated processed image
        const isAuthenticated = localStorage.getItem('userAuthenticated')
        if (!isAuthenticated) {
            setShowAuthPopup(true)
        }
    }

    const handleProcess = async () => {
        if (!uploadedImage) return

        // Use credits from AuthContext (Supabase) instead of localStorage
        if (!credits || credits < 1) {
            setShowPromoPopup(true)
            return
        }

        setIsProcessing(true)
        setTimeout(() => {
            const reader = new FileReader()
            reader.onload = (e) => {
                setProcessedImage(e.target?.result as string)
                setIsProcessing(false)

                const newCredits = credits - 1
                localStorage.setItem('userCredits', newCredits.toString())
            }
            reader.readAsDataURL(uploadedImage)
        }, 2000)
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
        localStorage.setItem('userAuthenticated', 'true')
        localStorage.setItem('userCredits', '1')
    }

    const handleDownload = () => {
        if (!processedImage) return
        const link = document.createElement('a')
        link.href = processedImage
        link.download = 'processed-video.mp4'
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
        // Use user from AuthContext instead of localStorage
        if (!user) {
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
                        <SocialProof pageId="remove-watermark-video" />

                        <h1 className={styles.title}>
                            <span className={styles.violetText}>{t.videoWatermarkPage.hero.titleHighlight}</span> {t.videoWatermarkPage.hero.title}
                        </h1>

                        <p className={styles.description}>
                            {t.videoWatermarkPage.hero.description}
                        </p>

                        <CategoryTabs />

                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                uploadText={t.videoWatermarkPage.uploader.uploadText}
                                formatText={t.videoWatermarkPage.uploader.formatText}
                                processingText={t.videoWatermarkPage.uploader.processingText || "Processing your video..."}
                                acceptedFormats="video/mp4,video/quicktime,video/x-msvideo,video/avi"
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

                        <div className={styles.ratingsBelow}>
                            <RatingBadges />
                        </div>
                    </section>

                    {/* Examples Section */}
                    <ExamplesSection />

                    {/* Powerful Features Section */}
                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.videoWatermarkPage.features.badge}</span>
                        </div>

                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '12px',
                                            display: 'block'
                                        }}
                                    >
                                        <source src="/videos/watermark-removal-demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.videoWatermarkPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>
                                        {t.videoWatermarkPage.features.feature1.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {t.videoWatermarkPage.features.feature1.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    <img src="/images-optimized/remove-tiktok-watermark-video.webp" alt="Remove TikTok Watermark" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.videoWatermarkPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>
                                        {t.videoWatermarkPage.features.feature2.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {t.videoWatermarkPage.features.feature2.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    <img src="/images-optimized/video-watermark-removal-example.webp" alt="Video Watermark Removal" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.videoWatermarkPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>
                                        {t.videoWatermarkPage.features.feature3.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {t.videoWatermarkPage.features.feature3.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.videoWatermarkPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>
                                {t.videoWatermarkPage.howItWorks.title}
                            </h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>{t.videoWatermarkPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>
                                    {t.videoWatermarkPage.howItWorks.step1.description}
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>{t.videoWatermarkPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>
                                    {t.videoWatermarkPage.howItWorks.step2.description}
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>{t.videoWatermarkPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>
                                    {t.videoWatermarkPage.howItWorks.step3.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <Pricing />

                    {/* Testimonials Section */}
                    <Testimonials
                        pageId="remove-watermark-video"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }} />

                    {/* FAQ Section */}
                    <FAQ items={
                        language === 'fr' ? commonFaqItemsFr :
                            language === 'de' ? videoWatermarkFaqItemsDe :
                                language === 'es' ? commonFaqItemsEs :
                                    language === 'pt' ? videoWatermarkFaqItemsPt :
                                        language === 'ko' ? videoWatermarkFaqItemsKo :
                                            language === 'no' ? videoWatermarkFaqItemsNo :
                                                commonFaqItems
                    } />
                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/video-watermark-remover-tool.webp', 'tool2': '/images-optimized/video-watermark-remover-8.webp', 'tool3': '/images-optimized/text-remover-dark-blue-card.webp', 'tool4': '/images-optimized/remove-object-video-tool.webp', 'tool5': '/images-optimized/replace-background-video-tool.webp', 'tool6': '/images-optimized/remove-background-video-tool.webp', 'tool7': '/images-optimized/people-remover-street-woman-card.webp', 'tool8': '/images-optimized/image-upscaler-panther-card.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-2.webp' }} />
                </div>
            </main>
            <Footer />

            {/* Popups */}
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
