'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CancelSubscriptionPopup from '@/components/CancelSubscriptionPopup'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from './account.module.css'

export default function Account() {
    const { user } = useAuth()
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [billingCycle, setBillingCycle] = useState({ start: '', end: '' })
    const [showCancelPopup, setShowCancelPopup] = useState(false)
    const [planType, setPlanType] = useState<'free' | 'pro'>('free')
    const [planPrice, setPlanPrice] = useState('$0.00')

    useEffect(() => {
        if (!user) return

        // Get user data from Supabase Auth
        const email = user.email || 'user@example.com'
        const name = email.split('@')[0]
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1)

        setUserEmail(email)
        setUserName(formattedName)

        // Check plan type (still using localStorage for now, can be migrated to Supabase later)
        const userPlan = localStorage.getItem('userPlan') || 'free'
        setPlanType(userPlan as 'free' | 'pro')

        if (userPlan === 'pro') {
            setPlanPrice('$9.99')
        } else {
            setPlanPrice('$0.00')
        }

        // Calculate billing cycle based on user creation date from Supabase
        const createdAt = user.created_at ? new Date(user.created_at) : new Date()
        const startDate = createdAt
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
    }, [user])

    const handleCancelSubscription = () => {
        // Cancel the subscription
        localStorage.setItem('userPlan', 'free')
        setPlanType('free')
        setPlanPrice('$0.00')
        setShowCancelPopup(false)

        // Optionally show a success message
        alert('Your subscription has been cancelled. You will continue to have access until ' + billingCycle.end)
    }

    const handleAcceptPromo = () => {
        // Apply 20% discount
        const discountedPrice = planType === 'pro' ? '$7.99' : '$7.99'
        alert(`Great! You keep your subscription with 20% off. New price: ${discountedPrice}/month for the next month!`)
        setShowCancelPopup(false)
        // In a real app, you would update the subscription with the promotional price
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
                                    <span className={styles.billingLabel}>{t.accountPage.pricing}</span>
                                    <span className={styles.billingValue}>{planPrice}/month</span>
                                </div>
                                <div className={styles.billingItem}>
                                    <span className={styles.billingLabel}>{t.accountPage.billingCycle}</span>
                                    <span className={styles.billingValue}>{billingCycle.start} - {billingCycle.end}</span>
                                </div>
                            </div>
                            <div className={styles.actionButtons}>
                                <Link href={language === 'fr' ? '/fr/tarifs' : language === 'de' ? '/de/preise' : language === 'es' ? '/es/precios' : language === 'pt' ? '/pt/precos' : language === 'ko' ? '/ko/pricing' : language === 'no' ? '/no/priser' : '/pricing'} className={styles.changePlanBtn}>
                                    {t.accountPage.changePlan}
                                </Link>
                                <button className={styles.cancelSubBtn} onClick={() => setShowCancelPopup(true)}>
                                    {t.accountPage.cancelSubscription}
                                </button>
                            </div>
                            <div className={styles.warningMessage}>
                                {(planType === 'pro' ? t.accountPage.warningPro : t.accountPage.warningFree).replace('{{date}}', billingCycle.end)}
                            </div>
                        </div>

                        {/* User Profile Section */}
                        <div className={styles.profileSection}>
                            <h2 className={styles.sectionTitle}>{t.accountPage.myAccount}</h2>
                            <div className={styles.profileContent}>
                                <div className={styles.avatarContainer}>
                                    <div className={styles.avatar}>{getInitial()}</div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>{t.accountPage.name}</label>
                                    <input
                                        type="text"
                                        className={styles.formInput}
                                        value={userName}
                                        readOnly
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>{t.accountPage.email}</label>
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
                onAcceptPromo={handleAcceptPromo}
            />
        </>
    )
}
