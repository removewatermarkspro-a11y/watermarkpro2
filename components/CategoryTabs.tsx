'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './CategoryTabs.module.css'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'

export default function CategoryTabs() {
    const pathname = usePathname()
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    const categories = [
        { name: t.categoryTabs.watermarkRemover, href: '/' },
        { name: t.categoryTabs.videoWatermark, href: '/remove-watermark-video' },
        { name: t.categoryTabs.soraRemover, href: '/free-sora-remover' },
        { name: t.categoryTabs.removeText, href: '/remove-text' },
        { name: t.categoryTabs.removeObject, href: '/remove-object' },
        { name: t.categoryTabs.replaceBackground, href: '/replace-background' },
        { name: t.categoryTabs.removeBackground, href: '/remove-background' },
        { name: t.categoryTabs.autoRemovePeople, href: '/auto-remove-people' },
        { name: t.categoryTabs.imageUpscaler, href: '/image-upscaler' },
    ]

    return (
        <div className={styles.tabs}>
            <div className={styles.tabsScroll}>
                {categories.map((category) => (
                    <Link
                        key={category.href}
                        href={category.href}
                        className={`${styles.tab} ${pathname === category.href ? styles.active : ''}`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
