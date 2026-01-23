'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import styles from './ImageUploader.module.css'
import ProcessingPopup from './ProcessingPopup'
import NoCreditsPopup from './NoCreditsPopup'
import { useAuth } from '@/contexts/AuthContext'
import { consumeCredit } from '@/lib/supabase'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import { OperationType } from '@/lib/replicate'

interface ImageUploaderProps {
    onImageUpload: (file: File, preview: string) => void
    acceptedFormats?: string
    uploadText?: string
    formatText?: string
    processingText?: string
    isAuthenticated?: boolean
    onAuthRequired?: () => void
    operationType?: OperationType // Type of operation (watermark-remover, remove-text, etc.)
    userPrompt?: string // For remove-object and replace-background operations
}

export default function ImageUploader({
    onImageUpload,
    acceptedFormats = 'image/jpeg,image/png,image/webp,image/jpg',
    uploadText,
    formatText,
    processingText,
    isAuthenticated = true,
    onAuthRequired,
    operationType = 'watermark-remover',
    userPrompt
}: ImageUploaderProps) {
    const [isDragging, setIsDragging] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [showNoCreditsPopup, setShowNoCreditsPopup] = useState(false)
    const { user, credits, refreshCredits, getAccessToken } = useAuth()
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en
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

        // Check credits before processing
        if (!credits || credits < 1) {
            console.log('[ImageUploader] Insufficient credits, showing NoCreditsPopup')
            setShowNoCreditsPopup(true)
            return
        }

        // Handle video files - pass directly without API processing
        if (file.type.startsWith('video/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const videoUrl = e.target?.result as string
                onImageUpload(file, videoUrl)
            }
            reader.readAsDataURL(file)
            return
        }

        // Handle image files - process through API
        if (file.type.startsWith('image/')) {
            // Show processing popup
            setIsProcessing(true)

            try {
                // Convert file to base64
                const reader = new FileReader()
                reader.onload = async (e) => {
                    const imageBase64 = e.target?.result as string

                    try {
                        // Get access token for authentication
                        const token = await getAccessToken()
                        if (!token) {
                            console.error('[ImageUploader] No access token available')
                            setIsProcessing(false)
                            return
                        }

                        // Call the Replicate API with Authorization header
                        const response = await fetch('/api/edit-image', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                                imageBase64,
                                operationType,
                                userPrompt,
                            }),
                        })

                        const result = await response.json()

                        console.log('[ImageUploader] API response:', result)
                        console.log('[ImageUploader] Image URL:', result.imageUrl)

                        if (result.success && result.imageUrl) {
                            // Refresh credits in UI
                            await refreshCredits()

                            setIsProcessing(false)
                            // Pass the processed image URL to parent
                            console.log('[ImageUploader] Calling onImageUpload with URL:', result.imageUrl)
                            onImageUpload(file, result.imageUrl)
                        } else {
                            console.error('[ImageUploader] API error:', result.error)
                            setIsProcessing(false)
                            // If error is about credits, show no credits popup
                            if (response.status === 402) {
                                setShowNoCreditsPopup(true)
                            } else {
                                // For now, fallback to original image on error
                                onImageUpload(file, imageBase64)
                            }
                        }
                    } catch (apiError) {
                        console.error('[ImageUploader] API call failed:', apiError)
                        setIsProcessing(false)
                        // Fallback to original image on error
                        onImageUpload(file, e.target?.result as string)
                    }
                }
                reader.readAsDataURL(file)
            } catch (error) {
                console.error('[ImageUploader] Error processing file:', error)
                setIsProcessing(false)
            }
        }
    }

    return (
        <>
            <ProcessingPopup isOpen={isProcessing} processingText={processingText} />
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
