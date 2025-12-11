'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './terms.module.css'

export default function Terms() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>Terms of Service</h1>
                        <p className={styles.lastUpdated}>Last updated: December 11, 2024</p>

                        <section className={styles.section}>
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing and using Remove Watermark Pro, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our service.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>2. Use License</h2>
                            <p>We grant you a personal, non-transferable, non-exclusive license to use our service for personal or commercial purposes, subject to these terms. You may not:</p>
                            <ul>
                                <li>Modify or copy our materials or software</li>
                                <li>Use the service for any illegal purpose</li>
                                <li>Attempt to reverse engineer any software contained in our service</li>
                                <li>Remove any copyright or proprietary notations from our materials</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>3. User Account</h2>
                            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>4. Payment and Refunds</h2>
                            <p>All payments are processed securely. Subscription fees are non-refundable except as required by law. You may cancel your subscription at any time, and you will continue to have access until the end of your billing period.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>5. Limitation of Liability</h2>
                            <p>Remove Watermark Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>6. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>7. Contact Information</h2>
                            <p>For questions about these Terms of Service, please contact us at <a href="mailto:removewatermarkpro@gmail.com">removewatermarkpro@gmail.com</a>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
