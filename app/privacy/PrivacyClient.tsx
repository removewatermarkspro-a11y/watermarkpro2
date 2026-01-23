'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './privacy.module.css'

export default function PrivacyClient() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last updated: December 11, 2024</p>

                        <section className={styles.section}>
                            <h2>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us when you create an account, use our services, or contact us for support. This may include your email address, payment information, and images you upload for processing.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process your transactions and send you related information</li>
                                <li>Send you technical notices, updates, and support messages</li>
                                <li>Respond to your comments and questions</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>3. Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information. All uploaded images are processed securely and deleted from our servers after processing is complete.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>4. Your Rights</h2>
                            <p>You have the right to access, update, or delete your personal information at any time. You can do this through your account settings or by contacting us at removewatermarkpro@gmail.com.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:removewatermarkpro@gmail.com">removewatermarkpro@gmail.com</a>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
