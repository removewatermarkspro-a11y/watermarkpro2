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
import { commonFaqItems } from '@/utils/commonFaqItems'
import styles from './watermark-remover/watermark.module.css'

export default function WatermarkRemover() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [processedImage, setProcessedImage] = useState<string | null>(null)

    const handleImageUpload = (file: File) => {
        setUploadedImage(file)
        setProcessedImage(null)
    }

    const handleProcess = async () => {
        if (!uploadedImage) return
        setIsProcessing(true)
        setTimeout(() => {
            const reader = new FileReader()
            reader.onload = (e) => {
                setProcessedImage(e.target?.result as string)
                setIsProcessing(false)
            }
            reader.readAsDataURL(uploadedImage)
        }, 2000)
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />

                        <h1 className={styles.title}>
                            <span className={styles.violetText}>Free</span> watermark remover
                        </h1>

                        <p className={styles.description}>
                            Upload your image, select the watermark, and let our AI intelligently remove it while preserving the original quality. Professional results instantly.
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
                                    <button className="btn btn-primary" style={{ width: '100%', maxWidth: '400px', marginTop: '1.5rem' }}>
                                        Download Image
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

                    <section className={styles.features}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>POWERFUL FEATURES</span>
                        </div>

                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>💧</div>
                                <div className={styles.featureContent}>
                                    <h3>Free Watermark Remover Online – Fast AI Watermark Deleter</h3>
                                    <p className={styles.sectionText}>Our advanced AI delivers a powerful free watermark remover designed for high-precision cleanup on both images and videos. By analyzing every pixel, the system can remove watermark from photo, delete logos, text, objects, and even handle complex backgrounds while seamlessly erasing watermarks. Whether you want to enhance your images or use a TikTok watermark remover for social content, you always get smooth, natural, and trace-free results every time.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🎬</div>
                                <div className={styles.featureContent}>
                                    <h3>Fast TikTok Watermark Remover for Video</h3>
                                    <p className={styles.sectionText}>Enjoy ultra-fast performance with our optimized engine created for efficient watermark remover video processing. In just seconds, you can delete watermark from video, refine your footage, or remove watermark from any clip across all major formats. Ideal for creators, editors, or anyone searching how to remove watermark from photo or video, the automated workflow keeps everything simple while maintaining top-tier quality.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✓</div>
                                <div className={styles.featureContent}>
                                    <h3>Remove Watermark from Photo & Video – Complete Solution</h3>
                                    <p className={styles.sectionText}>Compatible with MP4, MOV, AVI and more, this free watermark remover acts as both a universal watermark deleter and a precise tool to remove TikTok watermark with professional accuracy. Whether your files come from social media, downloads, or personal recordings, you can easily remove watermarks from any video format and achieve clean, polished, high-quality results.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Remove Watermarks in 3 Simple Steps</h2>
                        </div>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your image</h3>
                                <p className={styles.stepText}>Start by uploading your picture directly from your device or dragging it into the interface. Our platform supports all common formats, making it easy to remove watermark from photo or remove watermark from image with just a single click. Whether the watermark is text, a logo, or a graphic overlay, the system prepares your file instantly for watermark removal.</p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI removes the watermark automatically</h3>
                                <p className={styles.stepText}>Once your image is uploaded, our powerful AI watermark remover analyzes every pixel to detect and erase the watermark with high precision. This advanced image watermark remover reconstructs the background intelligently, acting as a smart watermark eraser capable of handling even complex textures. The process is fully automated, allowing you to remove watermark from photo quickly, cleanly, and without any editing skills.</p>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download your clean result instantly</h3>
                                <p className={styles.stepText}>In just a few seconds, your new watermark-free image is ready. Simply download the final result in high quality and use it wherever you need—social media, presentations, design projects, or personal archives. With our fast and reliable photo watermark remover, getting a clean, professional image has never been easier.</p>
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
        </>
    )
}
