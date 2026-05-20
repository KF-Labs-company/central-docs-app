import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

import Menu from './components/system/Menu'
import Providers from './providers'

export const metadata: Metadata = {
    metadataBase: new URL('https://central-docs-app.vercel.app'),

    title: {
        default: 'Central DOCS',
        template: '%s | Central DOCS',
    },

    description:
        'Manipule arquivos online gratuitamente. Comprima, converta e organize PDFs, imagens, vídeos e documentos.',

    keywords: [
        'ferramentas online',
        'manipular arquivos',
        'comprimir pdf',
        'converter imagem',
        'converter arquivos',
        'pdf online',
        'ferramentas gratuitas',
    ],

    openGraph: {
        title: 'Central DOCS',
        description:
            'Manipule arquivos online gratuitamente. PDFs, imagens, vídeos e documentos.',
        type: 'website',
        locale: 'pt_BR',
        siteName: 'Central DOCS',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Central DOCS',
        description:
            'Manipule arquivos online gratuitamente. PDFs, imagens, vídeos e documentos.',
    },

    robots: {
        index: true,
        follow: true,
    },
}

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="pt-BR">
            <body>
                <Providers>
                    <Menu />

                    {children}
                </Providers>

                {children}
                <SpeedInsights />
            </body>
        </html>
    )
}
