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
import ProcessingPopup from '@/components/ProcessingPopup'
import { soraRemoverFaqItems } from '@/utils/soraRemoverFaqItems'
import { soraRemoverFaqItemsFr } from '@/utils/soraRemoverFaqItemsFr'
import { soraRemoverFaqItemsEs } from '@/utils/soraRemoverFaqItemsEs'
import { soraRemoverFaqItemsDe } from '@/utils/soraRemoverFaqItemsDe'
import { soraRemoverFaqItemsPt } from '@/utils/soraRemoverFaqItemsPt'
import { soraRemoverFaqItemsKo } from '@/utils/soraRemoverFaqItemsKo'
import { soraRemoverFaqItemsNo } from '@/utils/soraRemoverFaqItemsNo'
import { soraRemoverTestimonialDataFr } from '@/utils/soraRemoverTestimonialData'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useSoraWatermarkRemoval } from '@/hooks/useSoraWatermarkRemoval'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

// Declare YouTube types
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export default function SoraWatermarkRemoverClient() {
    const [uploadedVideo, setUploadedVideo] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<any>(null)
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const soraVideoRef = useRef<HTMLVideoElement>(null)
    const { language } = useLanguage()
    const { user, credits } = useAuth()
    const { removeWatermark, isLoading, error, cleanedVideoUrl, reset } = useSoraWatermarkRemoval(user?.id)
    const t = (translations as any)[language] || translations.en

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
                description: "Our advanced AI provides a specialized free Sora remover designed to remove Sora watermark from AI-generated videos with pinpoint precision. The system intelligently analyzes each frame to detect and erase OpenAI Sora logos, text overlays, and branding elements while maintaining pristine video quality. Perfect for content creators, filmmakers, and marketers using Sora AI video generator who need clean, watermark-free footage for professional projects, YouTube content, or social media campaigns. Experience seamless watermark removal that preserves your video's original clarity and cinematic quality.",
                button: "Get Started"
            },
            feature2: {
                title: "Fast AI-Powered Sora Logo Removal for Professional Quality",
                description: "Experience lightning-fast Sora watermark removal with our optimized engine built for AI-generated video cleanup. In seconds, you can remove Sora branding, erase OpenAI watermarks, and polish your Sora AI videos across MP4, MOV, AVI, and WebM formats. Our intelligent processing handles 4K, HD, and even 8K footage seamlessly. Ideal for professional filmmakers, YouTubers, and content creators who need to remove watermark from Sora video quickly while maintaining broadcast-quality results. The automated workflow delivers top-tier quality that rivals manual editing.",
                button: "Get Started"
            },
            feature3: {
                title: "Complete Sora Video Watermark Remover – Professional AI Solution",
                description: "Our comprehensive Sora remover tool handles all OpenAI Sora watermark variants with professional accuracy. Whether your videos feature corner branding, centered logos, animated watermarks, or text overlays from the Sora AI platform, you can instantly remove Sora watermark and achieve broadcast-ready footage. Compatible with all video formats generated by OpenAI Sora, our system ensures flawless watermark removal while preserving smooth motion, natural lighting, and color balance. Perfect for transforming AI-generated sequences into polished, professional-grade visuals ready for any platform.",
                button: "Get Started"
            }
        },
        howItWorks: {
            badge: "HOW IT WORKS",
            title: "Remove Sora Watermarks in 3 Simple Steps",
            step1: {
                title: "Upload your Sora AI video",
                description: "Start by uploading your Sora-generated video directly from your device or by dragging it into our interface. Our platform supports all standard video formats including MP4, MOV, AVI, WebM, and MKV produced by OpenAI Sora. Whether your video contains corner watermarks, logos, text overlays, or timestamps, our intelligent system instantly recognizes the format and prepares your footage for AI-powered watermark removal. The upload process is fast, secure, and handles files up to 4K and 8K resolution with ease."
            },
            step2: {
                title: "AI removes Sora watermark automatically",
                description: "Once uploaded, our specialized Sora watermark remover employs advanced AI algorithms to analyze every frame with surgical precision. The system intelligently detects and erases all OpenAI Sora branding elements including logos, text, watermarks, and overlays while reconstructing backgrounds seamlessly. Our AI maintains smooth motion flow, preserves original lighting, and ensures color consistency across the timeline. The fully automated process delivers clean, professional results in seconds without requiring manual editing skills or complex software knowledge."
            },
            step3: {
                title: "Download your watermark-free Sora video",
                description: "In moments, your pristine, watermark-free Sora AI video is ready for download in full original quality with no compression loss. Download your clean footage ready to use for YouTube uploads, Instagram Reels, TikTok, professional portfolios, client presentations, or commercial campaigns. With our fast, reliable Sora remover technology, creating stunning, brand-free AI videos has never been easier. Experience the freedom of perfectly clean, cinema-quality footage ready to impress your audience without any distracting watermarks."
            }
        }
    }

    // Select FAQ items based on language
    const faqItems = language === 'fr' ? soraRemoverFaqItemsFr : language === 'es' ? soraRemoverFaqItemsEs : language === 'de' ? soraRemoverFaqItemsDe : language === 'pt' ? soraRemoverFaqItemsPt : language === 'ko' ? soraRemoverFaqItemsKo : language === 'no' ? soraRemoverFaqItemsNo : soraRemoverFaqItems

    const handleVideoUpload = async (file: File, preview: string) => {
        if (!user) {
            setShowAuthPopup(true)
            return
        }

        setUploadedVideo(file)
        setOriginalPreview(preview)

        try {
            // Pass the actual file to the API
            await removeWatermark(file)
        } catch (err) {
            console.error('Error removing Sora watermark:', err)
        }
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
    }

    const handleDownload = () => {
        if (!cleanedVideoUrl) return
        const link = document.createElement('a')
        link.href = cleanedVideoUrl
        link.download = 'sora-cleaned-video.mp4'
        link.click()
    }

    const handleGenerateNew = () => {
        setUploadedVideo(null)
        setOriginalPreview(null)
        reset()
        setTimeout(() => {
            if (uploadRef.current) {
                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }, 100)
    }

    const handleGetStarted = () => {
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
                        <SocialProof pageId="free-sora-remover" />

                        <h1 className={styles.title}>
                            <span className={styles.violetText}>{soraPage.hero.titleHighlight || 'Free'}</span> {soraPage.hero.title || 'sora watermark remover'}
                        </h1>

                        <p className={styles.description}>
                            {soraPage.hero.description}
                        </p>

                        <CategoryTabs />

                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleVideoUpload}
                                uploadText={soraPage.uploader.uploadText}
                                formatText={soraPage.uploader.formatText}
                                processingText={soraPage.uploader.processingText || "Processing your video..."}
                                acceptedFormats="video/mp4,video/quicktime,video/x-msvideo,video/avi"
                                isAuthenticated={!!user}
                                onAuthRequired={() => setShowAuthPopup(true)}
                                noCreditsImage="/images-optimized/openai-sora-watermark-remover.webp"
                            />

                            {cleanedVideoUrl && originalPreview && (
                                <div className={styles.videoResults}>
                                    <h3>Your watermark-free video is ready!</h3>
                                    <div className={styles.videoComparison}>
                                        <div className={styles.videoBox}>
                                            <h4>Original</h4>
                                            <video src={originalPreview} controls />
                                        </div>
                                        <div className={styles.videoBox}>
                                            <h4>Cleaned</h4>
                                            <video src={cleanedVideoUrl} controls />
                                        </div>
                                    </div>
                                    <div className={styles.resultActions}>
                                        <button onClick={handleDownload} className="btn btn-primary">Download Cleaned Video</button>
                                        <button onClick={handleGenerateNew} className="btn btn-secondary">Process Another Video</button>
                                    </div>
                                </div>
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
                                    <img src="/images-optimized/openai-sora-watermark-remover.webp" alt="Remove Sora Watermark" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} loading="lazy" decoding="async" />
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
            <ProcessingPopup isOpen={isLoading} processingText="Processing your video..." />
        </>
    )
}
