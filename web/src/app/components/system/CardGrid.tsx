import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

type Tool = {
    icon: string
    title: string
    description: string
}

type CardGridProps = {
    list: Tool[]
}

export default function CardGrid({ list }: CardGridProps) {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {list.map((data) => (
                <article
                    key={data.title}
                    className={cn(
                        'rounded-3xl border border-white/10 bg-container-primary',
                        'p-7 backdrop-blur-xl transition',
                        'hover:border-blue-500/30 hover:bg-blue-500/3'
                    )}
                >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                        <Icon
                            icon={data.icon}
                            className="text-3xl text-blue-400"
                        />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white">
                        {data.title}
                    </h3>

                    <p className="leading-7 text-slate-400">
                        {data.description}
                    </p>
                </article>
            ))}
        </div>
    )
}
