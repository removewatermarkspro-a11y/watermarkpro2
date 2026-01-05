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
import AuthPopup from '@/components/AuthPopup'
import ResultDisplay from '@/components/ResultDisplay'
import RelatedTools from '@/components/RelatedTools'
import { commonFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { useAuth } from '@/contexts/AuthContext'
import { translations } from '@/locales/translations'
import styles from '@/app/watermark-remover/watermark.module.css'

export default function VideoWatermarkRemoverClientFr() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()

    // Force French language
    const t = (translations as any).fr

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
                            {t.videoWatermarkPage.hero.title} <span className={styles.violetText}>{t.videoWatermarkPage.hero.titleHighlight}</span>
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
                                processingText={t.videoWatermarkPage.uploader.processingText || "Traitement de votre vidéo..."}
                                acceptedFormats="video/mp4,video/quicktime,video/x-msvideo,video/avi"
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
                                        Votre navigateur ne supporte pas la balise vidéo.
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
                                    <img src="/images/features/video-page-tiktok-girls.png" alt="Supprimer Filigrane TikTok" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
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
                                    <img src="/images/features/video-page-red-panda.png" alt="Suppression Filigrane Vidéo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
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

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.videoWatermarkPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>
                                {t.videoWatermarkPage.howItWorks.title}
                            </h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <h3 className={styles.stepTitle}>{t.videoWatermarkPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>
                                    {t.videoWatermarkPage.howItWorks.step1.description}
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <h3 className={styles.stepTitle}>{t.videoWatermarkPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>
                                    {t.videoWatermarkPage.howItWorks.step2.description}
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <h3 className={styles.stepTitle}>{t.videoWatermarkPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>
                                    {t.videoWatermarkPage.howItWorks.step3.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials
                        pageId="remove-watermark-video"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }}
                    />
                    <FAQ items={commonFaqItemsFr} />
                    <ToolsGrid
                        customImages={{
                            'tool1': '/images/tools/tool-card-video-page.png',
                            'tool2': '/images/tools/video-watermark-8.png',
                            'tool3': '/images/tools/remove-text-dark-blue.jpg',
                            'tool4': '/images/tools/tool-card-remove-object-video.png',
                            'tool5': '/images/tools/tool-card-replace-bg-video.png',
                            'tool6': '/images/tools/tool-card-remove-bg-video.png',
                            'tool7': '/images/tools/people-remover-street-woman.jpg',
                            'tool8': '/images/tools/upscaler-panther.jpg',
                            'tool9': '/images/tools/sora-remover-2.png'
                        }}
                    />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
        </>
    )
}
