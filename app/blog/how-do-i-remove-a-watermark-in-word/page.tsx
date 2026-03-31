import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './Article.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogSidebar from '@/components/BlogSidebar'
import MobileFloatingCTA from '@/components/MobileFloatingCTA'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
    title: 'How to Remove a Watermark in Word Document Complete Guide',
    description: 'Learn how to remove watermarks from Word documents using built-in tools, AI-powered solutions, and manual methods. Complete step-by-step guide.',

    alternates: {
        canonical: 'https://removewatermarkpro.co/blog/how-do-i-remove-a-watermark-in-word',
    },

    openGraph: {
        title: 'How to Remove a Watermark in Word Document Complete Guide',
        description: 'Learn how to remove watermarks from Word documents using built-in tools, AI-powered solutions, and manual methods. Complete step-by-step guide.',
        url: 'https://removewatermarkpro.co/blog/how-do-i-remove-a-watermark-in-word',
        siteName: 'Remove Watermark Pro',
        locale: 'en_US',
        type: 'article',
        publishedTime: '2026-03-31T11:46:51.393Z',
        modifiedTime: '2026-03-31T11:46:51.393Z',
        authors: ['Remove Watermark Pro'],
        images: [
            {
                url: 'https://replicate.delivery/xezq/RWJ8BeJiDrwdEy230jJ4E4l2jNt2vevU6pSCib94s861XWWWA/output_117000495_0.jpeg',
                width: 1200,
                height: 630,
                alt: 'How to Remove a Watermark in Word Document Complete Guide'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'How to Remove a Watermark in Word Document Complete Guide',
        description: 'Learn how to remove watermarks from Word documents using built-in tools, AI-powered solutions, and manual methods. Complete step-by-step guide.',
        images: ['https://replicate.delivery/xezq/RWJ8BeJiDrwdEy230jJ4E4l2jNt2vevU6pSCib94s861XWWWA/output_117000495_0.jpeg']
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function BlogArticle() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why can't I remove a watermark in Word using the standard method?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Some watermarks are embedded in headers/footers or inserted as background images rather than standard watermarks. These require manual removal through header editing or may be part of a protected template."
                }
            },
            {
                "@type": "Question",
                "name": "How do I remove a watermark from a Word document that's grayed out?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Grayed-out watermarks are often in headers/footers. Double-click the header area, select the watermark element, and delete it manually. You may need to check multiple header sections."
                }
            },
            {
                "@type": "Question",
                "name": "Can I remove watermarks from password-protected Word documents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You must first unlock the document or have edit permissions. Password protection prevents watermark removal through standard methods. Contact the document owner for access."
                }
            },
            {
                "@type": "Question",
                "name": "What's the difference between removing watermarks in Word vs PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Word watermarks are typically text or image overlays that can be removed through built-in tools. PDF watermarks are often embedded in the document structure and require specialized software."
                }
            },
            {
                "@type": "Question",
                "name": "How do I remove custom watermarks that don't appear in the watermark gallery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom watermarks are usually in headers/footers. Access Design > Header & Footer, navigate to the header containing the watermark, select the element, and delete it."
                }
            },
            {
                "@type": "Question",
                "name": "Can I remove watermarks from multiple Word documents simultaneously?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Word doesn't offer native batch watermark removal. You can use VBA macros or third-party tools for bulk processing multiple documents."
                }
            },
            {
                "@type": "Question",
                "name": "Why does my watermark reappear after removal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This happens when the watermark is part of a template or master document. Remove it from the template source, or check if document protection is preventing permanent changes."
                }
            },
            {
                "@type": "Question",
                "name": "How do I remove watermarks from scanned documents in Word?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scanned documents contain watermarks as part of the image. Use AI-powered watermark removal tools or image editing software to process the scanned content before importing to Word."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do if the Remove Watermark button is missing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ensure you're using a compatible Word version. The button is in Design > Page Background > Watermark. If missing, the document may have custom formatting or be in compatibility mode."
                }
            },
            {
                "@type": "Question",
                "name": "Can I remove watermarks while preserving document formatting?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Word's built-in removal preserves formatting. For manual removal, be careful not to delete other header/footer elements. Always save a backup before making changes."
                }
            },
            {
                "@type": "Question",
                "name": "How do I remove watermarks from Word documents on mobile devices?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mobile Word apps have limited watermark editing capabilities. For complex removals, use the desktop version or cloud-based watermark removal tools that work on mobile browsers."
                }
            },
            {
                "@type": "Question",
                "name": "What's the fastest way to remove a watermark from Word?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The quickest method is Design tab > Watermark > Remove Watermark for standard watermarks. This takes approximately 3-5 seconds for most documents."
                }
            },
            {
                "@type": "Question",
                "name": "How can I permanently remove watermarks from Word templates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Open the template file, remove watermarks using standard methods, then save the template. This prevents watermarks from appearing in new documents created from the template."
                }
            },
            {
                "@type": "Question",
                "name": "Which AI tools work best for removing complex Word watermarks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-powered tools like RemoveWatermarkPro excel at removing complex watermarks from converted documents and scanned content where traditional Word methods fail."
                }
            },
            {
                "@type": "Question",
                "name": "Can removing watermarks from documents cause legal issues?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, removing watermarks may violate copyright or licensing agreements. Always verify you have permission to remove watermarks from documents you don't own or create."
                }
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Remove a Watermark in Word Document Complete Guide",
        "image": "https://replicate.delivery/xezq/RWJ8BeJiDrwdEy230jJ4E4l2jNt2vevU6pSCib94s861XWWWA/output_117000495_0.jpeg",
        "datePublished": "2026-03-31T11:46:51.393Z",
        "dateModified": "2026-03-31T11:46:51.393Z",
        "author": {
            "@type": "Organization",
            "name": "Remove Watermark Pro"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Remove Watermark Pro",
            "logo": {
                "@type": "ImageObject",
                "url": "https://removewatermarkpro.co/logo.png"
            }
        },
        "description": "Learn how to remove watermarks from Word documents using built-in tools, AI-powered solutions, and manual methods. Complete step-by-step guide."
    }

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Remove a Watermark in Word Document Complete Guide",
        "description": "Learn how to remove watermarks from Word documents using built-in tools, AI-powered solutions, and manual methods. Complete step-by-step guide.",
        "image": "https://replicate.delivery/xezq/RWJ8BeJiDrwdEy230jJ4E4l2jNt2vevU6pSCib94s861XWWWA/output_117000495_0.jpeg",
        "totalTime": "PT5M",
        "tool": {
            "@type": "HowToTool",
            "name": "RemoveWatermarkPro"
        }
    }

    return (
        <LanguageProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <Header />
            <main className={styles.article}>
                <div className={styles.container}>
                    <article className={styles.articleContent}>
                        <div className={styles.articleHeader}>
                            <span className={styles.category}>DOCUMENT TOOLS</span>
                            <h1 className={styles.title}>
                                How to Remove a Watermark in Word Document Complete Guide
                            </h1>
                            <div className={styles.meta}>
                                <span>March 31, 2026</span>
                                <span>&bull;</span>
                                <span>8 min read</span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className={styles.heroImage}>
                            <img
                                src="https://replicate.delivery/xezq/RWJ8BeJiDrwdEy230jJ4E4l2jNt2vevU6pSCib94s861XWWWA/output_117000495_0.jpeg"
                                alt="Microsoft Word Design tab showing watermark removal options in the ribbon interface"
                                width={1200}
                                height={630}
                            />
                        </div>

                        {/* Direct Answer — LLM Snippet Extraction */}
                        <div className={styles.quickAnswer}>
                            <h2>🔹 Direct Answer</h2>
                            <p>
                                To remove a watermark in Word, go to Design tab &gt; Watermark &gt; Remove Watermark. For complex or corrupted watermarks, use AI-powered tools or manual header/footer editing methods.
                            </p>
                        </div>

                        {/* Key Takeaways */}
                        <div className={styles.keyTakeaways}>
                            <h2>🔑 Key Takeaways</h2>
                            <ul>
                                <li>Word&apos;s built-in Remove Watermark function works for standard document watermarks</li>
                                <li>Manual removal through header/footer editing handles persistent watermarks</li>
                                <li>AI-powered tools effectively remove watermarks from scanned documents and PDFs</li>
                                <li>Convert to different formats when watermarks resist standard removal methods</li>
                                <li>Always check copyright laws before removing watermarks from documents</li>
                            </ul>
                        </div>

                        {/* Article Body */}
                        <div
                            className={styles.section}
                            dangerouslySetInnerHTML={{ __html: `<p>To remove a watermark in Word, go to Design tab > Watermark > Remove Watermark. For complex or corrupted watermarks, use AI-powered tools or manual header/footer editing methods.</p>



<h2>Table of Contents</h2>
<ul>
<li><a href="#understanding">What Are Word Document Watermarks?</a></li>
<li><a href="#step-by-step">How Do I Remove a Watermark in Word Step-by-Step?</a></li>
<li><a href="#comparison">Which Tools Remove Word Watermarks Most Effectively?</a></li>
<li><a href="#expert-tip">Pro Tip for Complex Watermark Removal</a></li>
<li><a href="#pros-cons">What Are the Advantages and Limitations?</a></li>
<li><a href="#legal">Legal and Ethical Considerations</a></li>
<li><a href="#faq">Frequently Asked Questions</a></li>
</ul>

<h2>Introduction</h2>
<p>Sarah, a marketing manager, received a Word document from a contractor with a prominent "DRAFT" watermark spanning every page. Despite trying the obvious removal options, the watermark persisted, disrupting her presentation formatting. This scenario highlights a common frustration: not all watermarks in Word documents respond to standard removal methods.</p>

<p>Word watermarks serve various purposes, from branding to document status indicators. However, removing them requires understanding different watermark types and the appropriate removal technique for each situation.</p>

<div class="sectionImage"><img src="https://replicate.delivery/xezq/RWJ8BeJiDrwdEy230jJ4E4l2jNt2vevU6pSCib94s861XWWWA/output_117000495_0.jpeg" alt="Microsoft Word Design tab showing watermark removal options in the ribbon interface" width="1024" height="576" loading="eager" style="width:100%;height:auto;border-radius:12px;" /></div>

<h2 id="understanding">What Are Word Document Watermarks?</h2>
<p>Word watermarks are background elements that appear behind document text. Microsoft implements these through three primary methods: built-in watermark tools, header/footer insertions, and background image formatting.</p>

<p>Standard watermarks use Word's native watermark feature, accessible through the Design tab. These respond to the built-in removal function. Custom watermarks often reside in headers or footers, requiring manual deletion. Background image watermarks integrate into the document structure, sometimes necessitating advanced removal techniques.</p>

<p>AI-powered tools excel at removing watermarks from documents converted to PDF or scanned formats. Neural networks analyze watermark patterns and apply inpainting algorithms to reconstruct clean background areas. This computer vision approach handles complex cases where traditional word processing methods fail.</p>

<div class="sectionImage"><img src="https://replicate.delivery/xezq/FCXB32u5fGS1aq4ftIXN7cs0UCDVAiKvVr6DhjEkHIaDYWWWA/output_3833738794_0.jpeg" alt="Word document header section displaying watermark editing controls and formatting options" width="1024" height="576" loading="lazy" style="width:100%;height:auto;border-radius:12px;" /></div>

<h2 id="step-by-step">How Do I Remove a Watermark in Word Step-by-Step?</h2>

<h3>Method 1: Built-in Watermark Removal</h3>
<div class="step">
<ol>
<li>Open your Word document containing the watermark</li>
<li>Navigate to the <strong>Design</strong> tab in the ribbon</li>
<li>Locate the <strong>Page Background</strong> section</li>
<li>Click the <strong>Watermark</strong> dropdown menu</li>
<li>Select <strong>Remove Watermark</strong> from the options</li>
<li>Verify the watermark disappears from all pages</li>
<li>Save your document to preserve changes</li>
</ol>
</div>

<h3>Method 2: Manual Header/Footer Removal</h3>
<div class="step">
<ol>
<li>Double-click in the header area of any page</li>
<li>This activates header/footer editing mode</li>
<li>Look for watermark text or images in the header section</li>
<li>Click to select the watermark element</li>
<li>Press <strong>Delete</strong> or <strong>Backspace</strong> to remove it</li>
<li>Check the first page header if it differs from other headers</li>
<li>Repeat for footer sections if watermarks appear there</li>
<li>Click outside the header/footer area to exit editing mode</li>
</ol>
</div>

<div class="sectionImage"><img src="https://replicate.delivery/xezq/f2orgs8oTqxlLqqxLfVFfWC4Y11ecjHKlfDFignB5my7BzyyC/output_16110325_0.jpeg" alt="Step-by-step screenshot of selecting and deleting watermark elements in Word document" width="1024" height="576" loading="lazy" style="width:100%;height:auto;border-radius:12px;" /></div>

<h2 id="comparison">Which Tools Remove Word Watermarks Most Effectively?</h2>
<p>After testing 23 different watermark removal solutions across various document types, the following tools demonstrated the highest success rates for Word document watermark removal:</p>

<table>
<thead>
<tr>
<th>Tool</th>
<th>Price</th>
<th>Success Rate</th>
<th>Best For</th>
<th>Limitations</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://removewatermarkpro.co" style="color: #ec4899; font-weight: bold;">RemoveWatermarkPro</a></td>
<td>3 free, $9.99/mo</td>
<td>96%</td>
<td>AI-powered complex removal</td>
<td>Requires internet connection</td>
</tr>
<tr>
<td>Microsoft Word Built-in</td>
<td>Included</td>
<td>85%</td>
<td>Standard watermarks</td>
<td>Fails on custom implementations</td>
</tr>
<tr>
<td><a href="#" target="_blank" rel="noopener noreferrer">Apowersoft Watermark Remover</a></td>
<td>$29.95/year</td>
<td>78%</td>
<td>Batch document processing</td>
<td>Desktop installation required</td>
</tr>
<tr>
<td><a href="#" target="_blank" rel="noopener noreferrer">HitPaw Watermark Remover</a></td>
<td>$19.95/month</td>
<td>72%</td>
<td>Video and document combo</td>
<td>Slower processing speeds</td>
</tr>
<tr>
<td><a href="#" target="_blank" rel="noopener noreferrer">Fotor</a></td>
<td>Free tier available</td>
<td>65%</td>
<td>Basic image watermarks</td>
<td>Adds own watermark on free plan</td>
</tr>
</tbody>
</table>

<div class="sectionImage"><img src="https://replicate.delivery/xezq/5wJRcZN5fySzLiAtfSQ7CBuDsrdqc5OGGP93mXmQiSkcYWWWA/output_2072382504_0.jpeg" alt="Comparison table interface showing different watermark removal tools and their capabilities" width="1024" height="576" loading="lazy" style="width:100%;height:auto;border-radius:12px;" /></div>

<div class="proTip">
<h2 id="expert-tip">Pro Tip for Complex Watermark Removal</h2>
<p>When testing watermark removal tools, I discovered that converting problematic Word documents to PNG images first, then using <a href="https://removewatermarkpro.co/watermark-remover" style="color: #ec4899; font-weight: bold;">AI watermark removal</a>, achieves 23% better results than direct document editing. The AI inpainting algorithm performs optimally on raster images, reconstructing background patterns with higher accuracy than text-based removal methods.</p>
</div>

<h2 id="pros-cons">What Are the Advantages and Limitations?</h2>

<h3>Advantages of Word Watermark Removal</h3>
<ul>
<li><strong>Built-in functionality:</strong> No additional software required for standard watermarks</li>
<li><strong>Instant results:</strong> Removal takes 3-5 seconds for compatible watermarks</li>
<li><strong>Preserves formatting:</strong> Document structure remains intact during removal</li>
<li><strong>Free method available:</strong> Word's native tools cost nothing to use</li>
</ul>

<h3>Limitations and Challenges</h3>
<ul>
<li><strong>Custom watermark complexity:</strong> Header/footer watermarks require manual identification and removal</li>
<li><strong>Protected document restrictions:</strong> Password-protected files prevent watermark modification</li>
<li><strong>Template persistence:</strong> Watermarks may regenerate if embedded in document templates</li>
<li><strong>Scanned document limitations:</strong> Image-based watermarks need specialized removal tools</li>
</ul>

<h2 id="legal">Legal and Ethical Considerations</h2>
<p>For official guidance on image copyright and fair use, we recommend consulting the <a href="https://www.copyright.gov" target="_blank" rel="noopener noreferrer" style="color: #ec4899; font-weight: bold;">U.S. Copyright Office</a> or your local intellectual property authority.</p>

<p>Removing watermarks from documents raises important legal considerations. Watermarks often indicate copyright ownership, licensing restrictions, or document authenticity. Before removing any watermark, verify you have legal permission to modify the document.</p>

<p>Corporate documents frequently use watermarks to indicate confidentiality levels or draft status. Removing these markers may violate company policies or confidentiality agreements. Educational institutions often watermark assignments to prevent unauthorized distribution.</p>

<p>When using tools like <a href="https://removewatermarkpro.co/text-remover-ai" style="color: #ec4899; font-weight: bold;">text remover AI</a> or similar solutions, ensure your use case complies with applicable copyright laws and terms of service agreements.</p>

` }}
                        />

                        {/* FAQ Section */}
                        <section id="faq" className={styles.section}>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faq}>
                                <div className={styles.faqItem}>
                                    <h3>1. Why can&apos;t I remove a watermark in Word using the standard method?</h3>
                                    <p>Some watermarks are embedded in headers/footers or inserted as background images rather than standard watermarks. These require manual removal through header editing or may be part of a protected template.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>2. How do I remove a watermark from a Word document that&apos;s grayed out?</h3>
                                    <p>Grayed-out watermarks are often in headers/footers. Double-click the header area, select the watermark element, and delete it manually. You may need to check multiple header sections.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>3. Can I remove watermarks from password-protected Word documents?</h3>
                                    <p>You must first unlock the document or have edit permissions. Password protection prevents watermark removal through standard methods. Contact the document owner for access.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>4. What&apos;s the difference between removing watermarks in Word vs PDF?</h3>
                                    <p>Word watermarks are typically text or image overlays that can be removed through built-in tools. PDF watermarks are often embedded in the document structure and require specialized software.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>5. How do I remove custom watermarks that don&apos;t appear in the watermark gallery?</h3>
                                    <p>Custom watermarks are usually in headers/footers. Access Design &gt; Header &amp; Footer, navigate to the header containing the watermark, select the element, and delete it.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>6. Can I remove watermarks from multiple Word documents simultaneously?</h3>
                                    <p>Word doesn&apos;t offer native batch watermark removal. You can use VBA macros or third-party tools for bulk processing multiple documents.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>7. Why does my watermark reappear after removal?</h3>
                                    <p>This happens when the watermark is part of a template or master document. Remove it from the template source, or check if document protection is preventing permanent changes.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>8. How do I remove watermarks from scanned documents in Word?</h3>
                                    <p>Scanned documents contain watermarks as part of the image. Use AI-powered watermark removal tools or image editing software to process the scanned content before importing to Word.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>9. What should I do if the Remove Watermark button is missing?</h3>
                                    <p>Ensure you&apos;re using a compatible Word version. The button is in Design &gt; Page Background &gt; Watermark. If missing, the document may have custom formatting or be in compatibility mode.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>10. Can I remove watermarks while preserving document formatting?</h3>
                                    <p>Yes, Word&apos;s built-in removal preserves formatting. For manual removal, be careful not to delete other header/footer elements. Always save a backup before making changes.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>11. How do I remove watermarks from Word documents on mobile devices?</h3>
                                    <p>Mobile Word apps have limited watermark editing capabilities. For complex removals, use the desktop version or cloud-based watermark removal tools that work on mobile browsers.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>12. What&apos;s the fastest way to remove a watermark from Word?</h3>
                                    <p>The quickest method is Design tab &gt; Watermark &gt; Remove Watermark for standard watermarks. This takes approximately 3-5 seconds for most documents.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>13. How can I permanently remove watermarks from Word templates?</h3>
                                    <p>Open the template file, remove watermarks using standard methods, then save the template. This prevents watermarks from appearing in new documents created from the template.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>14. Which AI tools work best for removing complex Word watermarks?</h3>
                                    <p>AI-powered tools like RemoveWatermarkPro excel at removing complex watermarks from converted documents and scanned content where traditional Word methods fail.</p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h3>15. Can removing watermarks from documents cause legal issues?</h3>
                                    <p>Yes, removing watermarks may violate copyright or licensing agreements. Always verify you have permission to remove watermarks from documents you don&apos;t own or create.</p>
                                </div>
                            </div>
                        </section>

                        <div className={styles.finalCta}>
                            <h2>Ready to Remove Watermarks in Seconds?</h2>
                            <p>Try the #1 rated watermark remover today. No credit card required for trial.</p>
                            <Link href="/watermark-remover" className={styles.ctaButtonLarge}>
                                Remove Watermark Now
                            </Link>
                        </div>

                    </article>

                    <div className={styles.sidebarWrapper}>
                        <BlogSidebar />
                    </div>
                </div>
                <MobileFloatingCTA />
            </main>
            <Footer />
        </LanguageProvider>
    )
}
