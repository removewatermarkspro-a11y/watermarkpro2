'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import styles from './ImageUploader.module.css'
import ProcessingPopup from './ProcessingPopup'
import NoCreditsPopup from './NoCreditsPopup'
import { useAuth } from '@/contexts/AuthContext'
import { consumeCredit } from '@/lib/supabase'
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
    uploadText,
    formatText,
    isAuthenticated = true,
    onAuthRequired
}: ImageUploaderProps) {
    const [isDragging, setIsDragging] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [showNoCreditsPopup, setShowNoCreditsPopup] = useState(false)
    const { user, credits, refreshCredits } = useAuth()
    const { language } = useLanguage()
    const t = translations[language]
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Debug: Log auth state on mount and when it changes
    useEffect(() => {
        console.log('[ImageUploader] Auth state changed - user:', user, 'credits:', credits, 'onAuthRequired:', !!onAuthRequired)
    }, [user, credits, onAuthRequired])

    const handleClick = useCallback((e: React.MouseEvent) => {
        console.log('[ImageUploader] handleClick - user:', user, 'onAuthRequired:', !!onAuthRequired)

        if (!user && onAuthRequired) {
            console.log('[ImageUploader] User not authenticated, triggering auth popup')
            e.preventDefault()
            e.stopPropagation()
            onAuthRequired()
            return false
        }

        // User is authenticated, allow file input to be triggered
        console.log('[ImageUploader] User authenticated, opening file dialog')
    }, [user, onAuthRequired])

    const handleFileInputClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
        console.log('[ImageUploader] handleFileInputClick - user:', user)

        if (!user && onAuthRequired) {
            console.log('[ImageUploader] Preventing file input, user not authenticated')
            e.preventDefault()
            e.stopPropagation()
            onAuthRequired()
            return false
        }
    }, [user, onAuthRequired])

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

        console.log('[ImageUploader] handleDrop - user:', user, 'onAuthRequired:', !!onAuthRequired)

        if (!user && onAuthRequired) {
            console.log('[ImageUploader] User not authenticated, triggering auth popup')
            onAuthRequired()
            return
        }

        const files = e.dataTransfer.files
        if (files.length > 0) {
            handleFile(files[0])
        }
    }, [user, onAuthRequired])

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('[ImageUploader] handleFileInput - user:', user, 'onAuthRequired:', !!onAuthRequired)

        if (!user && onAuthRequired) {
            console.log('[ImageUploader] User not authenticated, triggering auth popup')
            onAuthRequired()
            e.target.value = '' // Reset file input
            return
        }

        const files = e.target.files
        if (files && files.length > 0) {
            handleFile(files[0])
        }
    }, [user, onAuthRequired])

    const handleFile = async (file: File) => {
        if (!user) {
            if (onAuthRequired) onAuthRequired()
            return
        }

        if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
            // Check if user has credits
            if (credits > 0) {
                // Show processing popup
                setIsProcessing(true)

                // Consume credit from database
                const operationType = file.type.startsWith('video/') ? 'video_watermark_removal' : 'watermark_removal'
                const success = await consumeCredit(user.id, operationType, file.size)

                if (success) {
                    // Refresh credits in UI
                    await refreshCredits()

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
                    setIsProcessing(false)
                    // Failed to consume credit - show no credits popup
                    setShowNoCreditsPopup(true)
                }
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
                    onClick={handleClick}
                >
                    <div className={styles.uploadIcon}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4L12 16M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className={styles.title}>{uploadText || t.imageUploader.uploadText}</h3>
                    <p className={styles.subtitle}>{t.imageUploader.clickToBrowse}</p>
                    <p className={styles.formats}>{formatText || t.imageUploader.formatText}</p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept={acceptedFormats}
                        onChange={handleFileInput}
                        onClick={handleFileInputClick}
                        className={styles.fileInput}
                    />
                </div>
            </div>
        </>
    )
}
