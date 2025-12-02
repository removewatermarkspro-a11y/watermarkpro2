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



    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />
                        <h1 className={styles.title}><span className={styles.violetText}>Free</span> upscale images to 4K with AI precision</h1>
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

                    {/* Examples Section */}
                    <ExamplesSection />

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>📈</div>
                                <div className={styles.featureContent}>
                                    <h3>AI Image Upscaler Online – Fast 4K Enhancement Tool</h3>
                                    <p className={styles.sectionText}>Our advanced AI delivers a powerful free image upscaler designed for high-precision enhancement on all types of photos. By analyzing every pixel, the system can upscale images to 4K, restore fine details, improve textures, sharpen edges, and even fix low-resolution or blurry shots while preserving natural quality. Whether you want to enhance your images or prepare ultra-HD visuals for social content, you always get crisp, smooth, and stunning results every time.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✨</div>
                                <div className={styles.featureContent}>
                                    <h3>Fast AI Upscaler for Ultra-HD 4K Quality</h3>
                                    <p className={styles.sectionText}>Enjoy ultra-fast performance with our optimized engine created for efficient AI image upscaling. In just seconds, you can upscale photos to 4K, refine clarity, boost definition, or convert low-res images into professional-grade visuals across all major formats. Ideal for creators, designers, photographers, or anyone searching how to upscale images instantly, the automated workflow keeps everything simple while delivering top-tier quality.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🎨</div>
                                <div className={styles.featureContent}>
                                    <h3>Upscale Photos to 4K – Complete AI Enhancement Solution</h3>
                                    <p className={styles.sectionText}>Compatible with JPG, PNG, JPEG and more, this AI upscaler acts as both a universal enhancement tool and a precise solution to upscale images with professional accuracy. Whether your files come from social media, old archives, product photography, or personal collections, you can easily enlarge any image and achieve clean, polished, high-resolution 4K results.</p>
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
                                <p className={styles.stepText}>Start by uploading your low-resolution photo directly from your device or dragging it into the interface. Our platform supports all common formats, making it easy to upscale images up to 4× their original size. Whether you need to restore old photos, enlarge product shots, or improve visual clarity, the system prepares your file instantly for AI upscaling.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🚀</div>
                                <h3 className={styles.stepTitle}>AI upscales and enhances automatically</h3>
                                <p className={styles.stepText}>Once your image is uploaded, our powerful AI image upscaler analyzes every pixel and intelligently increases resolution up to stunning 4K quality. This advanced tool restores lost details, sharpens edges, enhances textures, and boosts clarity while maintaining a natural, realistic appearance. The process is fully automated, allowing you to upscale images quickly without losing quality or introducing artifacts.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your enhanced result instantly</h3>
                                <p className={styles.stepText}>In just a few seconds, your new ultra-HD image is ready. Simply download the final result in beautiful 4K quality and use it wherever you need—printing, large displays, professional portfolios, e-commerce, or digital archives. With our fast and reliable AI upscaler, creating crystal-clear, high-quality images has never been easier.</p>
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
