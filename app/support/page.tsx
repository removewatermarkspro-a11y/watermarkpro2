'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './support.module.css'

export default function Support() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.supportContainer}>
                        <h1 className={styles.title}>Support</h1>
                        <p className={styles.description}>
                            Thank you for using Remove Watermark Pro! If you need help, please contact us at{' '}
                            <span className={styles.emailText}>
                                removewatermarkpro@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
