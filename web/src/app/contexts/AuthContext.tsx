'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useMe } from '../hooks/auth/useMe'

type User = {
    id: string
    name: string
    email: string
    avatar?: string
    createdAt: string
    role: 'admin' | 'user'
}

type AuthContextType = {
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    login: (user: User) => void
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading } = useMe()

    const user = data?.user ?? null

    const login = () => {}

    const logout = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        })

        window.location.href = '/'
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                loading: isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }

    return context
}
