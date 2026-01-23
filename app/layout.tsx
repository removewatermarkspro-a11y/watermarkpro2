import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
    title: 'AI Image Editor - Remove Watermarks, Backgrounds & More',
    description: 'Professional AI-powered image editing tools. Remove watermarks, backgrounds, objects, and enhance your images instantly.',
    keywords: ['image editor', 'remove watermark', 'remove background', 'AI image tools', 'photo editor'],
    authors: [{ name: 'Image Editor Pro' }],
    openGraph: {
        title: 'AI Image Editor - Professional Image Editing Tools',
        description: 'Remove watermarks, backgrounds, objects and enhance images with AI',
        type: 'website',
    },
    icons: {
        icon: '/favicon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <LanguageProvider>
                        {children}
                    </LanguageProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
