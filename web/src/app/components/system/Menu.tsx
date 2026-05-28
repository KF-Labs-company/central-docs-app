'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useMe } from '@/app/hooks/auth/useMe'
import { useLogout } from '@/app/hooks/auth/useLogout'
import { useGoogleLogin } from '@/app/hooks/auth/useGoogleLogin'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { DropdownMenuCustom } from '@/app/components/system/DropdownMenuCustom'

export default function Menu() {
    const { data } = useMe()
    const user = data?.user
    const googleLogin = useGoogleLogin()

    async function handleLogin(credentialResponse: CredentialResponse) {
        const credential = credentialResponse.credential
        if (!credential) return

        googleLogin.mutate(credential)
    }

    const isAuthenticated = !!user
    const logout = useLogout()

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5">
                <Link href="/" className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                        <Icon
                            icon="solar:document-bold"
                            className="text-3xl text-blue-400"
                        />
                    </div>

                    <div>
                        <strong className="text-lg font-bold text-white hidden sm:block">
                            Central DOCS
                        </strong>

                        <p className="text-sm text-slate-400 hidden md:block">
                            Plataforma de ferramentas de arquivos
                        </p>
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    <Link
                        href="/ferramentas"
                        className="hidden sm:block rounded-md border border-white/10 bg-container-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                        Ferramentas
                    </Link>

                    {isAuthenticated && user ? (
                        <DropdownMenuCustom user={user} logout={logout} />
                    ) : (
                        <div className="overflow-hidden rounded-md">
                            {googleLogin.isPending ? (
                                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/3 px-3 py-2 overflow-hidden relative">
                                    <div className="h-8 w-8 rounded-full bg-white/10 animate-pulse shrink-0" />

                                    <div className="hidden md:flex flex-col gap-1.5">
                                        <div className="h-3.5 w-28 rounded bg-white/10 animate-pulse" />
                                        <div className="h-3 w-36 rounded bg-white/10 animate-pulse" />
                                    </div>

                                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
                                </div>
                            ) : (
                                <GoogleLogin
                                    onSuccess={handleLogin}
                                    onError={() => {
                                        console.log('Login Failed')
                                    }}
                                    theme="filled_black"
                                    size="medium"
                                    text="signin_with"
                                    shape="rectangular"
                                />
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
