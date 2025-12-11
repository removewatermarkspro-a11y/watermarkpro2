'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface Tool {
    title: string
    description: string
    link: string
}

export default function RelatedTools() {
    const { language } = useLanguage()
    const t = translations[language]

    const tools: Tool[] = [
        {
            title: t.relatedTools.tool1.title,
            description: t.relatedTools.tool1.description,
            link: "/remove-object"
        },
        {
            title: t.relatedTools.tool2.title,
            description: t.relatedTools.tool2.description,
            link: "/remove-background"
        },
        {
            title: t.relatedTools.tool3.title,
            description: t.relatedTools.tool3.description,
            link: "/replace-background"
        }
    ]

    return (
        <div className="related-tools">
            <div className="tools-header">
                <div className="header-text">
                    <h3>{t.relatedTools.title}</h3>
                    <p>{t.relatedTools.subtitle}</p>
                </div>
            </div>

            <div className="tools-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                        <div className="tool-content">
                            <h4>{tool.title}</h4>
                            <p>{tool.description}</p>
                        </div>
                        <a href={tool.link} className="tool-button">
                            {t.relatedTools.tryNowButton}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .related-tools {
                    background: rgba(15, 15, 25, 0.4);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
                    border-radius: 1.5rem;
                    padding: 2rem;
                    margin-top: 2rem;
                    max-width: 100%;
                    width: 100%;
                }

                .tools-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .header-icon {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%);
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
                }

                .header-text h3 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 0.25rem 0;
                    font-family: 'Inter', sans-serif;
                }

                .header-text p {
                    font-size: 0.875rem;
                    color: #d1d5db;
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                }

                .tools-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }

                .tool-card {
                    background: rgba(31, 41, 55, 0.5);
                    border: 1px solid rgba(168, 85, 247, 0.3);
                    border-radius: 0.75rem;
                    padding: 1.25rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    transition: all 0.2s;
                }

                .tool-card:hover {
                    background: rgba(31, 41, 55, 0.7);
                    border-color: rgba(168, 85, 247, 0.6);
                    transform: translateY(-2px);
                    box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
                }

                .tool-content h4 {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #ffffff;
                    margin: 0 0 0.25rem 0;
                    font-family: 'Inter', sans-serif;
                }

                .tool-content p {
                    font-size: 0.875rem;
                    color: #d1d5db;
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                }

                .tool-button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%);
                    color: white;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    border: none;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: 'Inter', sans-serif;
                    text-decoration: none;
                    box-shadow: 0 2px 8px rgba(168, 85, 247, 0.3);
                }

                .tool-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
                }

                .tool-button svg {
                    width: 16px;
                    height: 16px;
                }

                @media (max-width: 768px) {
                    .tools-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    )
}
