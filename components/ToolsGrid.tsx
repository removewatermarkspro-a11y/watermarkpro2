'use client'

import Link from 'next/link'
import styles from './ToolsGrid.module.css'

const tools = [
    {
        title: 'Free Watermark Remover',
        description: 'Our free watermark remover uses an advanced AI watermark remover to remove watermark from photo and clean images or videos. Get clean results in seconds thanks to precise watermark removal technology.',
        icon: '💧',
        href: '/'
    },
    {
        title: 'Remove Watermark from Video',
        description: 'With our watermark remover video, you can easily remove watermark from video, delete watermark from video or even remove TikTok watermark. The tool handles MP4, MOV, AVI and provides clean, natural rendering.',
        icon: '🎬',
        href: '/remove-watermark-video'
    },
    {
        title: 'Remove Text',
        description: 'Our AI detects and instantly erases any text thanks to its remove text from image system. It acts as a photo watermark remover capable of reconstructing complex areas while maintaining optimal image quality.',
        icon: '📝',
        href: '/remove-text'
    },
    {
        title: 'Remove Object',
        description: 'Easily erase any unwanted element with our image watermark remover, ideal for removing logos, objects or annoying elements. The AI watermark remover restores the background to deliver a clean, natural result.',
        icon: '🎯',
        href: '/remove-object'
    },
    {
        title: 'Replace Background',
        description: 'Thanks to our intelligent technology, change the background while preserving your subjects. Ideal for creators wanting to remove watermark from image and transform the scene effortlessly, in just seconds.',
        icon: '🎨',
        href: '/replace-background'
    },
    {
        title: 'Remove Background',
        description: 'Our tool automatically detects the subject and removes the background in one click. Combine this with our watermark removal or remove watermark from photo options to get a professional-ready visual.',
        icon: '✂️',
        href: '/remove-background'
    },
    {
        title: 'Auto Remove People',
        description: 'The AI can analyze the image and remove people automatically, just as it remove watermark from image or text. Perfect for cleaning photos, protecting privacy or preparing creative projects.',
        icon: '👥',
        href: '/auto-remove-people'
    },
    {
        title: 'Image Upscaler',
        description: 'Improve your photo resolution with our AI-based upscaler. It works perfectly after a watermark remover, allowing you to optimize an already cleaned file while maintaining excellent sharpness.',
        icon: '📈',
        href: '/image-upscaler'
    }
]

export default function ToolsGrid() {
    return (
        <section className={styles.toolsSection}>
            <div className="container">
                <h2 className={styles.title}>Explore Our Complete Suite of AI Tools</h2>

                <div className={styles.grid}>
                    {tools.map((tool, index) => (
                        <Link href={tool.href} key={index} className={styles.toolCard}>
                            <div className={styles.iconCircle}>
                                <span className={styles.icon}>{tool.icon}</span>
                            </div>
                            <h3 className={styles.toolTitle}>{tool.title}</h3>
                            <p className={styles.toolDescription}>{tool.description}</p>
                        </Link>
                    ))}
                </div>

                <div className={styles.ctaContainer}>
                    <Link href="/" className={styles.ctaButton}>
                        Get started for free
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
