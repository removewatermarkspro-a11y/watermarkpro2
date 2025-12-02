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
import ToolsGrid from '@/components/ToolsGrid'
import AuthPopup from '@/components/AuthPopup'
import PromoPopup from '@/components/PromoPopup'
import { commonFaqItems } from '@/utils/commonFaqItems'
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



    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />

                        <h1 className={styles.title}>
                            <span className={styles.violetText}>Free</span> watermark remover from video
                        </h1>

                        <p className={styles.description}>
                            Remove watermarks from videos with AI. Delete TikTok logos, text overlays, and video watermarks from MP4, MOV, AVI files in seconds.
                        </p>

                        <CategoryTabs />

                        <div className={styles.uploadSection}>
                            <ImageUploader
                                onImageUpload={handleImageUpload}
                                uploadText="Drag your video here"
                                formatText="MP4, MOV, AVI up to 100MB"
                                acceptedFormats="video/mp4,video/quicktime,video/x-msvideo,video/avi"
                            />

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

                    {/* Examples Section */}
                    <ExamplesSection />

                    {/* Powerful Features Section */}
                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                        </div>

                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>
                                    🎬
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Free Remove Watermark Video Online – Fast & Accurate</h3>
                                    <p className={styles.sectionText}>
                                        Our AI-powered tool offers a free remove watermark video solution that delivers high-precision results on all types of footage. By analyzing each frame in detail, it can erase logos, text, watermarks, and unwanted overlays while maintaining crisp video quality. Whether you're cleaning up clips for social media or fixing downloaded content, you get smooth and natural results without traces or distortion.
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
                                    <h3>Fast Free Watermark Remover for Any Video Format</h3>
                                    <p className={styles.sectionText}>
                                        Enjoy lightning-fast processing with our optimized engine built for free video watermark removal. In just a few seconds, you can remove watermark from video, improve your footage, or clean up scenes across MP4, MOV, AVI, and many other formats. Perfect for creators, editors, or anyone searching how to remove watermark from video effortlessly, the automated workflow keeps everything simple and reliable.
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
                                    <h3>Complete Solution to Remove Watermark from Video Free</h3>
                                    <p className={styles.sectionText}>
                                        This all-in-one tool works as a universal free watermark remover video service capable of handling both simple and complex cases. Whether your clips come from TikTok, downloads, screen recordings, or personal projects, you can instantly delete watermarks and achieve clean, polished visuals. Whatever the source, the system ensures stable quality and professional-looking results every time.
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
                                    Start by uploading your video file directly from your device or dragging it into the interface. Our platform supports MP4, MOV, AVI, and all popular video formats, making it easy to remove watermark from video with just a single click. Whether the watermark is text, a logo, or a tiktok watermark, the system prepares your file instantly for video watermark removal.
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI removes watermark from video automatically</h3>
                                <p className={styles.stepText}>
                                    Once your video is uploaded, our powerful video watermark remover analyzes every frame to detect and erase the watermark with high precision. This advanced tool processes each frame intelligently, acting as a smart watermark eraser for videos capable of handling even complex overlays. The process is fully automated, allowing you to remove tiktok watermark or any video watermark quickly and cleanly.
                                </p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your clean video instantly</h3>
                                <p className={styles.stepText}>
                                    In just a few moments, your new watermark-free video is ready. Simply download the final result in high quality and use it wherever you need—social media posts, presentations, content creation, or personal archives. With our fast and reliable video watermark remover, getting clean, professional videos has never been easier.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <Pricing />

                    {/* Testimonials Section */}
                    <Testimonials />

                    {/* FAQ Section */}
                    <FAQ items={commonFaqItems} />

                    <ToolsGrid />
                </div>
            </main>
            <Footer />

            {/* Popups */}
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
