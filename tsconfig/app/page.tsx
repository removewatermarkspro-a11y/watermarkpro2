'use client'

import { useState, useEffect } from 'react'
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
import AuthPopup from '@/components/AuthPopup'
import PromoPopup from '@/components/PromoPopup'
import styles from './watermark-remover/watermark.module.css'

export default function Home() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)
    const [generationCount, setGenerationCount] = useState(0)

    useEffect(() => {
        // Load generation count from localStorage
        const count = localStorage.getItem('generationCount')
        if (count) {
            setGenerationCount(parseInt(count))
        }
    }, [])

    const handleImageUpload = (file: File) => {
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem('userAuthenticated')

        if (!isAuthenticated) {
            // Show auth popup after file selection
            setShowAuthPopup(true)
            // Store the file to upload after auth
            setUploadedImage(file)
        } else {
            setUploadedImage(file)
            setProcessedImage(null)
        }
    }

    const handleProcess = async () => {
        if (!uploadedImage) return

        // Check if user has credits
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

                // Decrement credits
                const newCredits = credits - 1
                localStorage.setItem('userCredits', newCredits.toString())
            }
            reader.readAsDataURL(uploadedImage)
        }, 2000)
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
        // Give user 1 free credit after signup
        localStorage.setItem('userAuthenticated', 'true')
        localStorage.setItem('userCredits', '1')
        // User can now upload immediately
    }

    const examples = [
        {
            title: "Remove any watermark",
            beforeImage: "",
            afterImage: ""
        },
        {
            title: "Auto remove people",
            beforeImage: "",
            afterImage: ""
        },
        {
            title: "Remove unwanted objects",
            beforeImage: "",
            afterImage: ""
        }
    ]

    const faqItems = [
        {
            question: "How does the watermark remover work?",
            answer: "Our AI-powered watermark remover analyzes your image pixel by pixel to detect and intelligently remove watermarks while preserving the original quality. The process is fully automated and takes just seconds."
        },
        {
            question: "Is it really free to use?",
            answer: "Yes! You get 1 free credit when you sign up. Each credit allows you to remove watermarks from one image. Additional credits can be purchased through our affordable pricing plans."
        },
        {
            question: "What file formats are supported?",
            answer: "We support all common image formats including JPG, PNG, WEBP, and more. For videos, we support MP4, MOV, and AVI formats."
        },
        {
            question: "Will the quality be affected?",
            answer: "No! Our advanced AI technology ensures that your images maintain their original quality after watermark removal. The background is intelligently reconstructed for seamless results."
        },
        {
            question: "How long does it take to process?",
            answer: "Most images are processed in just 2-5 seconds. Larger files or videos may take slightly longer, but the process is always fast and efficient."
        },
        {
            question: "Can I remove watermarks from videos?",
            answer: "Yes! Our tool supports both images and videos. You can remove TikTok watermarks, logos, and text overlays from video files in MP4, MOV, and AVI formats."
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        {/* Social Proof above H1 */}
                        <SocialProof />

                        <h1 className={styles.title}>
                            Free <span className="gradient-text">watermark remover</span>
                        </h1>

                        <p className={styles.description}>
                            Upload your image, select the watermark, and let our AI intelligently remove it while preserving the original quality. Professional results instantly.
                        </p>

                        {/* Categories between description and upload */}
                        <CategoryTabs />

                        {/* Upload Box */}
                        <div className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} />

                            {uploadedImage && !processedImage && (
                                <button
                                    className="btn btn-primary"
                                    onClick={handleProcess}
                                    disabled={isProcessing}
                                    style={{ marginTop: '1.5rem', width: '100%', maxWidth: '400px' }}
                                >
                                    {isProcessing ? (
                                        <>
                                            <span className={styles.spinner}></span>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Try this now
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            )}

                            {processedImage && (
                                <div className={styles.result}>
                                    <div className={styles.comparison}>
                                        <div className={styles.comparisonItem}>
                                            <span className={styles.comparisonLabel}>Before</span>
                                            <img src={URL.createObjectURL(uploadedImage!)} alt="Before" loading="lazy" />
                                        </div>
                                        <div className={styles.comparisonItem}>
                                            <span className={styles.comparisonLabel}>After</span>
                                            <img src={processedImage} alt="After" loading="lazy" />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '400px', marginTop: '1.5rem' }}>
                                        <button
                                            className="btn btn-secondary"
                                            style={{ flex: 1 }}
                                            onClick={() => {
                                                setUploadedImage(null)
                                                setProcessedImage(null)
                                            }}
                                        >
                                            Generate new
                                        </button>
                                        <button className="btn btn-primary" style={{ flex: 1 }}>
                                            Download
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Ratings below upload */}
                        <div className={styles.ratingsBelow}>
                            <RatingBadges />
                        </div>
                    </section>

                    {/* Examples Section */}
                    <ExamplesSection examples={examples} />

                    {/* Powerful Features Section */}
                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                            <h2 className={styles.sectionTitle}>
                                Free Watermark Remover Online – Fast AI Watermark Deleter
                            </h2>
                        </div>

                        <div className={styles.featureGrid}>
                            {/* Feature 1 - Image left, text right */}
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    📊
                                </div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>
                                        Our advanced AI delivers a powerful free watermark remover designed for high-precision cleanup on both images and videos. By analyzing every pixel, the system can remove watermark from photo, delete logos, text, objects, and even handle complex backgrounds while seamlessly erasing watermarks. Whether you want to enhance your images or use a TikTok watermark remover for social content, you always get smooth, natural, and trace-free results every time.
                                    </p>
                                    <button className="btn btn-primary">
                                        Get Started
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Feature 2 - Text left, image right (auto-reversed) */}
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    ✨
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Fast TikTok Watermark Remover for Video</h3>
                                    <p className={styles.sectionText}>
                                        Enjoy ultra-fast performance with our optimized engine created for efficient watermark remover video processing. In just seconds, you can delete watermark from video, refine your footage, or remove watermark from any clip across all major formats. Ideal for creators, editors, or anyone searching how to remove watermark from photo or video, the automated workflow keeps everything simple while maintaining top-tier quality.
                                    </p>
                                    <button className="btn btn-primary">
                                        Get Started
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Feature 3 - Image left, text right */}
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    ✓
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Remove Watermark from Photo & Video – Complete Solution</h3>
                                    <p className={styles.sectionText}>
                                        Compatible with MP4, MOV, AVI and more, this free watermark remover acts as both a universal watermark deleter and a precise tool to remove TikTok watermark with professional accuracy. Whether your files come from social media, downloads, or personal recordings, you can easily remove watermarks from any video format and achieve clean, polished, high-quality results.
                                    </p>
                                    <button className="btn btn-primary">
                                        Get Started
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
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>
                                Remove Watermarks in 3 Simple Steps
                            </h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>
                                    Start by uploading your picture directly from your device or dragging it into the interface. Our platform supports all common formats, making it easy to remove watermark from photo or remove watermark from image with just a single click.
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI removes the watermark automatically</h3>
                                <p className={styles.stepText}>
                                    Once your image is uploaded, our powerful AI watermark remover analyzes every pixel to detect and erase the watermark with high precision. This advanced image watermark remover reconstructs the background intelligently.
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your clean result instantly</h3>
                                <p className={styles.stepText}>
                                    In just a few seconds, your new watermark-free image is ready. Simply download the final result in high quality and use it wherever you need—social media, presentations, design projects, or personal archives.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <Pricing />

                    {/* Testimonials Section */}
                    <Testimonials />

                    {/* FAQ Section */}
                    <FAQ items={faqItems} />
                </div>
            </main>
            <Footer />

            {/* Popups */}
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
