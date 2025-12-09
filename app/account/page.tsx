'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CancelSubscriptionPopup from '@/components/CancelSubscriptionPopup'
import styles from './account.module.css'

export default function Account() {
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [billingCycle, setBillingCycle] = useState({ start: '', end: '' })
    const [showCancelPopup, setShowCancelPopup] = useState(false)
    const [planType, setPlanType] = useState<'free' | 'pro'>('free')
    const [planPrice, setPlanPrice] = useState('$0.00')

    useEffect(() => {
        // Load user data from localStorage
        const email = localStorage.getItem('userEmail') || 'user@example.com'
        const name = email.split('@')[0]
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1)

        setUserEmail(email)
        setUserName(formattedName)

        // Check plan type
        const userPlan = localStorage.getItem('userPlan') || 'free'
        setPlanType(userPlan as 'free' | 'pro')

        if (userPlan === 'pro') {
            setPlanPrice('$9.99')
        } else {
            setPlanPrice('$0.00')
        }

        // Calculate billing cycle based on registration date
        const registrationDate = localStorage.getItem('userRegistrationDate')
        let startDate: Date

        if (registrationDate) {
            startDate = new Date(registrationDate)
        } else {
            // If no registration date, use current date and save it
            startDate = new Date()
            localStorage.setItem('userRegistrationDate', startDate.toISOString())
        }

        const endDate = new Date(startDate)
        endDate.setMonth(endDate.getMonth() + 1)

        const formatDate = (date: Date) => {
            const day = date.getDate()
            const month = date.toLocaleString('en-US', { month: 'short' })
            const year = date.getFullYear()
            return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`
        }

        const getOrdinalSuffix = (day: number) => {
            if (day > 3 && day < 21) return 'th'
            switch (day % 10) {
                case 1: return 'st'
                case 2: return 'nd'
                case 3: return 'rd'
                default: return 'th'
            }
        }

        setBillingCycle({
            start: formatDate(startDate),
            end: formatDate(endDate)
        })
    }, [])

    const handleCancelSubscription = () => {
        // Cancel the subscription
        localStorage.setItem('userPlan', 'free')
        setPlanType('free')
        setPlanPrice('$0.00')
        setShowCancelPopup(false)

        // Optionally show a success message
        alert('Your subscription has been cancelled. You will continue to have access until ' + billingCycle.end)
    }

    const getInitial = () => {
        return userName.charAt(0).toUpperCase() || 'U'
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.accountContainer}>
                        {/* Subscription Section */}
                        <div className={styles.subscriptionSection}>
                            <h1 className={styles.planTitle}>{planType === 'pro' ? 'Pro' : 'Free'}</h1>
                            <div className={styles.billingInfo}>
                                <div className={styles.billingItem}>
                                    <span className={styles.billingLabel}>Pricing</span>
                                    <span className={styles.billingValue}>{planPrice}/month</span>
                                </div>
                                <div className={styles.billingItem}>
                                    <span className={styles.billingLabel}>Current billing cycle</span>
                                    <span className={styles.billingValue}>{billingCycle.start} - {billingCycle.end}</span>
                                </div>
                            </div>
                            <div className={styles.actionButtons}>
                                <Link href="/pricing" className={styles.changePlanBtn}>
                                    Change Plan
                                </Link>
                                <button className={styles.cancelSubBtn} onClick={() => setShowCancelPopup(true)}>
                                    Cancel Subscription
                                </button>
                            </div>
                            <div className={styles.warningMessage}>
                                Your {planType === 'pro' ? 'Pro' : 'free'} Remove watermark pro subscription ends on {billingCycle.end} - upgrade now to continue enjoying our services!
                            </div>
                        </div>

                        {/* User Profile Section */}
                        <div className={styles.profileSection}>
                            <h2 className={styles.sectionTitle}>Mon compte</h2>
                            <div className={styles.profileContent}>
                                <div className={styles.avatarContainer}>
                                    <div className={styles.avatar}>{getInitial()}</div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Nom</label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        value={userName}
                                        readOnly
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>E-mail</label>
                                    <input
                                        type="email"
                                        className={styles.formInput}
                                        value={userEmail}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <CancelSubscriptionPopup
                isOpen={showCancelPopup}
                onClose={() => setShowCancelPopup(false)}
                onConfirm={handleCancelSubscription}
            />
        </>
    )
}
