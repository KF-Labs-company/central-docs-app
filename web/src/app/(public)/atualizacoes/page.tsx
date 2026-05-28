'use client'

import { Icon } from '@iconify/react'
import { PageHeader } from '@/app/components/system/PageHeader'

export default function Updates() {
    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-12">
            <PageHeader
                title="Atualizações"
                subTitle="Todas as atualizações, melhorias e correções de bugs da plataforma serão listadas aqui."
            />

            <section className="flex flex-col gap-6">
                <div className="flex flex-col relative gap-4 rounded-lg bg-black/30 border border-white/4 px-9 py-7">
                    <p className="absolute -top-2 -right-2 bg-purple-900 px-3 py-1 text-md font-bold rounded-md">
                        Tag v1.1.0
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Release 27/05/2026
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="bg-white/6 p-5 rounded-md">
                            <h3 className="text-lg font-medium text-slate-300">
                                Correções
                            </h3>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Correções e ajustes na configuração de CORS.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Correção no login social, prevendo erros do
                                google.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Padrões de escrita de código e refatoração.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Melhorias de design do sistema.
                            </p>
                        </div>

                        <div className="bg-white/6 p-5 rounded-md">
                            <h3 className="text-lg font-medium text-slate-300">
                                Implementações
                            </h3>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criando rotina para deletar conta.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criando do dashboard para métricas do sistema.
                                (somente usuário ADM tem acesso)
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criando páginas de retornos de erros HTTP para
                                requisições em exceção.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col relative gap-4 rounded-lg bg-black/30 border border-white/4 px-9 py-7">
                    <p className="absolute -top-2 -right-2 bg-purple-900 px-3 py-1 text-md font-bold rounded-md">
                        Tag v1.0.1
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Release 21/05/2026
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="bg-white/6 p-5 rounded-md">
                            <h3 className="text-lg font-medium text-slate-300">
                                Correções
                            </h3>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Corrigido ux/ui de dispositivos moveis.
                            </p>
                        </div>

                        <div className="bg-white/6 p-5 rounded-md">
                            <h3 className="text-lg font-medium text-slate-300">
                                Implementações
                            </h3>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criação do rodapé do site (footer).
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criação da rota 404, paginá personalizada de
                                erro.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criação do loading skeleton ao realizar o login
                                no sistema.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col relative gap-4 rounded-lg bg-black/30 border border-white/4 px-9 py-7">
                    <p className="absolute -top-2 -right-2 bg-purple-900 px-3 py-1 text-md font-bold rounded-md">
                        Tag v1.0.0
                    </p>
                    <h2 className="text-2xl font-semibold">
                        Release 19/05/2026
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="bg-white/6 p-5 rounded-md">
                            <h3 className="text-lg font-medium text-slate-300">
                                Implementações
                            </h3>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Servidor online.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Importação do projeto para o GitHub.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Configurações de ambiente.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Implementação do banco de dados.
                            </p>
                            <p className="text-slate-400 flex items-center gap-2">
                                <Icon icon="ic:round-check" />
                                Criação base do sistema.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
