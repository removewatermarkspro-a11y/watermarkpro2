'use client'

import { useState } from 'react'
import styles from './Pricing.module.css'

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true)
    const [selectedCredits, setSelectedCredits] = useState(2400)

    const creditOptions = [
        { credits: 1200, label: '1200', yearlyPrice: 6.90, monthlyPrice: 13.80 },
        { credits: 2400, label: '2400', yearlyPrice: 9.90, monthlyPrice: 19.80 },
        { credits: 6000, label: '6000', yearlyPrice: 22.90, monthlyPrice: 45.80 },
        { credits: 12000, label: '12000', yearlyPrice: 39.90, monthlyPrice: 79.80 }
    ]

    const getCurrentPrice = () => {
        const option = creditOptions.find(opt => opt.credits === selectedCredits)
        if (!option) return { price: 9.90, yearlyTotal: 118.80 }

        const price = isYearly ? option.yearlyPrice : option.monthlyPrice
        const yearlyTotal = option.yearlyPrice * 12

        return { price, yearlyTotal }
    }

    const { price, yearlyTotal } = getCurrentPrice()

    return (
        <section className={styles.pricing}>
            <h2 className={styles.title}>Simple and transparent pricing</h2>
            <p className={styles.subtitle}>Choose the plan that fits your needs</p>

            <div className={styles.plans}>
                {/* Free Plan */}
                <div className={styles.plan}>
                    <h3 className={styles.planTitle}>Free</h3>
                    <p className={styles.planSubtitle}>Perfect to try</p>

                    <div className={styles.planPrice}>
                        <span className={styles.price}>Free</span>
                    </div>

                    <p className={styles.creditInfo}>1 free credit</p>

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

                    <button className={styles.freeButton}>
                        Try for free
                    </button>
                </div>

                {/* Pro Plan */}
                <div className={`${styles.plan} ${styles.proPlan}`}>
                    <div className={styles.popularBadge}>Most popular</div>

                    <h3 className={styles.planTitle}>Pro Pack</h3>

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
                            Yearly payment {isYearly && <span className={styles.discount}>-50%</span>}
                        </span>
                    </div>

                    <div className={styles.planPrice}>
                        <span className={styles.price}>${price.toFixed(2)}</span>
                        <span className={styles.period}>/month</span>
                    </div>

                    {isYearly && (
                        <p className={styles.yearlyPrice}>${yearlyTotal.toFixed(2)} /year</p>
                    )}

                    <div className={styles.creditSelector}>
                        {creditOptions.map((option) => (
                            <button
                                key={option.credits}
                                className={`${styles.creditOption} ${selectedCredits === option.credits ? styles.creditOptionActive : ''}`}
                                onClick={() => setSelectedCredits(option.credits)}
                            >
                                <span className={styles.creditAmount}>{option.label}</span>
                                <span className={styles.creditLabel}>credits</span>
                            </button>
                        ))}
                    </div>

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

                    <button className={styles.proButton}>
                        Get Pro ${price.toFixed(2)}
                    </button>
                </div>
            </div>
        </section>
    )
}
