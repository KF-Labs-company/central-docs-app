import type { Metadata } from 'next'
import { Icon } from '@iconify/react'
import CardGrid from './components/system/CardGrid'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Central DOCS',
    description:
        'Manipule PDFs, imagens, vídeos e documentos gratuitamente online.',
}

const tools = [
    {
        icon: 'solar:document-bold',
        title: 'PDF',
        description: 'Comprima, junte, divida e organize arquivos PDF.',
    },
    {
        icon: 'solar:gallery-bold',
        title: 'Images',
        description: 'Converta, comprima e otimize imagens online.',
    },
    {
        icon: 'solar:video-frame-bold',
        title: 'Videos',
        description: 'Converta vídeos, compacte arquivos e extraia áudio.',
    },
    {
        icon: 'solar:music-note-bold',
        title: 'Audios',
        description: 'Converta áudios, remova ruídos e compacte arquivos.',
    },
]

const list = [
    {
        icon: 'material-symbols-light:folder-limited',
        title: 'Limite diário',
        description:
            ' Usuários sem login podem utilizar até 3 processamentos gratuitos por dia.',
    },
    {
        icon: 'ri:google-fill',
        title: 'Conta Google',
        description:
            'Entre com sua conta Google para desbloquear recursos ilimitados e futuras funcionalidades.',
    },
    {
        icon: 'carbon:security',
        title: 'Segurança',
        description:
            'Seus arquivos são processados com segurança e não permanecem armazenados após o uso.',
    },
    {
        icon: 'material-symbols:check-rounded',
        title: 'Gratuito',
        description:
            'As principais ferramentas da plataforma podem ser utilizadas gratuitamente.',
    },
]

export default function HomePage() {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-28 px-5 py-10">
            <section className="relative overflow-hidden rounded-md border border-white/10 bg-linear-to-br from-blue-500/10 to-cyan-500/5 p-8 shadow-[0_0_120px_rgba(59,130,246,0.12)] lg:p-14">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <div className="flex w-fit items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2">
                            <div className="h-2 w-2 rounded-full bg-blue-400" />

                            <span className="text-sm font-medium text-blue-300">
                                Plataforma de arquivos online
                            </span>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h1 className="max-w-2xl text-5xl font-black leading-none text-white lg:text-7xl">
                                Manipule arquivos online com velocidade
                            </h1>

                            <p className="max-w-xl text-lg leading-8 text-slate-300">
                                Comprima PDFs, converta imagens, compacte vídeos
                                e organize arquivos diretamente do navegador.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/ferramentas"
                                className="rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] transition hover:scale-[1.02]"
                            >
                                Começar agora
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-5">
                            <div>
                                <strong className="text-3xl font-black text-white">
                                    100%
                                </strong>

                                <p className="mt-1 text-sm text-slate-400">
                                    Gratuito
                                </p>
                            </div>

                            <div>
                                <strong className="text-3xl font-black text-white">
                                    Browser
                                </strong>

                                <p className="mt-1 text-sm text-slate-400">
                                    Processamento local
                                </p>
                            </div>

                            <div>
                                <strong className="text-3xl font-black text-white">
                                    Seguro
                                </strong>

                                <p className="mt-1 text-sm text-slate-400">
                                    Sem armazenamento
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

                        <div className="relative grid gap-5">
                            {tools.map((tool) => (
                                <article
                                    key={tool.title}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-white/3
                                        p-6
                                        backdrop-blur-xl
                                        transition
                                        hover:-translate-y-2
                                        hover:border-blue-500/40
                                        hover:bg-blue-500/4
                                    "
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                                            <Icon
                                                icon={tool.icon}
                                                className="text-3xl text-blue-400"
                                            />
                                        </div>

                                        <h2 className="text-2xl font-bold text-white">
                                            {tool.title}
                                        </h2>
                                    </div>

                                    <p className="leading-7 text-slate-400">
                                        {tool.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Recursos
                    </span>

                    <h2 className="text-4xl font-black text-white">
                        Ferramentas modernas para qualquer arquivo
                    </h2>

                    <p className="max-w-3xl text-lg leading-8 text-slate-400">
                        Utilize ferramentas rápidas e modernas para manipular
                        PDFs, imagens, vídeos, documentos e diversos outros
                        formatos online.
                    </p>
                </div>

                <CardGrid list={tools} />
            </section>

            <section className="rounded-md border border-white/10 bg-white/3 p-10 backdrop-blur-xl">
                <div>
                    <div>
                        <h2 className="mb-4 text-3xl font-black text-white">
                            Como funciona?
                        </h2>

                        <p className="leading-8 text-slate-400">
                            Faça upload dos seus arquivos, escolha a ferramenta
                            desejada e baixe o resultado em segundos.
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-3 mt-6">
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                            <strong className="mb-3 block text-xl font-bold text-white">
                                1. Faça upload
                            </strong>

                            <p className="leading-7 text-slate-400">
                                Envie arquivos diretamente do computador.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                            <strong className="mb-3 block text-xl font-bold text-white">
                                2. Processamento
                            </strong>

                            <p className="leading-7 text-slate-400">
                                Manipulação rápida diretamente no navegador.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                            <strong className="mb-3 block text-xl font-bold text-white">
                                3. Downloads
                            </strong>

                            <p className="leading-7 text-slate-400">
                                Baixe o arquivo depois de pronto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Importante
                    </span>

                    <h2 className="text-4xl font-black text-white">
                        Use gratuitamente ou entre com sua conta Google
                    </h2>

                    <p className="max-w-3xl text-lg leading-8 text-slate-400">
                        Você pode utilizar as ferramentas sem cadastro, porém
                        usuários autenticados possuem acesso ilimitado e uma
                        experiência mais completa.
                    </p>
                </div>

                <CardGrid list={list} />
            </section>

            <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 p-10 backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-40 w-40 bg-blue-500/10 blur-3xl" />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-3xl">
                        <span className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                            Powered by KF Labs Company
                        </span>

                        <h2 className="mb-5 text-4xl font-black leading-tight text-white">
                            Tecnologia criada para simplificar processos
                            digitais
                        </h2>

                        <p className="text-lg leading-8 text-slate-400">
                            A Central DOCS faz parte do ecossistema da
                            <span className="font-semibold text-blue-400">
                                {' '}
                                KF Labs Company
                            </span>
                            , focada no desenvolvimento de soluções modernas,
                            rápidas e acessíveis.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                            <strong className="mb-2 block text-3xl font-black text-white">
                                100%
                            </strong>

                            <p className="text-sm leading-7 text-slate-400">
                                Processamento online e gratuito
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                            <strong className="mb-2 block text-3xl font-black text-white">
                                Seguro
                            </strong>

                            <p className="text-sm leading-7 text-slate-400">
                                Arquivos protegidos durante o processamento
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
