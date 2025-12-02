'use client'

import { useState, useCallback } from 'react'
import styles from './ImageUploader.module.css'

interface ImageUploaderProps {
    onImageUpload: (file: File) => void
    acceptedFormats?: string
}

export default function ImageUploader({
    onImageUpload,
    acceptedFormats = 'image/jpeg,image/png,image/webp,image/jpg'
}: ImageUploaderProps) {
    const [isDragging, setIsDragging] = useState(false)
    const [preview, setPreview] = useState<string | null>(null)

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

        const files = e.dataTransfer.files
        if (files.length > 0) {
            handleFile(files[0])
        }
    }, [])

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            handleFile(files[0])
        }
    }, [])

    const handleFile = (file: File) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setPreview(e.target?.result as string)
            }
            reader.readAsDataURL(file)
            onImageUpload(file)
        }
    }

    return (
        <div className={styles.uploader}>
            <div
                className={`${styles.dropzone} ${isDragging ? styles.dragging : ''} ${preview ? styles.hasImage : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {preview ? (
                    <div className={styles.preview}>
                        <img src={preview} alt="Preview" loading="lazy" />
                        <button
                            className={styles.removeBtn}
                            onClick={() => {
                                setPreview(null)
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.uploadIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4L12 16M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 className={styles.title}>Drag your image here</h3>
                        <p className={styles.subtitle}>or click to browse</p>
                        <p className={styles.formats}>JPG, PNG, WEBP up to 10MB</p>
                    </>
                )}
                <input
                    type="file"
                    accept={acceptedFormats}
                    onChange={handleFileInput}
                    className={styles.fileInput}
                />
            </div>
        </div>
    )
}
