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

export default function ImageUpscaler() {
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
        { question: "How much can I upscale an image?", answer: "You can upscale images up to 4x their original size. Free users can upscale to 2x, while Pro users can upscale to 4x with enhanced quality." },
        { question: "Will upscaling make my image blurry?", answer: "No! Our AI uses advanced super-resolution technology to add realistic details and sharpness, not just enlarge pixels. The result is crisp, clear images even at higher resolutions." },
        { question: "What types of images work best?", answer: "Our AI works with all types of images including photos, artwork, logos, and graphics. Best results come from images that aren't already heavily compressed or extremely low quality." },
        { question: "Can I upscale old or low-quality photos?", answer: "Yes! Our AI is specifically designed to enhance old, low-resolution, or degraded photos by adding details and improving clarity while upscaling." },
        { question: "What's the maximum file size?", answer: "Free users can upscale images up to 5MB. Pro users can upscale images up to 25MB with support for higher output resolutions." },
        { question: "How does AI upscaling differ from normal resizing?", answer: "Traditional resizing just stretches pixels, making images blurry. AI upscaling uses machine learning to intelligently add new details and enhance sharpness, creating truly higher-resolution images." }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />
                        <h1 className={styles.title}>AI <span className="gradient-text">image upscaler</span></h1>
                        <p className={styles.description}>Upscale images with AI to 4x resolution. Enhance photo quality, increase resolution, and add realistic details automatically.</p>
                        <CategoryTabs />
                        <div className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} />
                            {uploadedImage && !processedImage && (
                                <button className="btn btn-primary" onClick={handleProcess} disabled={isProcessing} style={{ marginTop: '1.5rem', width: '100%', maxWidth: '400px' }}>
                                    {isProcessing ? (<><span className={styles.spinner}></span>Processing...</>) : (<>Upscale Image<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></>)}
                                </button>
                            )}
                            {processedImage && (
                                <div className={styles.result}>
                                    <div className={styles.comparison}>
                                        <div className={styles.comparisonItem}><span className={styles.comparisonLabel}>Before</span><img src={URL.createObjectURL(uploadedImage!)} alt="Before" loading="lazy" /></div>
                                        <div className={styles.comparisonItem}><span className={styles.comparisonLabel}>After (4x)</span><img src={processedImage} alt="After" loading="lazy" /></div>
                                    </div>
                                    <button className="btn btn-primary" style={{ width: '100%', maxWidth: '400px', marginTop: '1.5rem' }}>Download HD Image</button>
                                </div>
                            )}
                        </div>
                        <div className={styles.ratingsBelow}><RatingBadges /></div>
                    </section>

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                            <h2 className={styles.sectionTitle}>AI Image Upscaling – Crystal Clear Results</h2>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>📈</div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>Our advanced AI delivers powerful image upscaling designed for maximum quality enhancement. By analyzing every pixel and understanding image content, the system can intelligently add realistic details, enhance sharpness, and increase resolution up to 4x. Whether you want to enlarge old photos, prepare images for print, or enhance low-resolution graphics, you always get crisp, clear, and professional-quality results every time.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✨</div>
                                <div className={styles.featureContent}>
                                    <h3>Super-Resolution Technology</h3>
                                    <p className={styles.sectionText}>Our AI uses cutting-edge super-resolution algorithms trained on millions of high-quality images. Instead of simply stretching pixels, the system intelligently generates new details, enhances textures, and adds realistic sharpness. Perfect for restoring old photos, preparing images for large prints, or enhancing any low-resolution image to professional quality suitable for any use case.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🎨</div>
                                <div className={styles.featureContent}>
                                    <h3>Universal Image Enhancement</h3>
                                    <p className={styles.sectionText}>Works with any type of image including photos, artwork, logos, graphics, and scanned documents. Our AI adapts to different image types, preserving important details while enhancing overall quality. Whether you're upscaling portraits, landscapes, product photos, or digital art, you can achieve stunning high-resolution results perfect for printing, web use, or professional presentations.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Upscale Images in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>Start by uploading any low-resolution image you want to enhance. Our AI works with photos, graphics, artwork, and more.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🚀</div>
                                <h3 className={styles.stepTitle}>AI upscales and enhances</h3>
                                <p className={styles.stepText}>Our AI analyzes your image and intelligently adds details, enhances sharpness, and increases resolution up to 4x the original size.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download HD result</h3>
                                <p className={styles.stepText}>In seconds, your high-resolution image is ready. Download in crystal-clear quality, perfect for printing or any use.</p>
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
