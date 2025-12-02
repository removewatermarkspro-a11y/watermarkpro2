'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryTabs from '@/components/CategoryTabs'
import SocialProof from '@/components/SocialProof'
import RatingBadges from '@/components/RatingBadges'
import ImageUploader from '@/components/ImageUploader'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import AuthPopup from '@/components/AuthPopup'
import PromoPopup from '@/components/PromoPopup'
import styles from '../watermark-remover/watermark.module.css'

export default function RemoveWatermarkVideo() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [showAuthPopup, setShowAuthPopup] = useState(false)
    const [showPromoPopup, setShowPromoPopup] = useState(false)

    const handleImageUpload = (file: File) => {
        const isAuthenticated = localStorage.getItem('userAuthenticated')

        if (!isAuthenticated) {
            setShowAuthPopup(true)
            setUploadedImage(file)
        } else {
            setUploadedImage(file)
            setProcessedImage(null)
        }
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

                const newCredits = credits - 1
                localStorage.setItem('userCredits', newCredits.toString())
            }
            reader.readAsDataURL(uploadedImage)
        }, 2000)
    }

    const handleAuthClose = () => {
        setShowAuthPopup(false)
        localStorage.setItem('userAuthenticated', 'true')
        localStorage.setItem('userCredits', '1')
    }

    const faqItems = [
        {
            question: "Can I remove watermarks from TikTok videos?",
            answer: "Yes! Our tool is specifically designed to remove TikTok watermarks and logos from videos. It works with MP4, MOV, and AVI formats."
        },
        {
            question: "What video formats are supported?",
            answer: "We support all major video formats including MP4, MOV, AVI, and more. The tool works with videos from TikTok, Instagram, YouTube, and other platforms."
        },
        {
            question: "Will the video quality be affected?",
            answer: "No! Our AI technology preserves the original video quality while removing watermarks. The background is intelligently reconstructed for seamless results."
        },
        {
            question: "How long does video processing take?",
            answer: "Processing time depends on video length and size. Most short videos (under 1 minute) are processed in 10-30 seconds. Longer videos may take a few minutes."
        },
        {
            question: "Is there a file size limit?",
            answer: "Free users can process videos up to 100MB. Pro users can process videos up to 1GB with faster processing speeds."
        },
        {
            question: "Can I remove multiple watermarks from one video?",
            answer: "Yes! Our AI can detect and remove multiple watermarks, logos, and text overlays from a single video automatically."
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />

                        <h1 className={styles.title}>
                            Remove <span className="gradient-text">watermark from video</span>
                        </h1>

                        <p className={styles.description}>
                            Remove watermarks from videos with AI. Delete TikTok logos, text overlays, and video watermarks from MP4, MOV, AVI files in seconds.
                        </p>

                        <CategoryTabs />

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
                                            Remove Watermark
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
                                    <button className="btn btn-primary" style={{ width: '100%', maxWidth: '400px', marginTop: '1.5rem' }}>
                                        Download Video
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={styles.ratingsBelow}>
                            <RatingBadges />
                        </div>
                    </section>

                    {/* Powerful Features Section */}
                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                            <h2 className={styles.sectionTitle}>
                                AI-Powered Video Watermark Remover – Fast & Accurate
                            </h2>
                        </div>

                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    🎬
                                </div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>
                                        Our advanced AI delivers a powerful video watermark remover designed for high-precision cleanup. By analyzing every frame, the system can remove TikTok watermarks, delete logos, text overlays, and even handle complex moving backgrounds while seamlessly erasing watermarks. Whether you want to enhance your videos or use a TikTok watermark remover for social content, you always get smooth, natural, and trace-free results every time.
                                    </p>
                                    <button className="btn btn-primary">
                                        Get Started
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    ⚡
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Lightning-Fast Video Processing</h3>
                                    <p className={styles.sectionText}>
                                        Enjoy ultra-fast performance with our optimized engine created for efficient video watermark removal. In just seconds, you can delete watermark from video, refine your footage, or remove watermark from any clip across all major formats including MP4, MOV, and AVI. Ideal for creators, editors, or anyone searching how to remove watermark from video, the automated workflow keeps everything simple while maintaining top-tier quality.
                                    </p>
                                    <button className="btn btn-primary">
                                        Get Started
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    ✓
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Universal Format Support – Complete Solution</h3>
                                    <p className={styles.sectionText}>
                                        Compatible with MP4, MOV, AVI and more, this video watermark remover acts as both a universal watermark deleter and a precise tool to remove TikTok watermark with professional accuracy. Whether your files come from social media, downloads, or personal recordings, you can easily remove watermarks from any video format and achieve clean, polished, high-quality results perfect for YouTube, Instagram, or any platform.
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
                                Remove Video Watermarks in 3 Simple Steps
                            </h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your video</h3>
                                <p className={styles.stepText}>
                                    Start by uploading your video directly from your device or dragging it into the interface. Our platform supports all common video formats including MP4, MOV, and AVI, making it easy to remove watermark from video with just a single click.
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI removes the watermark automatically</h3>
                                <p className={styles.stepText}>
                                    Once your video is uploaded, our powerful AI watermark remover analyzes every frame to detect and erase the watermark with high precision. This advanced video watermark remover reconstructs the background intelligently across all frames.
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your clean video instantly</h3>
                                <p className={styles.stepText}>
                                    In just a few moments, your new watermark-free video is ready. Simply download the final result in high quality and use it wherever you need—social media, presentations, content creation, or personal archives.
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
