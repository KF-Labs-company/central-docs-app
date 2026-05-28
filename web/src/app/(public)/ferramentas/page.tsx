'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useMemo, useState } from 'react'
import { PageHeader } from '@/app/components/system/PageHeader'

const categories = [
    { id: 'pdf', label: 'PDF', locked: false },
    { id: 'images', label: 'Imagens', locked: true },
    { id: 'videos', label: 'Vídeos', locked: true },
    { id: 'audio', label: 'Áudio', locked: true },
]

const list = [
    {
        id: 'pdf',
        icon: 'ic:round-compress',
        title: 'Comprimir PDF',
        description:
            'Reduza o tamanho dos seus arquivos PDF sem perder qualidade.',
        path: '/comprimir-pdf',
        new: true,
    },
]

export default function ToolsPage() {
    const [active, setActive] = useState('pdf')

    const filtered = useMemo(() => {
        return list.filter((item) => item.id === active)
    }, [active])

    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-12">
            <PageHeader
                title="Todas as ferramentas"
                subTitle="Tudo o que você precisa em um só lugar."
            />

            <section className="flex flex-wrap gap-3">
                {categories.map((cat) => {
                    const isLocked = cat.locked

                    return (
                        <button
                            key={cat.id}
                            disabled={isLocked}
                            onClick={() => {
                                if (!isLocked) setActive(cat.id)
                            }}
                            className={`
                                relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition
                                ${
                                    active === cat.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white/5 text-slate-300'
                                }
                                ${
                                    isLocked
                                        ? 'cursor-not-allowed opacity-40'
                                        : 'hover:bg-white/10'
                                }
                            `}
                        >
                            {cat.label}

                            {isLocked && (
                                <span className="flex items-center gap-1 text-xs text-slate-400">
                                    <Icon
                                        icon="material-symbols:lock-outline"
                                        className="text-sm"
                                    />
                                    Em breve
                                </span>
                            )}
                        </button>
                    )
                })}
            </section>

            <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((data) => (
                    <Link href={data.path} key={data.title}>
                        <article className="group relative rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/4 hover:cursor-pointer">
                            {data.new && (
                                <p className="absolute -top-2 -right-2 bg-purple-800 text-white font-bold rounded-md px-2 py-1 text-sm">
                                    Novo recurso
                                </p>
                            )}

                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                                    <Icon
                                        icon={data.icon}
                                        className="text-3xl text-blue-400"
                                    />
                                </div>

                                <h2 className="text-2xl font-bold text-white">
                                    {data.title}
                                </h2>
                            </div>

                            <p className="leading-7 text-slate-400">
                                {data.description}
                            </p>
                        </article>
                    </Link>
                ))}
            </section>
        </main>
    )
}
