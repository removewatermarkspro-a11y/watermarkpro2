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

export default function AutoRemovePeople() {
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
        { question: "How does automatic people removal work?", answer: "Our AI automatically detects all people in your image and removes them while intelligently reconstructing the background. No manual selection needed – just upload and let the AI do the work." },
        { question: "Can it remove crowds from tourist photos?", answer: "Yes! Our AI is specifically designed to remove tourists and crowds from landmark photos, making it perfect for travel photography where you want clean, people-free shots." },
        { question: "Will it preserve the background?", answer: "Absolutely! Our advanced AI analyzes the scene and reconstructs what should be behind the people, creating natural-looking results that blend seamlessly with the original background." },
        { question: "Can I choose which people to keep?", answer: "Pro users can manually select which people to remove and which to keep, giving you full control over the final result." },
        { question: "Does it work with moving people?", answer: "Yes! Our AI can handle both static and moving people in photos. For best results, use images where people are clearly visible and not heavily overlapping." },
        { question: "What types of photos work best?", answer: "Best results come from outdoor scenes, landmarks, streets, and public spaces where people are clearly separated from the background. Indoor photos also work well." }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.hero}>
                        <SocialProof />
                        <h1 className={styles.title}>Auto remove <span className="gradient-text">people from photos</span></h1>
                        <p className={styles.description}>Automatically remove people and crowds from photos with AI. Get clean, tourist-free shots of landmarks and locations instantly.</p>
                        <CategoryTabs />
                        <div className={styles.uploadSection}>
                            <ImageUploader onImageUpload={handleImageUpload} />
                            {uploadedImage && !processedImage && (
                                <button className="btn btn-primary" onClick={handleProcess} disabled={isProcessing} style={{ marginTop: '1.5rem', width: '100%', maxWidth: '400px' }}>
                                    {isProcessing ? (<><span className={styles.spinner}></span>Processing...</>) : (<>Remove People<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></>)}
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
                            <h2 className={styles.sectionTitle}>AI People Removal – Clean Photos Automatically</h2>
                        </div>
                        <div className={styles.featureGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>👥</div>
                                <div className={styles.featureContent}>
                                    <p className={styles.sectionText}>Our advanced AI delivers powerful automatic people removal designed for effortless cleanup. By analyzing every pixel, the system can detect all people in your photos, remove tourists from landmarks, erase crowds from public spaces, and intelligently reconstruct backgrounds. Whether you want perfect travel photos or clean architectural shots, you always get smooth, natural, and people-free results every time without any manual work.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🏛️</div>
                                <div className={styles.featureContent}>
                                    <h3>Perfect for Travel Photography</h3>
                                    <p className={styles.sectionText}>Specifically designed for travel and landmark photography where crowds are unavoidable. Our AI excels at removing tourists from famous landmarks, cleaning up busy streets, and creating pristine shots of monuments and attractions. Perfect for creating professional-looking travel photos, real estate photography, or any situation where you need clean, crowd-free images of locations and buildings.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureImage}>🎯</div>
                                <div className={styles.featureContent}>
                                    <h3>Intelligent Scene Reconstruction</h3>
                                    <p className={styles.sectionText}>Our AI doesn't just erase people – it intelligently reconstructs the entire scene. Using advanced inpainting technology, the system analyzes architectural patterns, textures, and perspectives to seamlessly fill in areas where people were removed. The result is natural-looking photos that appear as if no one was ever there, perfect for creating clean, professional images of any location or landmark.</p>
                                    <button className="btn btn-primary">Get Started<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.howItWorks}>
                        <div style={{ textAlign: 'center' }}>
                            <span className={styles.badge}>HOW IT WORKS</span>
                            <h2 className={styles.sectionTitle}>Remove People in 3 Simple Steps</h2>
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>📤</div>
                                <h3 className={styles.stepTitle}>Upload your photo</h3>
                                <p className={styles.stepText}>Start by uploading any photo with unwanted people or crowds. Perfect for travel photos, landmarks, or any public space.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>🤖</div>
                                <h3 className={styles.stepTitle}>AI detects and removes people</h3>
                                <p className={styles.stepText}>Our AI automatically detects all people in the image and removes them while reconstructing the background seamlessly.</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepIcon}>⬇️</div>
                                <h3 className={styles.stepTitle}>Download clean photo</h3>
                                <p className={styles.stepText}>In seconds, your people-free photo is ready. Download and enjoy your clean, professional-looking image.</p>
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
