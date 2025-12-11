'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

interface FAQItem {
    question: string
    answer: string
}

interface FAQProps {
    items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const { language } = useLanguage()
    const t = translations[language]

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className={styles.faq}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <span className={styles.badge}>FAQ</span>
                    <h2 className={styles.title}>
                        {t.faq.title}
                    </h2>
                </div>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
                            onClick={() => toggleItem(index)}
                        >
                            <div className={styles.questionWrapper}>
                                <h3 className={styles.question}>{item.question}</h3>
                                <svg
                                    className={styles.icon}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className={styles.answerWrapper}>
                                <p className={styles.answer}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
