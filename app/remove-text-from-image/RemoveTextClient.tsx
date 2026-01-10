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
import { textRemovalFaqItems } from '@/utils/textRemovalFaqItems'
import { textRemovalFaqItemsFr } from '@/utils/textRemovalFaqItemsFr'
import { textRemovalFaqItemsDe } from '@/utils/textRemovalFaqItemsDe'
import { textRemovalFaqItemsEs } from '@/utils/textRemovalFaqItemsEs'
import { textRemovalFaqItemsPt } from '@/utils/textRemovalFaqItemsPt'
import { textRemovalFaqItemsKo } from '@/utils/textRemovalFaqItemsKo'
import AuthPopup from '@/components/AuthPopup'
import ResultDisplay from '@/components/ResultDisplay'
import RelatedTools from '@/components/RelatedTools'
import ProcessingPopup from '@/components/ProcessingPopup'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useImageEdit } from '@/hooks/useImageEdit'
import { translations } from '@/locales/translations'
import styles from '@/app/watermark-remover/watermark.module.css'

export default function RemoveTextClient() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()
    const { language } = useLanguage()
    const { editImage, isLoading, error, editedImageUrl, reset } = useImageEdit({
        operationType: 'remove-text',
        userId: user?.id
    })

    // Use current language from context
    const t = (translations as any)[language] || translations.en

    // Get FAQ items based on current language
    const getFaqItems = () => {
        switch (language) {
            case 'fr': return textRemovalFaqItemsFr
            case 'de': return textRemovalFaqItemsDe
            case 'es': return textRemovalFaqItemsEs
            case 'pt': return textRemovalFaqItemsPt
            case 'ko': return textRemovalFaqItemsKo
            default: return textRemovalFaqItems
        }
    }

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
                        <SocialProof pageId="text-removal" />

                        <h1 className={styles.title}>
                            <span className={styles.violetText}>{t.textRemoval?.hero?.titleHighlight || 'Free'}</span> {t.textRemoval?.hero?.titleMain || 'Text Remover from Image'}
                        </h1>

                        <p className={styles.description}>
                            {t.textRemoval?.hero?.description || 'Remove text, captions, and subtitles from images instantly with AI. Clean photos by erasing unwanted text overlays in seconds.'}
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

                        <div className={styles.ratingsBelow}>
                            <RatingBadges />
                        </div>
                    </section>

                    <ExamplesSection />

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.howItWorks?.badge || 'How It Works'}</span>
                            <h2 className={styles.sectionTitle}>{t.howItWorks?.title || 'Remove Text in 3 Simple Steps'}</h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <h3 className={styles.stepTitle}>{t.howItWorks?.step1?.title || 'Upload Image'}</h3>
                                <p className={styles.stepText}>{t.howItWorks?.step1?.description || 'Upload your image with text you want to remove'}</p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <h3 className={styles.stepTitle}>{t.howItWorks?.step2?.title || 'AI Processing'}</h3>
                                <p className={styles.stepText}>{t.howItWorks?.step2?.description || 'Our AI automatically detects and removes text'}</p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <h3 className={styles.stepTitle}>{t.howItWorks?.step3?.title || 'Download'}</h3>
                                <p className={styles.stepText}>{t.howItWorks?.step3?.description || 'Download your clean image without text'}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials
                        pageId="text-removal"
                        onCtaClick={() => {
                            if (uploadRef.current) {
                                uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }
                        }}
                    />
                    <FAQ items={getFaqItems()} />
                    <ToolsGrid />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <ProcessingPopup isOpen={isLoading} />
        </>
    )
}
