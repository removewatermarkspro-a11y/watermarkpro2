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
import { commonFaqItems } from '@/utils/commonFaqItems'
import styles from '../watermark-remover/watermark.module.css'

export default function RemoveObject() {
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
                        <h1 className={styles.title}><span className={styles.violetText}>Free</span> remove any objects from your images</h1>
                        <p className={styles.description}>Erase any unwanted object from photos with AI. Remove people, cars, buildings, or any element from your images in seconds.</p>
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
                                        src="/images/feature-remove-object-3.png"
                                        alt="AI Object Removal - Champagne Glasses Cityscape"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Free Object Remover Online – Fast AI Object Deletion</h3>
                                    <p className={styles.sectionText}>Our advanced AI delivers a powerful free object remover designed for high-precision cleanup on all types of images. By analyzing every pixel, the system can remove unwanted objects from photos, erase people, text, clutter, and even manage complex backgrounds while seamlessly reconstructing missing details. Whether you want to enhance your pictures or clean up scenes for social content, you always get smooth, natural, and trace-free results every time.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-remove-object-1.png"
                                        alt="AI Object Removal from Blue Sky"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Fast AI Tool to Remove Unwanted Objects Instantly</h3>
                                    <p className={styles.sectionText}>Enjoy ultra-fast performance with our optimized engine created for efficient AI object removal. In just seconds, you can erase objects from any image, refine backgrounds, or fix imperfections across all major formats. Ideal for creators, photographers, editors, or anyone searching how to remove objects from photos easily, the automated workflow keeps everything simple while maintaining top-tier quality.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-remove-object-2.jpg"
                                        alt="Remove Objects from Photos - Before and After"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Remove Objects from Photos – Complete AI Solution</h3>
                                    <p className={styles.sectionText}>Compatible with JPG, PNG, JPEG and more, this free object remover acts as both a universal cleanup tool and a precise solution to remove objects from images with professional accuracy. Whether your files come from social media, downloads, screenshots, or personal photo collections, you can easily delete unwanted elements and achieve clean, polished, high-quality results.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Remove Objects in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>Start by uploading your photo directly from your device or dragging it into the interface. Our platform supports all common formats, making it easy to remove unwanted objects, people, or elements from your images with a single click. Whether it's a distraction, a stranger, a blemish, or any unwanted detail, the system prepares your file instantly for AI-powered removal.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>AI removes objects automatically</h3>
                                <p className={styles.stepText}>Once your image is uploaded, our powerful AI object remover scans every pixel to detect and erase unwanted elements with high precision. This advanced system rebuilds the background intelligently, filling gaps naturally and seamlessly. The process is fully automated, allowing you to remove objects quickly, cleanly, and without any editing skills.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>Download your clean result instantly</h3>
                                <p className={styles.stepText}>In just a few seconds, your new object-free image is ready. Simply download the final result in high quality and use it wherever you need—social media, presentations, design projects, or personal archives. With our fast and reliable object removal tool, achieving a clean, flawless image has never been easier.</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />                    <Testimonials onCtaClick={() => {
                        if (uploadRef.current) {
                            uploadRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                    }} />
                    <FAQ items={commonFaqItems} />

                    <ToolsGrid />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
