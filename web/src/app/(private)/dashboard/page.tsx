'use client'

import { useState } from 'react'
import AuthGuard from '@/app/contexts/AuthGuard'
import { Button } from '@/app/components/ui/button'
import { useTools } from '@/app/hooks/dashboard/useTools'
import GridCockpit from '@/app/components/system/GridCockpit'
import { PageHeader } from '@/app/components/system/PageHeader'
import { useUsersCount } from '@/app/hooks/dashboard/useUsersCount'

export default function DashboardPage() {
    const [page, setPage] = useState(0)
    const { data: usersData, isLoading: loadingUsers } = useUsersCount()
    const { data: toolsData, isLoading: loadingTools } = useTools()
    const changePage = (newPage: number) => setPage(newPage)

    return (
        <AuthGuard isLoginRequired roles={['admin']}>
            <main className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 text-white">
                <PageHeader
                    title="Dashboard"
                    subTitle="Visão geral dos dados."
                />

                <section>
                    <div className="bg-black/50 p-5 rounded-md mb-5 border border-white/10 gap-2 flex">
                        <Button
                            variant="primary"
                            onClick={() => changePage(0)}
                            isActive={page === 0}
                        >
                            Visão geral
                        </Button>

                        <Button
                            variant="primary"
                            onClick={() => changePage(1)}
                            isActive={page === 1}
                        >
                            Comprimir PDF
                        </Button>
                    </div>

                    {page === 0 && (
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                            <GridCockpit
                                title="Usuários"
                                subTitle="Total de usuários cadastrados"
                                type="number"
                                value={usersData?.count ?? '0'}
                                isLoading={loadingUsers}
                            />

                            <GridCockpit
                                title="Ferramentas mais utilizadas"
                                subTitle="Lista das ferramentas mais utilizadas"
                                type="bar"
                                data={toolsData ?? []}
                                isLoading={loadingTools}
                                colSpan={2}
                            />
                        </div>
                    )}

                    {page === 1 && (
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                            <GridCockpit
                                title="Taxa de sucesso"
                                subTitle="Proporção de sucessos e falhas no uso da ferramenta"
                                type="pie"
                                data={toolsData ?? []}
                                isLoading={loadingTools}
                            />

                            <GridCockpit
                                title="Usuários logados vs. não logados"
                                subTitle="Quantidade de acessos por tipo de autenticação"
                                type="pie"
                                data={toolsData ?? []}
                                isLoading={loadingTools}
                            />

                            <GridCockpit
                                title="Taxa de redução"
                                subTitle="Percentual de redução do arquivo gerado"
                                type="pie"
                                data={toolsData ?? []}
                                isLoading={loadingTools}
                            />
                        </div>
                    )}
                </section>
            </main>
        </AuthGuard>
    )
}
