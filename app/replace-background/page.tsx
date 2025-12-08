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
import { replaceBackgroundFaqItems } from '@/utils/faqItems'
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
                        <SocialProof />
                        <h1 className={styles.title}><span className={styles.violetText}>Free</span> instantly swap backgrounds</h1>
                        <p className={styles.description}>Change photo backgrounds instantly with AI. Replace any background with custom images, colors, or professional studio backdrops.</p>
                        <CategoryTabs />
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
                            <span className={styles.badge}>POWERFUL FEATURES</span>
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
                                    <h3>Free Background Remover Online – Fast AI Background Eraser</h3>
                                    <p className={styles.sectionText}>Our advanced AI delivers a powerful free background remover designed for high-precision editing on all types of photos. By analyzing every pixel, the system can remove background from image, isolate the subject, erase objects, and handle complex edges while generating a smooth transparent result. Whether you want to enhance your pictures or prepare clean visuals for social content, you always get natural, crisp, and professional-quality results every time.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
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
                                    <h3>Fast AI Background Remover for Any Image</h3>
                                    <p className={styles.sectionText}>Enjoy ultra-fast performance with our optimized engine created for efficient background removal. In just seconds, you can erase background from photo, refine outlines, or turn any picture into a transparent PNG across all major formats. Ideal for creators, editors, businesses, or anyone searching how to remove background from image instantly, the automated workflow keeps everything simple while delivering top-tier quality.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
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
                                    <h3>Remove Background from Photos – Complete AI Solution</h3>
                                    <p className={styles.sectionText}>Compatible with JPG, PNG, JPEG and more, this free background remover acts as both a universal background eraser and a precise tool to cut out subjects with professional accuracy. Whether your files come from social media, downloads, product shoots, or personal galleries, you can easily remove backgrounds from any image and achieve clean, polished, high-resolution results.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Replace Background in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>Start by uploading your photo directly from your device or dragging it into the interface. Our platform supports all common formats, making it easy to remove background from image or create transparent backgrounds with just a single click. Whether it's for product photos, portraits, or design assets, the system prepares your file instantly.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>AI removes the background automatically</h3>
                                <p className={styles.stepText}>Once your image is uploaded, our powerful AI background remover analyzes every pixel to detect the subject and erase the background with high precision. This advanced tool reconstructs edges intelligently, acting as a smart background eraser capable of handling hair, shadows, and detailed textures. The process is fully automated, allowing you to remove backgrounds quickly, cleanly, and without editing skills.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>Download your clean result instantly</h3>
                                <p className={styles.stepText}>In just a few seconds, your new background-free image is ready. Simply download the final result in high quality and use it wherever you need—e-commerce, social media, presentations, design projects, or personal archives. With our fast and reliable background removal tool, getting a clean, professional-looking cutout has never been easier.</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />                    <Testimonials onCtaClick={() => {
                        if (uploadRef.current) {
                            uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                    }} />
                    <FAQ items={replaceBackgroundFaqItems} />

                    <ToolsGrid />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
