'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './cookies.module.css'

export default function Cookies() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.contentContainer}>
                        <h1 className={styles.title}>Cookie Policy</h1>
                        <p className={styles.lastUpdated}>Last updated: December 11, 2024</p>

                        <section className={styles.section}>
                            <h2>1. What Are Cookies</h2>
                            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>2. How We Use Cookies</h2>
                            <p>We use cookies for the following purposes:</p>
                            <ul>
                                <li>Authentication - To remember that you're logged in</li>
                                <li>Preferences - To remember your settings and preferences</li>
                                <li>Analytics - To understand how you use our service and improve it</li>
                                <li>Security - To protect your account and prevent fraud</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>3. Types of Cookies We Use</h2>
                            <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and accessibility.</p>
                            <p><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                            <p><strong>Preference Cookies:</strong> These cookies allow our website to remember choices you make and provide enhanced features.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>4. Managing Cookies</h2>
                            <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, please note that if you disable cookies, some features of our service may not function properly.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>5. Third-Party Cookies</h2>
                            <p>We may use third-party services that set their own cookies. These services include payment processors and analytics providers. We do not control these third-party cookies.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>6. Contact Us</h2>
                            <p>If you have any questions about our use of cookies, please contact us at <a href="mailto:removewatermarkpro@gmail.com">removewatermarkpro@gmail.com</a>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
