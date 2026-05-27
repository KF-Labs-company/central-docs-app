'use client'

import { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '../contexts/AuthContext'

type Props = {
    children: ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
            refetchOnWindowFocus: true,
            retry: 1,
        },
    },
})

export default function Providers({ children }: Props) {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
            <QueryClientProvider client={queryClient}>
                <AuthProvider>{children}</AuthProvider>
            </QueryClientProvider>
        </GoogleOAuthProvider>
    )
}
