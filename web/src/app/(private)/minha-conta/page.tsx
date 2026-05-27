'use client'

import { Icon } from '@iconify/react'
import { useMe } from '@/app/hooks/auth/useMe'
import AuthGuard from '@/app/contexts/AuthGuard'
import { Button } from '@/app/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { useLogout } from '@/app/hooks/auth/useLogout'
import { PageHeader } from '@/app/components/system/PageHeader'

export default function MyAccount() {
    const { data } = useMe()
    const user = data?.user
    const logout = useLogout()

    const deleteAccount = useMutation({
        mutationFn: async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
                {
                    method: 'DELETE',
                    credentials: 'include',
                }
            )

            if (!res.ok) {
                const error = await res.json()
                throw new Error(error.message || 'Erro ao deletar conta')
            }

            return res.json()
        },
        onSuccess: async () => {
            logout()
        },
    })

    return (
        <AuthGuard isLoginRequired>
            <main className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 text-white">
                <PageHeader
                    title="Minha Conta"
                    subTitle="Informações gerais da conta."
                />

                <section>
                    <div className="flex flex-col gap-4 rounded-lg bg-black/30 border border-white/4 px-9 py-7">
                        <img
                            src={user?.avatar}
                            alt={user?.name}
                            className="h-20 w-20 rounded-full object-cover"
                        />

                        <p>
                            <span className="text-blue-400 font-bold">
                                Nome:
                            </span>{' '}
                            {user?.name}
                        </p>

                        <p>
                            <span className="text-blue-400 font-bold">
                                Email:
                            </span>{' '}
                            {user?.email}
                        </p>

                        <p>
                            <span className="text-blue-400 font-bold">
                                Provider:
                            </span>{' '}
                            Google
                        </p>

                        <p>
                            <span className="text-blue-400 font-bold">
                                Criação da conta:
                            </span>{' '}
                            {new Date(user?.createdAt ?? '').toLocaleDateString(
                                'pt-BR',
                                {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                }
                            )}
                        </p>
                    </div>
                </section>

                <section>
                    <div className="flex gap-3">
                        <Button
                            variant="destructive"
                            size="lg"
                            onClick={() => deleteAccount.mutate()}
                        >
                            <Icon icon="material-symbols-light:delete-rounded" />
                            Deletar conta
                        </Button>

                        <Button
                            variant="destructive"
                            size="lg"
                            onClick={logout}
                        >
                            <Icon icon="majesticons:logout" />
                            Sair
                        </Button>
                    </div>
                </section>

                <p className="text-slate-400 text-sm">
                    Utilizamos o login do Google exclusivamente para
                    autenticação, garantindo a segurança da sua conta.
                </p>
            </main>
        </AuthGuard>
    )
}
