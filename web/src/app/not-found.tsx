'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
    const pathname = usePathname()

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16">
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1
                    className="mb-3 text-9xl font-bold leading-none text-red-600"
                    aria-label="Erro 404"
                >
                    404
                </h1>

                {pathname && (
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm bg-slate-700">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-white"></span>
                        </span>
                        {pathname}
                    </div>
                )}

                <h2 className="mb-3 text-xl font-bold text-slate-400">
                    Página não encontrada
                </h2>

                <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
                    A rota que você tentou acessar não existe ou foi movida.
                </p>

                <div className="flex items-center gap-2.5">
                    <Link
                        href="/"
                        className="rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] transition hover:scale-[1.02]"
                    >
                        Voltar ao início
                    </Link>
                </div>
            </div>
        </div>
    )
}
