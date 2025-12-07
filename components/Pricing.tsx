'use client'

import { useState } from 'react'
import styles from './Pricing.module.css'

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true)
    const [selectedCredits, setSelectedCredits] = useState(1200)

    const creditOptions = [
        { credits: 1200, monthlyCredits: 100, label: isYearly ? '1200' : '100', yearlyPrice: 5.50, monthlyPrice: 10.90 },
        { credits: 2400, monthlyCredits: 200, label: isYearly ? '2400' : '200', yearlyPrice: 8.50, monthlyPrice: 16.90 },
        { credits: 6000, monthlyCredits: 500, label: isYearly ? '6000' : '500', yearlyPrice: 13, monthlyPrice: 25.90 },
        { credits: 12000, monthlyCredits: 1000, label: isYearly ? '12000' : '1000', yearlyPrice: 15, monthlyPrice: 29.90 }
    ]

    const getCurrentPrice = () => {
        const option = creditOptions.find(opt => opt.credits === selectedCredits)
        if (!option) return { price: 9.90, yearlyTotal: 118.80, pricePerImage: 0.05, currentCredits: 2400 }

        const price = isYearly ? option.yearlyPrice : option.monthlyPrice
        const yearlyTotal = option.yearlyPrice * 12
        const currentCredits = isYearly ? option.credits : option.monthlyCredits
        const pricePerImage = price / currentCredits

        return { price, yearlyTotal, pricePerImage, currentCredits }
    }

    const { price, yearlyTotal, pricePerImage, currentCredits } = getCurrentPrice()

    return (
        <section className={styles.pricing}>
            <h2 className={styles.title}>Simple and transparent pricing</h2>
            <p className={styles.subtitle}>Choose the plan that fits your needs</p>

            <div className={styles.plans}>
                {/* Free Plan */}
                <div className={styles.plan}>
                    <div className={styles.planHeader}>
                        <h3 className={styles.planTitle}>Free</h3>
                        <p className={styles.planSubtitle}>Perfect to try</p>

                        <div className={styles.planPrice}>
                            <span className={styles.price}>Free</span>
                        </div>

                        <p className={styles.creditInfo}>1 free credit</p>
                    </div>

                    <button className={styles.freeButton}>
                        Try for free
                    </button>

                    <ul className={styles.features}>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            High quality exports
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Web & mobile access
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Privacy-friendly processing
                        </li>
                    </ul>
                </div>

                {/* Pro Plan */}
                <div className={`${styles.plan} ${styles.proPlan}`}>
                    <div className={styles.popularBadge}>Most popular</div>
                    <div className={styles.discountBadge}>25%<br />OFF</div>
                    <div className={styles.planHeader}>
                        <h3 className={styles.planTitle}>Pro Plan</h3>

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
                                Pay Yearly {isYearly && <span className={styles.discount}>-50%</span>}
                            </span>
                        </div>

                        <div className={styles.planPrice}>
                            <span className={styles.price}>${price.toFixed(2)}</span>
                            <span className={styles.period}>/month</span>
                            {!isYearly && <span className={styles.strikethrough}>${(price * 1.33).toFixed(2)}</span>}
                        </div>

                        <div className={styles.creditSelector}>
                            {creditOptions.map((option) => (
                                <button
                                    key={option.credits}
                                    className={`${styles.creditOption} ${selectedCredits === option.credits ? styles.creditOptionActive : ''}`}
                                    onClick={() => setSelectedCredits(option.credits)}
                                >
                                    <span className={styles.creditAmount}>{isYearly ? option.credits : option.monthlyCredits}</span>
                                    <span className={styles.creditLabel}>credits</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className={styles.proButton}>
                        Get Pro now <span className={styles.buttonPrice}>${isYearly ? Math.round(price * 12) : price.toFixed(2)}</span>
                    </button>

                    <ul className={styles.features}>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Just ${pricePerImage.toFixed(3)} per image
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            All our tools pro
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            No ads
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            High quality exports
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Web & mobile access
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Privacy-friendly processing
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
