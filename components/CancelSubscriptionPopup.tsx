'use client'

import { useEffect, useRef } from 'react'
import styles from './CancelSubscriptionPopup.module.css'

interface CancelSubscriptionPopupProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
}

export default function CancelSubscriptionPopup({ isOpen, onClose, onConfirm }: CancelSubscriptionPopupProps) {
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()} ref={popupRef}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Are you sure?</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className={styles.content}>
                    <p className={styles.message}>
                        Do you really want to cancel your subscription? You will lose access to all premium features.
                    </p>
                </div>

                <div className={styles.actions}>
                    <button className={styles.stayBtn} onClick={onClose}>
                        Stay Subscribed
                    </button>
                    <button className={styles.cancelBtn} onClick={onConfirm}>
                        Cancel Subscription
                    </button>
                </div>
            </div>
        </div>
    )
}
