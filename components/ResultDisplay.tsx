'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface ResultDisplayProps {
    originalImage: string
    processedImage: string
    onDownload: () => void
    onGenerateNew: () => void
}

export default function ResultDisplay({
    originalImage,
    processedImage,
    onDownload,
    onGenerateNew
}: ResultDisplayProps) {
    const resultRef = useRef<HTMLDivElement>(null)
    const { language } = useLanguage()
    const t = translations[language]

    useEffect(() => {
        // Auto-scroll to results when component mounts with a small delay
        const timer = setTimeout(() => {
            if (resultRef.current) {
                try {
                    resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                } catch (error) {
                    // Ignore scroll errors
                    console.warn('Scroll error:', error)
                }
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div ref={resultRef} className="result-container">
            <div className="result-header">
                <div className="success-indicator">
                    <span className="success-dot"></span>
                    <span className="success-text">{t.resultDisplay.successMessage}</span>
                </div>
            </div>

            <div className="comparison-grid">
                <div className="comparison-column">
                    <span className="column-label">{t.resultDisplay.before}</span>
                    <div className="image-box">
                        <img src={originalImage} alt="Original" />
                    </div>
                </div>

                <div className="comparison-column">
                    <span className="column-label">{t.resultDisplay.after}</span>
                    <div className="image-box processed">
                        <img src={processedImage} alt="Processed" />
                        <div className="checkmark">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13l4 4L19 7" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="action-buttons">
                <button className="btn-download" onClick={onDownload}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 3L10 13M10 13L6 9M10 13L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {t.resultDisplay.downloadButton}
                </button>
                <button className="btn-generate-new" onClick={onGenerateNew}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M16 4l-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t.resultDisplay.generateNewButton}
                </button>
            </div>

            <style jsx>{`
                .result-container {
                    background: rgba(15, 15, 25, 0.4);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
                    border-radius: 1.5rem;
                    padding: 2rem;
                    margin-top: 2rem;
                    animation: slideIn 0.4s ease-out;
                    max-width: 100%;
                    width: 100%;
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .result-header {
                    margin-bottom: 1.5rem;
                }

                .success-indicator {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .success-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
                }

                .success-text {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #ffffff;
                    font-family: 'Inter', sans-serif;
                }

                .comparison-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .comparison-column {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .column-label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #d1d5db;
                    font-family: 'Inter', sans-serif;
                }

                .image-box {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    background: #1f2937;
                    border: 1px solid rgba(168, 85, 247, 0.3);
                }

                .image-box.processed {
                    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
                    border-color: #a855f7;
                    box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
                }

                .image-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .checkmark {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
                }

                .action-buttons {
                    display: flex;
                    gap: 1rem;
                }

                .btn-download {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%);
                    color: white;
                    padding: 0.875rem 1.5rem;
                    border-radius: 0.75rem;
                    border: none;
                    font-size: 0.9375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: 'Inter', sans-serif;
                    box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4);
                }

                .btn-download:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5);
                }

                .btn-generate-new {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    color: #ffffff;
                    padding: 0.875rem 1.5rem;
                    border-radius: 0.75rem;
                    border: 1px solid rgba(168, 85, 247, 0.5);
                    font-size: 0.9375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: 'Inter', sans-serif;
                }

                .btn-generate-new:hover {
                    transform: translateY(-2px);
                    background: rgba(168, 85, 247, 0.1);
                    border-color: #a855f7;
                    box-shadow: 0 4px 14px rgba(168, 85, 247, 0.3);
                }

                @media (max-width: 768px) {
                    .comparison-grid {
                        grid-template-columns: 1fr;
                    }

                    .action-buttons {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    )
}
