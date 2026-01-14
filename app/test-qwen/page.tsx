'use client'

import { useState } from 'react'
import { useImageEdit } from '@/hooks/useImageEdit'
import { useAuth } from '@/contexts/AuthContext'
import styles from './test.module.css'

export default function TestQwenPage() {
    const { user, credits } = useAuth()
    const { editImage, isLoading, error, editedImageUrl, reset } = useImageEdit({
        operationType: 'watermark-remover',
        userId: user?.id
    })
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
            const reader = new FileReader()
            reader.onload = (e) => setPreview(e.target?.result as string)
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async () => {
        if (!selectedFile) return

        try {
            await editImage({ imageFile: selectedFile })
        } catch (err) {
            console.error('Error:', err)
        }
    }

    const handleReset = () => {
        setSelectedFile(null)
        setPreview(null)
        reset()
    }

    return (
        <div className={styles.container}>
            <h1>Test Qwen API - Watermark Remover</h1>

            {user ? (
                <div className={styles.userInfo}>
                    <p>✅ Connecté: {user.email}</p>
                    <p>💰 Crédits: {credits}</p>
                </div>
            ) : (
                <p className={styles.warning}>⚠️ Vous devez être connecté</p>
            )}

            <div className={styles.uploadSection}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={isLoading}
                />

                {preview && (
                    <div className={styles.preview}>
                        <h3>Image originale:</h3>
                        <img src={preview} alt="Original" loading="lazy" decoding="async" />
                    </div>
                )}

                {selectedFile && !editedImageUrl && (
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading || !user}
                        className={styles.button}
                    >
                        {isLoading ? '⏳ Traitement en cours...' : '🚀 Enlever le filigrane'}
                    </button>
                )}
            </div>

            {isLoading && (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>L'IA traite votre image... Cela peut prendre 10-30 secondes.</p>
                </div>
            )}

            {error && (
                <div className={styles.error}>
                    <p>❌ Erreur: {error}</p>
                </div>
            )}

            {editedImageUrl && (
                <div className={styles.result}>
                    <h3>✨ Image éditée:</h3>
                    <img src={editedImageUrl} alt="Edited" loading="lazy" decoding="async" />
                    <div className={styles.actions}>
                        <a
                            href={editedImageUrl}
                            download="edited-image.webp"
                            className={styles.button}
                        >
                            📥 Télécharger
                        </a>
                        <button onClick={handleReset} className={styles.button}>
                            🔄 Nouvelle image
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
