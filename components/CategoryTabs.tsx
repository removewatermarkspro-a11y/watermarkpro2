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
        { name: t.categoryTabs.watermarkRemover, href: language === 'fr' ? '/fr/enlever-filigrane' : language === 'de' ? '/de/wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua' : language === 'pt' ? '/pt/remover-marca-dagua' : language === 'ko' ? '/ko/watermark-remover' : language === 'no' ? '/no/fjern-vannmerke' : '/' },
        { name: t.categoryTabs.videoWatermark, href: language === 'fr' ? '/fr/enlever-filigrane-video' : language === 'de' ? '/de/wasserzeichen-entfernen-video' : language === 'es' ? '/es/eliminar-marca-agua-video' : language === 'pt' ? '/pt/remover-marca-dagua-video' : language === 'ko' ? '/ko/watermark-remover-video' : language === 'no' ? '/no/fjern-vannmerke-video' : '/watermark-remover-video' },
        { name: t.categoryTabs.soraRemover, href: language === 'fr' ? '/fr/enlever-filigrane-sora' : language === 'de' ? '/de/sora-wasserzeichen-entfernen' : language === 'es' ? '/es/eliminar-marca-agua-sora' : language === 'pt' ? '/pt/remover-marca-dagua-sora' : language === 'ko' ? '/ko/sora-watermark-remover' : language === 'no' ? '/no/fjern-sora-vannmerke' : '/sora-watermark-remover' },
        { name: t.categoryTabs.removeText, href: language === 'fr' ? '/fr/supprimer-texte-image' : language === 'de' ? '/de/text-entfernen' : language === 'es' ? '/es/eliminar-texto-imagen' : language === 'pt' ? '/pt/remover-texto-imagem' : language === 'ko' ? '/ko/text-remover-ai' : language === 'no' ? '/no/fjern-tekst-fra-bilde' : '/text-remover-ai' },
        { name: t.categoryTabs.removeObject, href: language === 'fr' ? '/fr/supprimer-objet-image' : language === 'de' ? '/de/objekt-entfernen' : language === 'es' ? '/es/eliminar-objeto-imagen' : language === 'pt' ? '/pt/remover-objeto-imagem' : language === 'ko' ? '/ko/object-remover-ai' : language === 'no' ? '/no/fjern-objekt-fra-bilde' : '/object-remover-ai' },
        { name: t.categoryTabs.replaceBackground, href: language === 'fr' ? '/fr/changer-arriere-plan' : language === 'de' ? '/de/hintergrund-wechseln' : language === 'es' ? '/es/cambiar-fondo-imagen' : language === 'pt' ? '/pt/trocar-fundo-imagem' : language === 'ko' ? '/ko/background-changer-ai' : language === 'no' ? '/no/endre-bakgrunn' : '/background-changer-ai' },
        { name: t.categoryTabs.removeBackground, href: language === 'fr' ? '/fr/supprimer-arriere-plan' : language === 'de' ? '/de/hintergrund-entfernen' : language === 'es' ? '/es/eliminar-fondo-imagen' : language === 'pt' ? '/pt/remover-fundo-imagem' : language === 'ko' ? '/ko/background-remover' : language === 'no' ? '/no/fjern-bakgrunn' : '/background-remover' },
        { name: t.categoryTabs.autoRemovePeople, href: language === 'fr' ? '/fr/effacer-personnes-photo' : language === 'de' ? '/de/personen-entfernen' : language === 'es' ? '/es/eliminar-personas-foto' : language === 'pt' ? '/pt/remover-pessoas-foto' : language === 'ko' ? '/ko/people-remover-ai' : language === 'no' ? '/no/fjern-personer-foto' : '/people-remover-ai' },
        { name: t.categoryTabs.imageUpscaler, href: language === 'fr' ? '/fr/agrandir-image' : language === 'de' ? '/de/bild-hochskalieren' : language === 'es' ? '/es/mejorar-calidad-imagen' : language === 'pt' ? '/pt/melhorar-qualidade-imagem' : language === 'ko' ? '/ko/image-upscaler-ai' : language === 'no' ? '/no/forbedre-bildekvalitet' : '/image-upscaler-ai' },
    ]

    return (
        <div className={styles.tabs}>
            <div className={styles.tabsScroll}>
                {categories.map((category) => {
                    // Check if this category is active
                    const isActive = pathname === category.href ||
                        (category.href === '/' && pathname === '/watermark-remover') ||
                        (category.href === '/' && pathname === '/fr/enlever-filigrane') ||
                        (category.href === '/' && pathname === '/de/wasserzeichen-entfernen') ||
                        (category.href === '/' && pathname === '/es/eliminar-marca-agua') ||
                        (category.href === '/' && pathname === '/pt/remover-marca-dagua') ||
                        (category.href === '/' && pathname === '/ko/watermark-remover') ||
                        (category.href === '/' && pathname === '/no/fjern-vannmerke')

                    return (
                        <Link
                            key={category.href}
                            href={category.href}
                            className={`${styles.tab} ${isActive ? styles.active : ''}`}
                        >
                            {category.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
