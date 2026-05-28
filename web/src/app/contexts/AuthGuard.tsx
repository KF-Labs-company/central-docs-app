'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useMe } from '../hooks/auth/useMe'

type Props = {
    children: React.ReactNode
    isLoginRequired?: boolean
    roles?: ('admin' | 'user')[]
}

export default function AuthGuard({
    children,
    isLoginRequired = false,
    roles,
}: Props) {
    const router = useRouter()
    const { data, isLoading, isError } = useMe()

    const user = data?.user ?? null

    useEffect(() => {
        if (isLoading) return

        if (isLoginRequired && (isError || !user)) {
            router.push('/login-necessario')
            return
        }

        if (roles && user && !roles.includes(user.role)) {
            router.push('/acesso-negado')
        }
    }, [isLoading, isError, user, roles, isLoginRequired, router])

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#020617] text-white">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            </div>
        )
    }

    if (isLoginRequired && !user) return null
    if (roles && user && !roles.includes(user.role)) return null

    return children
}
