'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './CategoryTabs.module.css'

export default function CategoryTabs() {
    const pathname = usePathname()

    const categories = [
        { name: 'Free watermark remover', href: '/' },
        { name: 'Remove watermark from video', href: '/remove-watermark-video' },
        { name: 'Remove text', href: '/remove-text' },
        { name: 'Remove object', href: '/remove-object' },
        { name: 'Replace background', href: '/replace-background' },
        { name: 'Remove background', href: '/remove-background' },
        { name: 'Auto remove people', href: '/auto-remove-people' },
        { name: 'Image upscaler', href: '/image-upscaler' },
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
