'use client'

import AuthGuard from '@/app/contexts/AuthGuard'
import { PageHeader } from '@/app/components/system/PageHeader'
import { SwitchCustom } from '@/app/components/system/SwitchCustom'

export default function Config() {
    return (
        <AuthGuard isLoginRequired>
            <main className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 text-white">
                <PageHeader
                    title="Configurações"
                    subTitle="Gerencie suas preferências e configurações."
                />

                <section>
                    <div className="flex flex-col gap-4 rounded-lg bg-black/30 border border-white/4 px-9 py-7">
                        <h2 className="text-2xl font-semibold">Preferências</h2>
                        <div className="flex flex-col items-center gap-2">
                            <SwitchCustom
                                title="Receber notificações via email"
                                description="Ative esta opção para receber notificações por email, mantendo-se informado sobre atualizações e novidades."
                                id="notifications-email"
                            />

                            <SwitchCustom
                                title="Receber notificações via sistema"
                                description="Ative esta opção para receber notificações pelo sistema, mantendo-se informado sobre atualizações e novidades."
                                id="notifications-system"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </AuthGuard>
    )
}
