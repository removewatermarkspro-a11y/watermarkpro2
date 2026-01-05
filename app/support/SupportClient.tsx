'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales/translations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { commonFaqItems } from '@/utils/commonFaqItems'
import { commonFaqItemsFr } from '@/utils/commonFaqItemsFr'
import { commonFaqItemsDe } from '@/utils/commonFaqItemsDe'
import { commonFaqItemsEs } from '@/utils/commonFaqItemsEs'
import { commonFaqItemsPt } from '@/utils/commonFaqItemsPt'
import { commonFaqItemsKo } from '@/utils/commonFaqItemsKo'
import { watermarkRemovalFaqItemsNo } from '@/utils/commonFaqItemsNo'
import styles from './support.module.css'

export default function SupportClient() {
    const { language } = useLanguage()
    const t = (translations as any)[language] || translations.en

    // Get FAQ items based on language
    const getFaqItems = () => {
        switch (language) {
            case 'fr': return commonFaqItemsFr
            case 'de': return commonFaqItemsDe
            case 'es': return commonFaqItemsEs
            case 'pt': return commonFaqItemsPt
            case 'ko': return commonFaqItemsKo
            case 'no': return watermarkRemovalFaqItemsNo
            default: return commonFaqItems
        }
    }

    // Get support text based on language
    const getSupportText = () => {
        switch (language) {
            case 'fr':
                return {
                    title: 'Support',
                    message: 'Merci d\'utiliser Remove Watermark Pro ! Si vous avez besoin d\'aide, veuillez nous contacter à ',
                    email: 'removewatermarkpro@gmail.com'
                }
            case 'de':
                return {
                    title: 'Support',
                    message: 'Vielen Dank, dass Sie Remove Watermark Pro verwenden! Wenn Sie Hilfe benötigen, kontaktieren Sie uns bitte unter ',
                    email: 'removewatermarkpro@gmail.com'
                }
            case 'es':
                return {
                    title: 'Soporte',
                    message: '¡Gracias por usar Remove Watermark Pro! Si necesita ayuda, contáctenos en ',
                    email: 'removewatermarkpro@gmail.com'
                }
            case 'pt':
                return {
                    title: 'Suporte',
                    message: 'Obrigado por usar Remove Watermark Pro! Se precisar de ajuda, entre em contato conosco em ',
                    email: 'removewatermarkpro@gmail.com'
                }
            case 'ko':
                return {
                    title: '지원',
                    message: 'Remove Watermark Pro를 사용해 주셔서 감사합니다! 도움이 필요하시면 다음 주소로 문의해 주세요: ',
                    email: 'removewatermarkpro@gmail.com'
                }
            case 'no':
                return {
                    title: 'Support',
                    message: 'Takk for at du bruker Remove Watermark Pro! Hvis du trenger hjelp, vennligst kontakt oss på ',
                    email: 'removewatermarkpro@gmail.com'
                }
            default:
                return {
                    title: 'Support',
                    message: 'Thank you for using Remove Watermark Pro! If you need help, please contact us at ',
                    email: 'removewatermarkpro@gmail.com'
                }
        }
    }

    const supportText = getSupportText()

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.supportContainer}>
                        <h1 className={styles.title}>{supportText.title}</h1>
                        <p className={styles.description}>
                            {supportText.message}
                            <span className={styles.emailText}>
                                {supportText.email}
                            </span>
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <FAQ items={getFaqItems()} />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

