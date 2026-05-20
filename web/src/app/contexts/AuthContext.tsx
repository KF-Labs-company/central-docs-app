'use client'

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'

type User = {
    id: string
    name: string
    email: string
    avatar?: string
}

type AuthContextType = {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    login: (user: User, token: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const storedToken = localStorage.getItem('token')

        if (storedUser && storedUser !== 'undefined') {
            try {
                setUser(JSON.parse(storedUser))
            } catch {
                localStorage.removeItem('user')
            }
        }

        if (storedToken && storedToken !== 'undefined') {
            setToken(storedToken)
        }
    }, [])

    const login = (user: User, token: string) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)

        setUser(user)
        setToken(token)
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!user,
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
