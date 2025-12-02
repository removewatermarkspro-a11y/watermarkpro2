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

export default function RemoveObject() {
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
        { question: "What objects can I remove?", answer: "You can remove any unwanted object including people, cars, buildings, signs, power lines, trash, photobombers, and more. Our AI works on any object you want to erase." },
        { question: "How does the AI fill in the background?", answer: "Our advanced AI analyzes the surrounding area and intelligently reconstructs the background where the object was, creating seamless and natural-looking results." },
        { question: "Can I remove multiple objects at once?", answer: "Yes! You can select and remove multiple objects from a single image in one go, saving time when cleaning up complex photos." },
        { question: "Will it work on complex backgrounds?", answer: "Absolutely! Our AI is trained on millions of images and can handle complex backgrounds including patterns, textures, landscapes, and architectural elements." },
        { question: "What's the maximum image size?", answer: "Free users can process images up to 10MB. Pro users can process images up to 50MB with higher resolution support." },
        { question: "Can I undo if I don't like the result?", answer: "Yes! You can always re-upload the original image and try different selections or adjustments until you're satisfied with the result." }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />
                        <h1 className={styles.title}>Remove <span className="gradient-text">unwanted objects</span></h1>
                        <p className={styles.description}>Erase any unwanted object from photos with AI. Remove people, cars, buildings, or any element from your images in seconds.</p>
                        <CategoryTabs />
                        <div className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} />
                            {uploadedImage && !processedImage && (
                                <button className="btn btn-primary" onClick={handleProcess} disabled={isProcessing} style={{ marginTop: '1.5rem', width: '100%', maxWidth: '400px' }}>
                                    {isProcessing ? (<><span className={styles.spinner}></span>Processing...</>) : (<>Remove Object<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></>)}
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
                            <h2 className={styles.sectionTitle}>AI Object Removal – Clean Photos Instantly</h2>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🎯</div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>Our advanced AI delivers powerful object removal designed for high-precision cleanup. By analyzing every pixel, the system can remove unwanted objects, delete photobombers, erase buildings, cars, signs, and even handle complex backgrounds while seamlessly filling in the area. Whether you want to clean up vacation photos or remove distracting elements, you always get smooth, natural, and trace-free results every time.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🖼️</div>
                                <div className={styles.featureContent}>
                                    <h3>Smart Background Reconstruction</h3>
                                    <p className={styles.sectionText}>Our AI doesn't just erase objects – it intelligently reconstructs what should be behind them. Using advanced inpainting technology, the system analyzes surrounding pixels, patterns, and textures to seamlessly fill in the removed area. Perfect for removing tourists from landmarks, erasing power lines from landscapes, or cleaning up any unwanted elements from your photos.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>✨</div>
                                <div className={styles.featureContent}>
                                    <h3>Universal Object Detection</h3>
                                    <p className={styles.sectionText}>Works with any type of object including people, vehicles, buildings, signs, animals, trash, and more. Our AI can detect and remove objects of any size, shape, or color. Whether your object is on simple backgrounds or complex scenes, you can easily remove unwanted elements and achieve clean, professional results perfect for real estate, travel photography, or personal memories.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Remove Objects in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your photo</h3>
                                <p className={styles.stepText}>Start by uploading the image containing unwanted objects. Our platform supports all common formats for easy object removal.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🎯</div>
                                <h3 className={styles.stepTitle}>Select objects to remove</h3>
                                <p className={styles.stepText}>Our AI automatically detects objects, or you can manually select what to remove. The system then erases them while reconstructing the background.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download clean photo</h3>
                                <p className={styles.stepText}>In seconds, your clean photo is ready. Download the result with unwanted objects completely removed.</p>
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
