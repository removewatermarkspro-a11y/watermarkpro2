import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://removewatermarkspro.com'

    // Define all feature pages
    const featurePages = [
        'watermark-remover',
        'remove-watermark-video',
        'text-remover-ai',
        'object-remover-ai',
        'background-remover',
        'background-changer-ai',
        'people-remover-ai',
        'image-upscaler-ai',
        'sora-watermark-remover',
    ]

    // Define language-specific paths
    const languagePaths = {
        en: {
            prefix: '',
            pages: {
                'watermark-remover': 'watermark-remover',
                'remove-watermark-video': 'remove-watermark-video',
                'text-remover-ai': 'text-remover-ai',
                'object-remover-ai': 'object-remover-ai',
                'background-remover': 'background-remover',
                'background-changer-ai': 'background-changer-ai',
                'people-remover-ai': 'people-remover-ai',
                'image-upscaler-ai': 'image-upscaler-ai',
                'sora-watermark-remover': 'sora-watermark-remover',
                'pricing': 'pricing',
                'support': 'support',
            }
        },
        fr: {
            prefix: '/fr',
            pages: {
                'watermark-remover': 'enlever-filigrane',
                'remove-watermark-video': 'enlever-filigrane-video',
                'text-remover-ai': 'supprimer-texte-image',
                'object-remover-ai': 'supprimer-objet-image',
                'background-remover': 'supprimer-arriere-plan',
                'background-changer-ai': 'changer-arriere-plan',
                'people-remover-ai': 'effacer-personnes-photo',
                'image-upscaler-ai': 'agrandir-image',
                'sora-watermark-remover': 'enlever-filigrane-sora',
                'pricing': 'tarifs',
                'support': 'support',
            }
        },
        de: {
            prefix: '/de',
            pages: {
                'watermark-remover': 'wasserzeichen-entfernen',
                'remove-watermark-video': 'wasserzeichen-entfernen-video',
                'text-remover-ai': 'text-entfernen',
                'object-remover-ai': 'objekt-entfernen',
                'background-remover': 'hintergrund-entfernen',
                'background-changer-ai': 'hintergrund-wechseln',
                'people-remover-ai': 'personen-entfernen',
                'image-upscaler-ai': 'bild-hochskalieren',
                'sora-watermark-remover': 'sora-wasserzeichen-entfernen',
                'pricing': 'preise',
                'support': 'support',
            }
        },
        es: {
            prefix: '/es',
            pages: {
                'watermark-remover': 'eliminar-marca-agua',
                'remove-watermark-video': 'eliminar-marca-agua-video',
                'text-remover-ai': 'eliminar-texto-imagen',
                'object-remover-ai': 'eliminar-objeto-imagen',
                'background-remover': 'eliminar-fondo-imagen',
                'background-changer-ai': 'cambiar-fondo-imagen',
                'people-remover-ai': 'eliminar-personas-foto',
                'image-upscaler-ai': 'mejorar-calidad-imagen',
                'sora-watermark-remover': 'eliminar-marca-agua-sora',
                'pricing': 'precios',
                'support': 'soporte',
            }
        },
        pt: {
            prefix: '/pt',
            pages: {
                'watermark-remover': 'remover-marca-dagua',
                'remove-watermark-video': 'remover-marca-dagua-video',
                'text-remover-ai': 'remover-texto-imagem',
                'object-remover-ai': 'remover-objeto-imagem',
                'background-remover': 'remover-fundo',
                'background-changer-ai': 'trocar-fundo',
                'people-remover-ai': 'remover-pessoas-foto',
                'image-upscaler-ai': 'melhorar-qualidade-imagem',
                'sora-watermark-remover': 'remover-marca-dagua-sora',
                'pricing': 'precos',
                'support': 'suporte',
            }
        },
        ko: {
            prefix: '/ko',
            pages: {
                'watermark-remover': 'watermark-remover',
                'remove-watermark-video': 'watermark-remover-video',
                'text-remover-ai': 'text-remover-ai',
                'object-remover-ai': 'object-remover-ai',
                'background-remover': 'background-remover',
                'background-changer-ai': 'background-changer-ai',
                'people-remover-ai': 'people-remover-ai',
                'image-upscaler-ai': 'image-upscaler-ai',
                'sora-watermark-remover': 'sora-watermark-remover',
                'pricing': 'pricing',
                'support': 'support',
            }
        },
        no: {
            prefix: '/no',
            pages: {
                'watermark-remover': 'fjern-vannmerke',
                'remove-watermark-video': 'fjern-vannmerke-video',
                'text-remover-ai': 'fjern-tekst-fra-bilde',
                'object-remover-ai': 'fjern-objekt-fra-bilde',
                'background-remover': 'fjern-bakgrunn',
                'background-changer-ai': 'endre-bakgrunn',
                'people-remover-ai': 'fjern-personer-foto',
                'image-upscaler-ai': 'forbedre-bildekvalitet',
                'sora-watermark-remover': 'fjern-sora-vannmerke',
                'pricing': 'priser',
                'support': 'support',
            }
        },
    }

    const sitemap: MetadataRoute.Sitemap = []

    // Add homepage
    sitemap.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
    })

    // Add all language pages
    Object.entries(languagePaths).forEach(([lang, config]) => {
        Object.entries(config.pages).forEach(([key, path]) => {
            const url = `${baseUrl}${config.prefix}/${path}`

            // Higher priority for main feature pages
            const isMainFeature = ['watermark-remover', 'remove-watermark-video'].includes(key)
            const isPricing = key === 'pricing'

            sitemap.push({
                url,
                lastModified: new Date(),
                changeFrequency: isMainFeature ? 'daily' : 'weekly',
                priority: isMainFeature ? 0.9 : isPricing ? 0.8 : 0.7,
            })
        })
    })

    // Add blog pages
    sitemap.push({
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    })

    sitemap.push({
        url: `${baseUrl}/blog/remove-watermark-ai-free`,
        lastModified: new Date('2026-01-16'),
        changeFrequency: 'monthly',
        priority: 0.7,
    })

    return sitemap
}
