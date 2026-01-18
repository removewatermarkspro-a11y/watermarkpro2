'use client'

import { useState, useRef } from 'react'
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
import { commonFaqItemsPt } from '@/utils/commonFaqItemsPt'
import AuthPopup from '@/components/AuthPopup'
import ResultDisplay from '@/components/ResultDisplay'
import RelatedTools from '@/components/RelatedTools'
import { useAuth } from '@/contexts/AuthContext'
import { translations } from '@/locales/translations'
import styles from '@/app/watermark-remover/watermark.module.css'

export default function WatermarkRemoverClientPt() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()

    // Force Portuguese language
    const t = translations.pt

    const handleImageUpload = (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)
        setProcessedImage(preview)
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
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
        if (!user) {
            // User not authenticated - show auth popup
            setShowAuthPopup(true)
        } else {
            // User authenticated - scroll to upload section
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
                        <SocialProof pageId="home" />

                        <h1 className={styles.title}>
                            {t.hero.titleMain} <span className={styles.violetText}>{t.hero.titleHighlight}</span>

                        </h1>

                        <p className={styles.description}>
                            {t.hero.description}
                        </p>

                        <CategoryTabs />

                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                isAuthenticated={!!user}
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

                    <ExamplesSection />

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.features.badge}</span>
                        </div>

                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images-optimized/free-watermark-remover-feature.webp"
                                        alt="Remover Marca D'água Antes e Depois"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {t.features.feature1.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images-optimized/remove-tiktok-watermark-ai.webp"
                                        alt="Remover Marca D'água TikTok Antes e Depois"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.features.feature2.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {t.features.feature2.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images-optimized/ai-watermark-removal-tool.webp"
                                        alt="Solução Completa para Remover Marcas D'água"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>{t.features.feature3.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>
                                        {t.features.feature3.button}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>{t.howItWorks.title}</h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <h3 className={styles.stepTitle}>{t.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>{t.howItWorks.step1.description}</p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <h3 className={styles.stepTitle}>{t.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>{t.howItWorks.step2.description}</p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <h3 className={styles.stepTitle}>{t.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>{t.howItWorks.step3.description}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials
                        pageId="home"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }}
                    />
                    <FAQ items={commonFaqItemsPt} />
                    <ToolsGrid
                        customImages={{
                            'tool1': '/images-optimized/free-watermark-remover-tool.webp',
                            'tool2': '/images-optimized/video-watermark-remover-home.webp',
                            'tool3': '/images-optimized/text-remover-green-card.webp',
                            'tool4': '/images-optimized/object-remover-home-tool.webp',
                            'tool5': '/images-optimized/replace-background-home-tool.webp',
                            'tool6': '/images-optimized/background-remover-home-tool.webp',
                            'tool7': '/images-optimized/people-remover-street-man-card.webp',
                            'tool8': '/images-optimized/image-upscaler-panda-card.webp',
                            'tool9': '/images-optimized/free-sora-watermark-remover-1.webp'
                        }}
                    />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
        </>
    )
}
