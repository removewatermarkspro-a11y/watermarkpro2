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

export default function ReplaceBackground() {
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
        { question: "Can I choose any background?", answer: "Yes! You can upload your own custom background or choose from our library of professional backgrounds including studios, landscapes, gradients, and more." },
        { question: "Will the subject edges look natural?", answer: "Absolutely! Our AI uses advanced edge detection to ensure smooth, natural-looking transitions between the subject and new background." },
        { question: "What types of photos work best?", answer: "Our AI works with any photo, but best results come from images with clear subject separation. Portrait photos, product shots, and well-lit images work exceptionally well." },
        { question: "Can I adjust the background after replacement?", answer: "Yes! Pro users can fine-tune the background, adjust lighting, add shadows, and make other adjustments for perfect integration." },
        { question: "Does it work with group photos?", answer: "Yes! Our AI can handle multiple people or objects and replace the background while keeping all subjects intact and natural-looking." },
        { question: "What's the output quality?", answer: "We maintain the original image resolution and quality. Pro users can export in higher resolutions up to 4K for professional use." }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />
                        <h1 className={styles.title}>Replace <span className="gradient-text">background</span></h1>
                        <p className={styles.description}>Change photo backgrounds instantly with AI. Replace any background with custom images, colors, or professional studio backdrops.</p>
                        <CategoryTabs />
                        <div className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} />
                            {uploadedImage && !processedImage && (
                                <button className="btn btn-primary" onClick={handleProcess} disabled={isProcessing} style={{ marginTop: '1.5rem', width: '100%', maxWidth: '400px' }}>
                                    {isProcessing ? (<><span className={styles.spinner}></span>Processing...</>) : (<>Replace Background<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></>)}
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
                            <h2 className={styles.sectionTitle}>AI Background Replacement – Professional Results</h2>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🎨</div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>Our advanced AI delivers powerful background replacement designed for professional-quality results. By analyzing every pixel, the system can accurately detect subjects, preserve fine details like hair and edges, and seamlessly integrate new backgrounds. Whether you want to create studio-quality portraits, product photos, or creative compositions, you always get smooth, natural, and professional results every time.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✨</div>
                                <div className={styles.featureContent}>
                                    <h3>Smart Edge Detection & Refinement</h3>
                                    <p className={styles.sectionText}>Our AI uses advanced edge detection to ensure perfect subject separation. The system automatically refines edges, preserves fine details like hair strands and transparent objects, and creates natural-looking transitions. Perfect for portraits, product photography, or any image where precise subject isolation is crucial for professional results.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🖼️</div>
                                <div className={styles.featureContent}>
                                    <h3>Unlimited Background Options</h3>
                                    <p className={styles.sectionText}>Choose from our extensive library of professional backgrounds or upload your own custom images. Options include studio backdrops, natural landscapes, urban scenes, gradient colors, solid colors, and more. Our AI automatically adjusts lighting and color matching to ensure the subject blends perfectly with the new background for realistic, professional-quality results.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
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
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your photo</h3>
                                <p className={styles.stepText}>Start by uploading the image you want to edit. Our AI works with portraits, products, or any photo where you want to change the background.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🎨</div>
                                <h3 className={styles.stepTitle}>Choose new background</h3>
                                <p className={styles.stepText}>Select from our library or upload your own background. Our AI automatically detects the subject and replaces the background while preserving all details.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your result</h3>
                                <p className={styles.stepText}>In seconds, your photo with the new background is ready. Download in high quality and use it for any purpose.</p>
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
