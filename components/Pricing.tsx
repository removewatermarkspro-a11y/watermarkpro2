'use client'

import { useState } from 'react'
import styles from './Pricing.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true)
    const [selectedCredits, setSelectedCredits] = useState(1200)
    const { language } = useLanguage()
    const t = translations[language]

    const creditOptions = [
        { credits: 1200, monthlyCredits: 100, label: isYearly ? '1200' : '100', yearlyPrice: 44.90, monthlyPrice: 6.90 },
        { credits: 2400, monthlyCredits: 200, label: isYearly ? '2400' : '200', yearlyPrice: 69.90, monthlyPrice: 9.90 },
        { credits: 6000, monthlyCredits: 500, label: isYearly ? '6000' : '500', yearlyPrice: 99.90, monthlyPrice: 14.90 },
        { credits: 12000, monthlyCredits: 1000, label: isYearly ? '12000' : '1000', yearlyPrice: 139.90, monthlyPrice: 19.90 }
    ]

    const oneTimeOptions = [
        { credits: 50, price: 7.90 },
        { credits: 200, price: 23.90 },
        { credits: 500, price: 54.90 },
        { credits: 1000, price: 84.90 }
    ]

    const [selectedOneTimeCredits, setSelectedOneTimeCredits] = useState(50)

    const getCurrentPrice = () => {
        const option = creditOptions.find(opt => opt.credits === selectedCredits)
        if (!option) return { price: 9.90, yearlyTotal: 118.80, pricePerImage: 0.05, currentCredits: 2400, monthlyFromYearly: 3.74 }

        const price = isYearly ? option.yearlyPrice : option.monthlyPrice
        const yearlyTotal = option.yearlyPrice
        const monthlyFromYearly = option.yearlyPrice / 12
        const currentCredits = isYearly ? option.credits : option.monthlyCredits
        const pricePerImage = (isYearly ? monthlyFromYearly : price) / currentCredits

        return { price, yearlyTotal, pricePerImage, currentCredits, monthlyFromYearly }
    }

    const { price, yearlyTotal, pricePerImage, currentCredits, monthlyFromYearly } = getCurrentPrice()

    return (
        <section className={styles.pricing}>
            <h2 className={styles.title}>{t.pricing.title}</h2>
            <p className={styles.subtitle}>{t.pricing.subtitle}</p>

            <div className={styles.plans}>
                {/* Free Plan */}
                <div className={styles.plan}>
                    <div className={styles.planHeader}>
                        <h3 className={styles.planTitle}>{t.pricing.free.title}</h3>
                        <p className={styles.planSubtitle}>{t.pricing.free.subtitle}</p>

                        <div className={styles.planPrice}>
                            <span className={styles.price}>{t.pricing.free.price}</span>
                        </div>

                        <p className={styles.creditInfo}>{t.pricing.free.creditInfo}</p>
                    </div>

                    <button className={styles.freeButton}>
                        {t.pricing.free.button}
                    </button>

                    <ul className={styles.features}>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.free.features.highQuality}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.free.features.webMobile}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.free.features.privacy}
                        </li>
                    </ul>
                </div>

                {/* Pro Plan */}
                <div className={`${styles.plan} ${styles.proPlan}`}>
                    <div className={styles.popularBadge}>{t.pricing.pro.badge}</div>
                    <div className={styles.discountBadge}>25%<br />OFF</div>
                    <div className={styles.planHeader}>
                        <h3 className={styles.planTitle}>{t.pricing.pro.title}</h3>

                        <div className={styles.toggle}>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={() => setIsYearly(!isYearly)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                            <span className={styles.toggleLabel}>
                                {t.pricing.pro.payYearly} {isYearly && <span className={styles.discount}>{t.pricing.pro.discountLabel}</span>}
                            </span>
                        </div>

                        <div className={styles.planPrice}>
                            <span className={styles.price}>${isYearly ? monthlyFromYearly.toFixed(2) : price.toFixed(2)}</span>
                            <span className={styles.period}>{t.pricing.pro.perMonth}</span>
                            {!isYearly && <span className={styles.strikethrough}>${(price * 2).toFixed(2)}</span>}
                        </div>

                        <div className={styles.creditSelector}>
                            {creditOptions.map((option) => (
                                <button
                                    key={option.credits}
                                    className={`${styles.creditOption} ${selectedCredits === option.credits ? styles.creditOptionActive : ''}`}
                                    onClick={() => setSelectedCredits(option.credits)}
                                >
                                    <span className={styles.creditAmount}>{isYearly ? option.credits : option.monthlyCredits}</span>
                                    <span className={styles.creditLabel}>{t.pricing.pro.credits}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className={styles.proButton}>
                        {t.pricing.pro.button} <span className={styles.buttonPrice}>${isYearly ? yearlyTotal.toFixed(2) : price.toFixed(2)}</span>
                    </button>

                    <ul className={styles.features}>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.pricePerImage.replace('{{price}}', pricePerImage.toFixed(3))}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.allTools}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.noAds}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.highQuality}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.webMobile}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.privacy}
                        </li>
                    </ul>
                </div>

                {/* One Time Payment */}
                <div className={styles.plan}>
                    <div className={styles.planHeader}>
                        <h3 className={styles.planTitle}>{t.pricing.oneTime.title}</h3>
                        <p className={styles.planSubtitle}>{t.pricing.oneTime.subtitle}</p>

                        <div className={styles.planPrice}>
                            <span className={styles.price}>${oneTimeOptions.find(opt => opt.credits === selectedOneTimeCredits)?.price.toFixed(2) || '7.90'}</span>
                        </div>

                        <div className={styles.creditSelector}>
                            {oneTimeOptions.map((option) => (
                                <button
                                    key={option.credits}
                                    className={`${styles.creditOption} ${selectedOneTimeCredits === option.credits ? styles.creditOptionActive : ''}`}
                                    onClick={() => setSelectedOneTimeCredits(option.credits)}
                                >
                                    <span className={styles.creditAmount}>{option.credits}</span>
                                    <span className={styles.creditLabel}>{t.pricing.oneTime.credits}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className={styles.proButton}>
                        {t.pricing.oneTime.button}
                    </button>

                    <ul className={styles.features}>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.allTools}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.pro.features.noAds}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {t.pricing.free.features.highQuality}
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Web & mobile access
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
