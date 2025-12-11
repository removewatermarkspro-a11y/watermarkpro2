'use client'

import { useState, useCallback } from 'react'
import styles from './ImageUploader.module.css'
import ProcessingPopup from './ProcessingPopup'
import NoCreditsPopup from './NoCreditsPopup'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface ImageUploaderProps {
    onImageUpload: (file: File, preview: string) => void
    acceptedFormats?: string
    uploadText?: string
    formatText?: string
    isAuthenticated?: boolean
    onAuthRequired?: () => void
}

export default function ImageUploader({
    onImageUpload,
    acceptedFormats = 'image/jpeg,image/png,image/webp,image/jpg',
    uploadText = 'Drag your image here',
    formatText = 'JPG, PNG, WEBP up to 10MB',
    isAuthenticated = true,
    onAuthRequired
}: ImageUploaderProps) {
    const [isDragging, setIsDragging] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [showNoCreditsPopup, setShowNoCreditsPopup] = useState(false)
    const { language } = useLanguage()
    const t = translations[language]

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        if (!isAuthenticated && onAuthRequired) {
            onAuthRequired()
            return
        }

        const files = e.dataTransfer.files
        if (files.length > 0) {
            handleFile(files[0])
        }
    }, [isAuthenticated, onAuthRequired])

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isAuthenticated && onAuthRequired) {
            onAuthRequired()
            e.target.value = '' // Reset file input
            return
        }

        const files = e.target.files
        if (files && files.length > 0) {
            handleFile(files[0])
        }
    }, [isAuthenticated, onAuthRequired])

    const handleFile = (file: File) => {
        if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
            // Check if user has credits
            const credits = parseInt(localStorage.getItem('userCredits') || '0')

            if (credits > 0) {
                // Consume 1 credit
                const newCredits = credits - 1
                localStorage.setItem('userCredits', newCredits.toString())

                // Notify Header about credit change
                window.dispatchEvent(new Event('authStateChanged'))

                // Show processing popup
                setIsProcessing(true)

                // Process the file after 6 seconds
                const reader = new FileReader()
                reader.onload = (e) => {
                    setTimeout(() => {
                        const preview = e.target?.result as string
                        setIsProcessing(false)
                        onImageUpload(file, preview)
                    }, 6000)
                }
                reader.readAsDataURL(file)
            } else {
                // No credits left - show NoCreditsPopup
                setShowNoCreditsPopup(true)
            }
        }
    }

    return (
        <>
            <ProcessingPopup isOpen={isProcessing} />
            <NoCreditsPopup isOpen={showNoCreditsPopup} onClose={() => setShowNoCreditsPopup(false)} />
            <div className={styles.uploader}>
                <div
                    className={`${styles.dropzone} ${isDragging ? styles.dragging : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className={styles.uploadIcon}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4L12 16M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className={styles.title}>{t.imageUploader.dragImageHere}</h3>
                    <p className={styles.subtitle}>{t.imageUploader.clickToBrowse}</p>
                    <p className={styles.formats}>{formatText}</p>
                    <input
                        type="file"
                        accept={acceptedFormats}
                        onChange={handleFileInput}
                        className={styles.fileInput}
                    />
                </div>
            </div>
        </>
    )
}
