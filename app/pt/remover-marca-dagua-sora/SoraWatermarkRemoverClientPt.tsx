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
import { soraRemoverFaqItems } from '@/utils/soraRemoverFaqItems'
import { soraRemoverFaqItemsFr } from '@/utils/soraRemoverFaqItemsFr'
import { soraRemoverFaqItemsEs } from '@/utils/soraRemoverFaqItemsEs'
import { soraRemoverFaqItemsDe } from '@/utils/soraRemoverFaqItemsDe'
import { soraRemoverFaqItemsPt } from '@/utils/soraRemoverFaqItemsPt'
import { soraRemoverFaqItemsKo } from '@/utils/soraRemoverFaqItemsKo'
import { soraRemoverFaqItemsNo } from '@/utils/soraRemoverFaqItemsNo'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from '../../watermark-remover/watermark.module.css'

// Declare YouTube types
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export default function SoraWatermarkRemoverClientPt() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()
    const playerRef = useRef<any>(null)
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const soraVideoRef = useRef<HTMLVideoElement>(null)
    const { language } = useLanguage()
    // Force Portuguese language
    const t = (translations as any).pt

    // Set video playback speed to 75% for smoother viewing
    useEffect(() => {
        if (soraVideoRef.current) {
            soraVideoRef.current.playbackRate = 0.75
        }
    }, [])
    // Fallback to English for soraRemoverPage if not available in current language
    const soraPage = t?.soraRemoverPage || {
        hero: {
            title: "sora watermark remover",
            titleHighlight: "Free",
            description: "Remove Sora AI watermarks from videos instantly with AI. Remove OpenAI Sora branding, logos, and watermarks from AI-generated videos in seconds."
        },
        uploader: { uploadText: "Drag your Sora video here", formatText: "MP4, MOV, AVI up to 100MB" },
        features: {
            badge: "POWERFUL FEATURES",
            feature1: {
                title: "Free Sora Watermark Remover – Remove OpenAI Sora Branding Instantly",
                description: "Our advanced AI provides a specialized free Sora remover designed to remove Sora watermark from AI-generated videos with pinpoint precision.",
                button: "Get Started"
            },
            feature2: {
                title: "Fast AI-Powered Sora Logo Removal for Professional Quality",
                description: "Experience lightning-fast Sora watermark removal with our optimized engine built for AI-generated video cleanup.",
                button: "Get Started"
            },
            feature3: {
                title: "Complete Sora Video Watermark Remover – Professional AI Solution",
                description: "Our comprehensive Sora remover tool handles all OpenAI Sora watermark variants with professional accuracy.",
                button: "Get Started"
            }
        },
        howItWorks: {
            badge: "HOW IT WORKS",
            title: "Remove Sora Watermarks in 3 Simple Steps",
            step1: {
                title: "Upload your Sora AI video",
                description: "Start by uploading your Sora-generated video directly from your device."
            },
            step2: {
                title: "AI removes Sora watermark automatically",
                description: "Our specialized Sora watermark remover employs advanced AI algorithms to analyze every frame."
            },
            step3: {
                title: "Download your watermark-free Sora video",
                description: "In moments, your pristine, watermark-free Sora AI video is ready for download."
            }
        }
    }

    // Select FAQ items based on language
    const faqItems = language === 'pt' ? soraRemoverFaqItemsPt : language === 'fr' ? soraRemoverFaqItemsFr : language === 'es' ? soraRemoverFaqItemsEs : language === 'de' ? soraRemoverFaqItemsDe : language === 'ko' ? soraRemoverFaqItemsKo : language === 'no' ? soraRemoverFaqItemsNo : soraRemoverFaqItems

    const handleImageUpload = (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)
        setProcessedImage(preview) // Simulated processed image
        const isAuthenticated = user
        if (!isAuthenticated) {
            setShowAuthPopup(true)
        }
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
        const authenticated = !!user
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
                        <SocialProof pageId="free-sora-remover" />

                        <h1 className={styles.title}>
                            {soraPage.hero.title || 'sora watermark remover'} <span className={styles.violetText}>{soraPage.hero.titleHighlight || 'Free'}</span>

                        </h1>

                        <p className={styles.description}>
                            {soraPage.hero.description}
                        </p>

                        <CategoryTabs />

                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                uploadText={soraPage.uploader.uploadText}
                                formatText={soraPage.uploader.formatText}
                                processingText={soraPage.uploader.processingText || "Processing your video..."}
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
                            <span className={styles.badge}>{soraPage.features.badge}</span>
                        </div>

                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    <video
                                        ref={soraVideoRef}
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
                                        <source src="/videos/video sora remover.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{soraPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>
                                        {soraPage.features.feature1.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {soraPage.features.feature1.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    <img src="/images-optimized/sora-watermark-removal-ai.webp" alt="Remove Sora Watermark" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{soraPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>
                                        {soraPage.features.feature2.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {soraPage.features.feature2.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    <img src="/images-optimized/sora-ai-watermark-remover-man.webp" alt="Sora Video Watermark Removal" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{soraPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>
                                        {soraPage.features.feature3.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {soraPage.features.feature3.button}
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
                            <span className={styles.badge}>{soraPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>
                                {soraPage.howItWorks.title}
                            </h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>{soraPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>
                                    {soraPage.howItWorks.step1.description}
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>{soraPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>
                                    {soraPage.howItWorks.step2.description}
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>{soraPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>
                                    {soraPage.howItWorks.step3.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <Pricing />

                    {/* Testimonials Section */}
                    <Testimonials
                        pageId="free-sora-remover"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }} />

                    {/* FAQ Section */}
                    <FAQ items={faqItems} />
                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/sora-watermark-remover-tool-1.webp', 'tool2': '/images-optimized/sora-watermark-remover-tool-2.webp', 'tool3': '/images-optimized/sora-watermark-remover-tool-3.webp', 'tool4': '/images-optimized/sora-watermark-remover-tool-4.webp', 'tool5': '/images-optimized/sora-watermark-remover-tool-5.webp', 'tool6': '/images-optimized/sora-watermark-remover-tool-6.webp', 'tool7': '/images-optimized/sora-watermark-remover-tool-7.webp', 'tool8': '/images-optimized/sora-watermark-remover-tool-8.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-9.webp' }} />
                </div>
            </main>
            <Footer />

            {/* Popups */}
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
