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
import { textRemovalFaqItems } from '@/utils/faqItems'
import { textRemovalFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { removeTextFaqItemsDe } from '@/utils/commonFaqItemsDe'
import { textRemovalFaqItemsEs } from '@/utils/textRemovalFaqItemsEs'
import { textRemovalFaqItemsPt } from '@/utils/textRemovalFaqItemsPt'
import { textRemovalFaqItemsKo } from '@/utils/textRemovalFaqItemsKo'
import { textRemovalFaqItemsNo } from '@/utils/textRemovalFaqItemsNo'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useImageEdit } from '@/hooks/useImageEdit'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

export default function TextRemoverClient() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user, getAccessToken } = useAuth()
    const { language } = useLanguage()
    const { editImage, isLoading, error, editedImageUrl, reset } = useImageEdit({
        operationType: 'remove-text',
        getAccessToken
    })
    // Force English language
    const t = (translations as any).en

    const handleImageUpload = async (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)

        // Call Qwen API to remove text
        try {
            await editImage({ imageFile: file })
        } catch (err) {
            console.error('Error removing text:', err)
        }
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
    }

    const handleDownload = () => {
        if (!editedImageUrl) return
        const link = document.createElement('a')
        link.href = editedImageUrl
        link.download = 'text-removed-image.png'
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
                        <SocialProof pageId="remove-text" />
                        <h1 className={styles.title}>
                            <span className={styles.violetText}>{t.removeTextPage.hero.titleHighlight}</span> {t.removeTextPage.hero.title}
                        </h1>
                        <p className={styles.description}>
                            {t.removeTextPage.hero.description}
                        </p>
                        <CategoryTabs />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                isAuthenticated={!!user}
                                onAuthRequired={() => setShowAuthPopup(true)}
                            />

                            {editedImageUrl && originalPreview && (
                                <>
                                    <ResultDisplay
                                        originalImage={originalPreview}
                                        processedImage={editedImageUrl}
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
                            <span className={styles.badge}>{t.removeTextPage.features.badge}</span>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/delete-text-from-photo.webp" alt="Remove text from image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.removeTextPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>
                                        {t.removeTextPage.features.feature1.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.removeTextPage.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/remove-text-from-tshirt-photo.webp" alt="Fast text removal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.removeTextPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>
                                        {t.removeTextPage.features.feature2.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.removeTextPage.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/remove-text-from-image-ai.webp" alt="Complete text removal solution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.removeTextPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>
                                        {t.removeTextPage.features.feature3.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.removeTextPage.features.feature3.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.removeTextPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>{t.removeTextPage.howItWorks.title}</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>{t.removeTextPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>{t.removeTextPage.howItWorks.step1.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>{t.removeTextPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>{t.removeTextPage.howItWorks.step2.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>{t.removeTextPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>{t.removeTextPage.howItWorks.step3.description}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials
                        pageId="remove-text"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }} />
                    <FAQ items={textRemovalFaqItems} />

                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/ai-text-remover-tool.webp', 'tool2': '/images-optimized/video-watermark-remover-3.webp', 'tool3': '/images-optimized/text-remover-light-blue-card.webp', 'tool4': '/images-optimized/remove-object-text-tool.webp', 'tool5': '/images-optimized/replace-background-text-tool.webp', 'tool6': '/images-optimized/remove-background-text-tool.webp', 'tool7': '/images-optimized/people-remover-beach-woman-card.webp', 'tool8': '/images-optimized/image-upscaler-owl-card.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-3.webp' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <ProcessingPopup isOpen={isLoading} />
        </>
    )
}
