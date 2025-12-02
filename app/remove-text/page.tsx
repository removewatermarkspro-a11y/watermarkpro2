'use client'

import { useState } from 'react'
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

export default function RemoveText() {
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
                localStorage.setItem('userCredits', (credits - 1).toString())
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
                            <span className={styles.violetText}>Free</span> remove text from image ai
                        </h1>
                        <p className={styles.description}>
                            Instantly remove text, captions, and subtitles from images with AI. Clean up photos by erasing unwanted text overlays in seconds.
                        </p>
                        <CategoryTabs />
                        <div className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} />
                            {uploadedImage && !processedImage && (
                                <button className="btn btn-primary" onClick={handleProcess} disabled={isProcessing} style={{ marginTop: '1.5rem', width: '100%', maxWidth: '400px' }}>
                                    {isProcessing ? (<><span className={styles.spinner}></span>Processing...</>) : (<>Remove Text<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></>)}
                                </button>
                            )}
                            {processedImage && (
                                <div className={styles.result}>
                                    <div className={styles.comparison}>
                                        <div className={styles.comparisonItem}><span className={styles.comparisonLabel}>Before</span><img src={URL.createObjectURL(uploadedImage!)} alt="Before" loading="lazy" /></div>
                                        <div className={styles.comparisonItem}><span className={styles.comparisonLabel}>After</span><img src={processedImage} alt="After" loading="lazy" /></div>
                                    </div>
                                    <button className="btn btn-primary" style={{ width: '100%', maxWidth: '400px', marginTop: '1.5rem' }}>Download Image</button>
                                </div>
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
                                <div className={styles.featureImage}>📝</div>
                                <div className={styles.featureContent}>
                                    <h3>Remove Text from Image AI Free – Fast & Precise Cleanup</h3>
                                    <p className={styles.sectionText}>
                                        Our advanced AI provides a powerful remove text from image free solution capable of delivering high-precision results on all types of photos. By analyzing every pixel, the system can remove text from photo, erase captions, unwanted labels, watermarks, and objects while preserving natural texture. Whether you need to clean graphics or fix pictures with an AI text remover, you always get smooth and realistic results with no visible traces.
                                    </p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>⚡</div>
                                <div className={styles.featureContent}>
                                    <h3>Fast Free AI Tool to Remove Text from Any Image</h3>
                                    <p className={styles.sectionText}>
                                        Enjoy lightning-fast performance with our optimized engine built for efficient AI text removal. In just seconds, you can remove text from image, fix scans, clean screenshots, or erase words from photos across all major formats. Perfect for designers, students, creators, or anyone searching how to remove text from image free, this automated workflow keeps everything effortless while maintaining top-tier quality.
                                    </p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✓</div>
                                <div className={styles.featureContent}>
                                    <h3>Complete Solution to Remove Text from Photo Free with AI</h3>
                                    <p className={styles.sectionText}>
                                        Compatible with PNG, JPG, JPEG and more, this tool works as both a universal free AI text remover and a precise solution to clean any image instantly. Whether the source is a screenshot, document, meme, artwork or social media graphic, you can remove text from photo in seconds and achieve clean, polished, professional-looking results without manual editing.
                                    </p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Remove Text in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your image with text</h3>
                                <p className={styles.stepText}>Start by uploading your photo directly from your device or dragging it into the interface. Our platform supports all common image formats, making it easy to remove text from image or remove text from photo with just a single click. Whether the text is a date stamp, caption, watermark text, or any unwanted overlay, the system prepares your file instantly for text removal.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI removes text automatically</h3>
                                <p className={styles.stepText}>Once your image is uploaded, our powerful AI text remover analyzes every pixel to detect and erase the text with high precision. This advanced remove text from image tool reconstructs the background intelligently, capable of handling even complex textures behind the text. The process is fully automated, allowing you to remove text from photo quickly, cleanly, and without any editing skills.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your text-free result instantly</h3>
                                <p className={styles.stepText}>In just a few seconds, your new text-free image is ready. Simply download the final result in high quality and use it wherever you need—social media, presentations, design projects, or personal archives. With our fast and reliable text removal tool, getting a clean, professional image has never been easier.</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials />
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
