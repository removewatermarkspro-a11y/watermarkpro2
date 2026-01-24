import { redirect } from 'next/navigation'

export default function WatermarkRemoverRedirect() {
    // Redirect to homepage to avoid duplicate content
    redirect('/')
}
