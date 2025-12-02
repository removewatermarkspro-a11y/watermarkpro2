import styles from './SocialProof.module.css'

interface SocialProofProps {
    showAvatars?: boolean
}

export default function SocialProof({ showAvatars = true }: SocialProofProps) {
    return (
        <div className={styles.socialProof}>
            {showAvatars && (
                <div className={styles.avatars}>
                    <div className={styles.avatar} style={{ backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <span>JD</span>
                    </div>
                    <div className={styles.avatar} style={{ backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                        <span>SM</span>
                    </div>
                    <div className={styles.avatar} style={{ backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                        <span>AK</span>
                    </div>
                    <div className={styles.avatarCount}>+20K</div>
                </div>
            )}
            <p className={styles.text}>Trusted by 20,000+ users</p>
        </div>
    )
}
