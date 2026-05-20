'use client'

import { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './contexts/AuthContext'

type Props = {
    children: ReactNode
}

export default function Providers({ children }: Props) {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
            <AuthProvider>{children}</AuthProvider>
        </GoogleOAuthProvider>
    )
}
