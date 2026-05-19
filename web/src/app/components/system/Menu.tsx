import Link from 'next/link'

import { Icon } from '@iconify/react'

export default function Menu() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5">
                <Link href="/" className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                        <Icon
                            icon="solar:document-bold"
                            className="text-3xl text-blue-400"
                        />
                    </div>

                    <div>
                        <strong className="text-lg font-bold text-white">
                            Central DOCS
                        </strong>

                        <p className="text-sm text-slate-400">
                            Plataforma de ferramentas de arquivos
                        </p>
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    <Link
                        href="/tools"
                        className="hidden rounded-md border border-white/10 bg-container-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:block"
                    >
                        Ferramentas
                    </Link>

                    <button className="flex gap-2 rounded-md border border-white/10 bg-container-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                        <Icon icon="logos:google-icon" className="text-xl" />
                        Entrar com Google
                    </button>

                    <span className="text-sm text-slate-300">
                        versão: 0.0.1
                    </span>
                </div>
            </nav>
        </header>
    )
}
