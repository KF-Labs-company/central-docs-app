'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'

export function Footer() {
    const productLinks = [
        { label: 'Início', href: '/' },
        { label: 'Sobre o produto', href: '/sobre' },
        { label: 'Novidades', href: '/novidades' },
        { label: 'Atualizações', href: '/atualizacoes' },
        { label: 'Ferramentas', href: '/ferramentas' },
    ]

    const toolsLinks = [{ label: 'Comprimir PDF', href: '/comprimir-pdf' }]

    return (
        <footer
            className="overflow-hidden z-50 border-b border-white/5 bg-black/70 backdrop-blur-2xl"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-6">
                <div className="mb-10 grid grid-cols-[2fr_1fr_1fr] gap-5">
                    <div className="hidden sm:block">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                                <Icon
                                    icon="solar:document-bold"
                                    className="text-3xl text-blue-400"
                                />
                            </div>

                            <div>
                                <strong className="text-lg font-bold text-white hidden sm:block">
                                    Central DOCS
                                </strong>

                                <p className="text-sm text-slate-400 hidden md:block">
                                    Plataforma de ferramentas de arquivos
                                </p>
                            </div>
                        </Link>

                        <div className="mb-4 mt-5 flex items-center gap-1.5">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-blue-500"></span>
                            </span>
                            <span className="text-[13px] text-slate-400">
                                Versão: 1.0.1
                            </span>
                        </div>
                    </div>

                    {[
                        { title: 'Produto', links: productLinks },
                        { title: 'Ferramentas', links: toolsLinks },
                    ].map(({ title, links }) => (
                        <div key={title}>
                            <p className="mb-4 text-md font-semibold text-blue-400">
                                {title}
                            </p>

                            <div className="flex flex-col gap-2">
                                {links.map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="group flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-all duration-200"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <p
                        itemProp="copyrightYear"
                        className="text-sm text-slate-400 text-center"
                    >
                        © 2026 <span>KF Labs Company</span>. Todos os direitos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
