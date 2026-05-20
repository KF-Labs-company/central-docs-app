'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

import { loginWithGoogle } from '@/app/services/auth'
import { useAuth } from '@/app/contexts/AuthContext'

export default function Menu() {
    const { user, login, logout, isAuthenticated } = useAuth()

    async function handleLogin(credentialResponse: CredentialResponse) {
        try {
            const credential = credentialResponse.credential

            if (!credential) return

            const response = await loginWithGoogle(credential)

            login(response.user, response.token)
        } catch (error) {
            console.error('Login error:', error)
        }
    }

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                        <Icon
                            icon="solar:document-bold"
                            className="text-3xl text-blue-400"
                        />
                    </div>

                    <div>
                        <strong className="text-lg font-bold text-white">
                            Central DOCS
                        </strong>

                        <p className="text-sm text-slate-400">
                            Plataforma de ferramentas de arquivos
                        </p>
                    </div>
                </Link>

                {/* AÇÕES */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/tools"
                        className="hidden rounded-md border border-white/10 bg-container-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:block"
                    >
                        Ferramentas
                    </Link>

                    {/* AUTH STATE */}
                    {isAuthenticated && user ? (
                        <div className="flex items-center gap-3">
                            {/* LOGOUT */}
                            <button
                                onClick={logout}
                                className="rounded-md border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
                            >
                                Sair
                            </button>

                            {/* USER INFO */}
                            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-container-primary px-3 py-2">
                                {user.avatar ? (
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="h-8 w-8 rounded-full"
                                    />
                                ) : (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                                        {user.name?.charAt(0)}
                                    </div>
                                )}

                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-white">
                                        {user.name}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-hidden rounded-md">
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
                        </div>
                    )}

                    <span className="text-sm text-slate-300">
                        versão: 0.0.1
                    </span>
                </div>
            </nav>
        </header>
    )
}
