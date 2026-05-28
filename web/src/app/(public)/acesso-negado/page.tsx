import Link from 'next/link'

export default function AccessDenied() {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16">
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1
                    className="mb-3 text-9xl font-bold leading-none text-red-600"
                    aria-label="Erro 404"
                >
                    403
                </h1>

                <h2 className="mb-3 text-xl font-bold text-slate-400">
                    Não autorizado
                </h2>

                <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
                    Você não tem permissão para acessar esta página. Se você
                    acha que isso é um erro, entre em contato com o
                    administrador do sistema.
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
