'use client'

import { useState } from 'react'
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

    const faqItems = [
        {
            question: "Can I remove any type of text from images?",
            answer: "Yes! Our AI can remove any text including captions, subtitles, watermarks, timestamps, usernames, and any other text overlays from your images."
        },
        {
            question: "Will the background be preserved?",
            answer: "Absolutely! Our advanced AI intelligently reconstructs the background where the text was, ensuring seamless and natural-looking results."
        },
        {
            question: "What image formats are supported?",
            answer: "We support all common image formats including JPG, PNG, WEBP, GIF, and more. Simply upload your image and we'll handle the rest."
        },
        {
            question: "How accurate is the text removal?",
            answer: "Our AI achieves 95%+ accuracy in text detection and removal. It works on both printed and handwritten text, even on complex backgrounds."
        },
        {
            question: "Can I remove text from multiple images at once?",
            answer: "Pro users can batch process multiple images simultaneously, saving time when working with large collections of photos."
        },
        {
            question: "Is the original image quality maintained?",
            answer: "Yes! We preserve the original resolution and quality of your images while removing unwanted text elements."
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
                            Remove <span className="gradient-text">text from images</span>
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

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                            <h2 className={styles.sectionTitle}>AI-Powered Text Removal – Clean & Professional</h2>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>📝</div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>
                                        Our advanced AI delivers powerful text removal designed for high-precision cleanup. By analyzing every pixel, the system can remove text from images, delete captions, subtitles, timestamps, and even handle complex backgrounds while seamlessly erasing text overlays. Whether you want to clean up screenshots or remove watermarked text, you always get smooth, natural, and trace-free results every time.
                                    </p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>⚡</div>
                                <div className={styles.featureContent}>
                                    <h3>Intelligent Background Reconstruction</h3>
                                    <p className={styles.sectionText}>
                                        Our AI doesn't just erase text – it intelligently reconstructs the background where the text was located. Using advanced inpainting technology, the system analyzes surrounding pixels to seamlessly fill in the area, creating natural-looking results that blend perfectly with the original image. Perfect for removing captions from photos, cleaning up screenshots, or erasing unwanted text from any image.
                                    </p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✓</div>
                                <div className={styles.featureContent}>
                                    <h3>Universal Text Detection & Removal</h3>
                                    <p className={styles.sectionText}>
                                        Works with any type of text including printed text, handwritten notes, captions, subtitles, timestamps, usernames, and watermarked text. Our AI can detect and remove text in any language, any font, and any size. Whether your text is on simple backgrounds or complex patterns, you can easily remove text from images and achieve clean, professional results perfect for presentations, social media, or personal use.
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
                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>Start by uploading your image with unwanted text. Our platform supports all common formats, making it easy to remove text from any photo with just a single click.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI detects and removes text automatically</h3>
                                <p className={styles.stepText}>Our AI analyzes your image, detects all text elements, and removes them while intelligently reconstructing the background for seamless results.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your clean image</h3>
                                <p className={styles.stepText}>In seconds, your text-free image is ready. Download the result in high quality and use it wherever you need.</p>
                            </div>
                        </div>
                    </section>

                    <Pricing />
                    <Testimonials />
                    <FAQ items={faqItems} />
                </div>
            </main>
            <Footer />
            <AuthPopup isOpen={showAuthPopup} onClose={handleAuthClose} />
            <PromoPopup isOpen={showPromoPopup} onClose={() => setShowPromoPopup(false)} />
        </>
    )
}
