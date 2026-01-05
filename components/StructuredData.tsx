import React from 'react'

interface StructuredDataProps {
    data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

// WebSite Schema for homepage
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Remove Watermark Pro",
    "url": "https://removewatermarkspro.com",
    "description": "Professional AI-powered watermark removal tool. Remove watermarks from images and videos instantly with our free online tool.",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://removewatermarkspro.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
}

// Organization Schema
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Remove Watermark Pro",
    "url": "https://removewatermarkspro.com",
    "logo": "https://removewatermarkspro.com/logo.png",
    "description": "Professional AI-powered watermark removal and image editing tools",
    "sameAs": [
        // Add social media links when available
    ]
}

// SoftwareApplication Schema Generator
export const createSoftwareSchema = (params: {
    name: string
    url: string
    description: string
    applicationCategory?: string
    offers?: {
        price: string
        priceCurrency: string
    }
    aggregateRating?: {
        ratingValue: string
        ratingCount: string
    }
}) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": params.name,
    "url": params.url,
    "description": params.description,
    "applicationCategory": params.applicationCategory || "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
        "@type": "Offer",
        "price": params.offers?.price || "0",
        "priceCurrency": params.offers?.priceCurrency || "USD"
    },
    "aggregateRating": params.aggregateRating ? {
        "@type": "AggregateRating",
        "ratingValue": params.aggregateRating.ratingValue,
        "ratingCount": params.aggregateRating.ratingCount
    } : undefined
})

// FAQ Schema Generator
export const createFAQSchema = (faqItems: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }))
})

// BreadcrumbList Schema Generator
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
})
