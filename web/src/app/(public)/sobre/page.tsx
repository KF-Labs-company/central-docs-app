import { Icon } from '@iconify/react'
import { PageHeader } from '@/app/components/system/PageHeader'

export default function On() {
    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-12">
            <PageHeader title="Sobre" subTitle="Central DOCS" />

            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 rounded-lg bg-black/30 border border-white/4 px-9 py-7">
                    <h2 className="text-2xl font-semibold text-white">
                        Tela em desenvolvimento
                    </h2>
                    <p className="text-md leading-relaxed text-slate-300">
                        Estamos trabalhando nesta funcionalidade para entregar
                        uma experiência melhor em breve.
                    </p>
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:heart" className="text-purple-500" />
                        <p className="text-sm text-slate-400">
                            Obrigado pela paciência
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
