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
import ProcessingPopup from '@/components/ProcessingPopup'
import { imageUpscalerFaqItems } from '@/utils/faqItems'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useImageEdit } from '@/hooks/useImageEdit'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

export default function ImageUpscalerClient() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user, getAccessToken } = useAuth()
    const { language } = useLanguage()
    const { editImage, isLoading, error, editedImageUrl, reset } = useImageEdit({
        operationType: 'image-upscaler',
        getAccessToken
    })
    // Force English language
    const t = (translations as any).en

    const handleImageUpload = async (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)

        try {
            await editImage({ imageFile: file })
        } catch (err) {
            console.error('Error upscaling image:', err)
        }
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
    }

    const handleDownload = () => {
        if (!editedImageUrl) return
        const link = document.createElement('a')
        link.href = editedImageUrl
        link.download = 'upscaled-image.png'
        link.click()
    }

    const handleGenerateNew = () => {
        setUploadedImage(null)
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
                        <SocialProof pageId="image-upscaler" />
                        <h1 className={styles.title}><span className={styles.violetText}>{t.imageUpscalerPage.hero.titleHighlight}</span> {t.imageUpscalerPage.hero.title}</h1>
                        <p className={styles.description}>{t.imageUpscalerPage.hero.description}</p>
                        <CategoryTabs />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                isAuthenticated={!!user}
                                onAuthRequired={() => setShowAuthPopup(true)}
                                noCreditsImage="/images-optimized/upscale-portrait-photo-ai.webp"
                            />
                            {editedImageUrl && originalPreview && (
                                <>
                                    <ResultDisplay originalImage={originalPreview} processedImage={editedImageUrl} onDownload={handleDownload} onGenerateNew={handleGenerateNew} />
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
                                    <img src="/images-optimized/upscale-portrait-photo-ai.webp" alt="Image Upscaler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.imageUpscalerPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.imageUpscalerPage.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.imageUpscalerPage.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/enhance-cat-image-quality.webp" alt="Image Upscaler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.imageUpscalerPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.imageUpscalerPage.features.feature2.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.imageUpscalerPage.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/photo-upscaler-boat-example.webp" alt="Image Upscaler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
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
                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/ai-image-upscaler-tool.webp', 'tool2': '/images-optimized/video-watermark-remover-7.webp', 'tool3': '/images-optimized/text-remover-lime-card.webp', 'tool4': '/images-optimized/remove-object-upscaler-tool.webp', 'tool5': '/images-optimized/replace-background-upscaler-tool.webp', 'tool6': '/images-optimized/remove-background-upscaler-tool.webp', 'tool7': '/images-optimized/people-remover-colosseum-card.webp', 'tool8': '/images-optimized/image-upscaler-fox-card.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-8.webp' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <ProcessingPopup isOpen={isLoading} />
        </>
    )
}
