import { Icon } from '@iconify/react'
import Link from 'next/link'

const productLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre o produto', href: '/sobre' },
    { label: 'Novidades', href: '/novidades' },
    { label: 'Atualizações', href: '/atualizacoes' },
    { label: 'Ferramentas', href: '/ferramentas' },
]

const toolsLinks = [{ label: 'Comprimir PDF', href: '/comprimir-pdf' }]

const sections = [
    { title: 'Produto', links: productLinks },
    { title: 'Ferramentas', links: toolsLinks },
]

export function Footer() {
    return (
        <footer
            className="z-50 overflow-hidden border-b border-white/5 bg-black/70 backdrop-blur-2xl"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="relative mx-auto max-w-5xl px-6 pb-6 pt-12">
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
                                <strong className="hidden text-lg font-bold text-white sm:block">
                                    Central DOCS
                                </strong>

                                <p className="hidden text-sm text-slate-400 md:block">
                                    Plataforma de ferramentas de arquivos
                                </p>
                            </div>
                        </Link>

                        <div className="mb-4 mt-5 flex items-center gap-1.5">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
                            </span>
                            <span className="text-[13px] text-slate-400">
                                Versão: 1.0.1
                            </span>
                        </div>
                    </div>

                    {sections.map(({ title, links }) => (
                        <div key={title}>
                            <p className="mb-4 text-md font-semibold text-blue-400">
                                {title}
                            </p>

                            <div className="flex flex-col gap-2">
                                {links.map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="flex items-center gap-1.5 text-sm text-slate-400 transition-all duration-200 hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    itemProp="copyrightYear"
                    className="text-center text-sm text-slate-400"
                >
                    © 2026 <span>KF Labs Company</span>. Todos os direitos
                    reservados.
                </p>
            </div>
        </footer>
    )
}
