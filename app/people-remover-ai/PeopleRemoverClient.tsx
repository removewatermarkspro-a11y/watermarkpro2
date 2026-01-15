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
import PromptInput from '@/components/PromptInput'
import { peopleRemovalFaqItems } from '@/utils/faqItems'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useImageEdit } from '@/hooks/useImageEdit'
import { translations } from '@/locales/translations'
import styles from '../watermark-remover/watermark.module.css'

export default function PeopleRemoverClient() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [originalPreview, setOriginalPreview] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [userPrompt, setUserPrompt] = useState<string>('')
    const uploadRef = useRef<HTMLDivElement>(null)
    const { user } = useAuth()
    const { language } = useLanguage()
    const { editImage, isLoading, error, editedImageUrl, reset } = useImageEdit({
        operationType: 'auto-remove-people',
        userId: user?.id
    })
    // Force English language
    const t = (translations as any).en

    const handleImageUpload = async (file: File, preview: string) => {
        setUploadedImage(file)
        setOriginalPreview(preview)

        try {
            await editImage({ imageFile: file, userPrompt: userPrompt || undefined })
        } catch (err) {
            console.error('Error removing people:', err)
        }
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
    }

    const handleDownload = () => {
        if (!editedImageUrl) return
        const link = document.createElement('a')
        link.href = editedImageUrl
        link.download = 'people-removed.png'
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
                        <SocialProof pageId="auto-remove-people" />
                        <h1 className={styles.title}><span className={styles.violetText}>{t.peopleRemovalPage.hero.titleHighlight}</span> {t.peopleRemovalPage.hero.title}</h1>
                        <p className={styles.description}>{t.peopleRemovalPage.hero.description}</p>
                        <CategoryTabs />
                        <PromptInput
                            placeholder={t.peopleRemovalPage.hero.promptPlaceholder}
                            onChange={(prompt) => setUserPrompt(prompt)}
                        />
                        <div ref={uploadRef} className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} isAuthenticated={!!user} onAuthRequired={() => setShowAuthPopup(true)} />
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
                            <span className={styles.badge}>{t.peopleRemovalPage.features.badge}</span>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/beach-photo-people-remover.webp" alt="People Remover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.peopleRemovalPage.features.feature1.title}</h3>
                                    <p className={styles.sectionText}>{t.peopleRemovalPage.features.feature1.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.peopleRemovalPage.features.feature1.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/street-people-remover-ai.webp" alt="People Remover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.peopleRemovalPage.features.feature2.title}</h3>
                                    <p className={styles.sectionText}>{t.peopleRemovalPage.features.feature2.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.peopleRemovalPage.features.feature2.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src="/images-optimized/plaza-people-removal-tool.webp" alt="People Remover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>{t.peopleRemovalPage.features.feature3.title}</h3>
                                    <p className={styles.sectionText}>{t.peopleRemovalPage.features.feature3.description}</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>{t.peopleRemovalPage.features.feature3.button}<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>{t.peopleRemovalPage.howItWorks.badge}</span>
                            <h2 className={styles.sectionTitle}>{t.peopleRemovalPage.howItWorks.title}</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div><h3 className={styles.stepTitle}>{t.peopleRemovalPage.howItWorks.step1.title}</h3>
                                <p className={styles.stepText}>{t.peopleRemovalPage.howItWorks.step1.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div><h3 className={styles.stepTitle}>{t.peopleRemovalPage.howItWorks.step2.title}</h3>
                                <p className={styles.stepText}>{t.peopleRemovalPage.howItWorks.step2.description}</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div><h3 className={styles.stepTitle}>{t.peopleRemovalPage.howItWorks.step3.title}</h3>
                                <p className={styles.stepText}>{t.peopleRemovalPage.howItWorks.step3.description}</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials pageId="auto-remove-people" onCtaClick={() => { if (uploadRef.current) uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} />
                    <FAQ items={peopleRemovalFaqItems} />
                    <ToolsGrid customImages={{ 'tool1': '/images-optimized/ai-people-remover-tool.webp', 'tool2': '/images-optimized/video-watermark-remover-6.webp', 'tool3': '/images-optimized/text-remover-pink-card.webp', 'tool4': '/images-optimized/remove-object-people-tool.webp', 'tool5': '/images-optimized/replace-background-people-tool.webp', 'tool6': '/images-optimized/remove-background-people-tool.webp', 'tool7': '/images-optimized/people-remover-museum-card.webp', 'tool8': '/images-optimized/image-upscaler-tiger-card.webp', 'tool9': '/images-optimized/free-sora-watermark-remover-7.webp' }} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <ProcessingPopup isOpen={isLoading} />
        </>
    )
}
