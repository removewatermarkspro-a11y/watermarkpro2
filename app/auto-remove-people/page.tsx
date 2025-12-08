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

export default function AutoRemovePeople() {
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
                        <h1 className={styles.title}><span className={styles.violetText}>Free</span> smart people removal with one click</h1>
                        <p className={styles.description}>Automatically remove people and crowds from photos with AI. Get clean, tourist-free shots of landmarks and locations instantly.</p>
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
                                        src="/images/feature-people-remover-beach-new.png"
                                        alt="Smart People Remover - Woman on Beach"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Smart People Remover Online – Fast AI Person Deleter</h3>
                                    <p className={styles.sectionText}>Our advanced AI delivers a powerful smart people removal tool designed for high-precision cleanup on all types of photos. By analyzing every pixel, the system can remove people from images, erase unwanted subjects, delete distractions, and even handle complex backgrounds while seamlessly reconstructing missing areas. Whether you want to enhance your shots or clean up travel and social content with one-click precision, you always get smooth, natural, and trace-free results every time.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-people-remover-street.jpg"
                                        alt="Remove People from Photos - Street Scene"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Fast One-Click People Remover for Any Photo</h3>
                                    <p className={styles.sectionText}>Enjoy ultra-fast performance with our optimized engine created for efficient AI people removal. In just seconds, you can erase strangers, refine backgrounds, or remove a person from any image across all major formats. Ideal for creators, photographers, editors, or anyone searching how to remove people from photos quickly, the automated workflow keeps everything simple while maintaining top-tier quality.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage} style={{ padding: 0, overflow: 'hidden' }}>
                                    <img
                                        src="/images/feature-people-remover-plaza.jpg"
                                        alt="Remove People from Crowd - Plaza Scene"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Remove People From Photos – Complete AI Solution</h3>
                                    <p className={styles.sectionText}>Compatible with JPG, PNG, JPEG and more, this smart people remover acts as both a universal object eraser and a precise tool to delete unwanted individuals with professional accuracy. Whether your files come from social media, travel albums, group shots, or personal collections, you can effortlessly remove people from any image and achieve clean, polished, high-quality results.</p>
                                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Remove People in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>Start by uploading your photo directly from your device or dragging it into the interface. Our platform supports all common formats, making it easy to automatically detect and remove people from your images with just a single click. Perfect for travel photos, real-estate shots, architectural images, or any scene where you want a clean, people-free environment.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>                                <h3 className={styles.stepTitle}>AI detects and removes people automatically</h3>
                                <p className={styles.stepText}>Once your image is uploaded, our powerful AI people remover scans the entire photo to detect all individuals and erase them with high accuracy. This advanced tool reconstructs the background intelligently, filling gaps naturally and seamlessly. The process is fully automated, allowing you to remove people from images quickly, cleanly, and without editing skills.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>                                <h3 className={styles.stepTitle}>Download your people-free result instantly</h3>
                                <p className={styles.stepText}>In just a few seconds, your new person-free image is ready. Simply download the final result in high quality and use it anywhere—real-estate listings, travel galleries, architectural visuals, or personal archives. With our fast and reliable one-click people removal tool, getting clean, empty scenes has never been easier.</p>
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
                </div >
            </main >
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
