import { testimonialsByPage } from '@/utils/testimonialData'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import styles from './SocialProof.module.css'

interface SocialProofProps {
    showAvatars?: boolean
    pageId?: string
}

export default function SocialProof({ showAvatars = true, pageId = 'home' }: SocialProofProps) {
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    // Get testimonials for the current page, or fallback to home
    const pageTestimonials = testimonialsByPage[pageId] || testimonialsByPage['home']

    // Get the first 4 avatars
    const avatars = pageTestimonials.slice(0, 4).map(t => t.avatar)

    return (
        <div className={styles.socialProof}>
            {showAvatars && (
                <div className={styles.avatars}>
                    {avatars.map((avatar, index) => (
                        <img
                            key={index}
                            src={avatar}
                            alt="User avatar"
                            className={styles.avatar}
                        loading="lazy" decoding="async" />
                    ))}
                    <div className={styles.avatarCount}>+20K</div>
                </div>
            )}
            <p className={styles.text}>{t.testimonialsCta?.trustedBadge || 'Trusted by 20,000+ users'}</p>
        </div>
    )
}
