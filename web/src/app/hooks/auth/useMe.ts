import { useQuery } from '@tanstack/react-query'

type User = {
    id: string
    name: string
    email: string
    avatar?: string
    createdAt: string
    role: 'admin' | 'user'
}

export function useMe() {
    return useQuery<{ user: User | null }>({
        queryKey: ['me'],

        queryFn: async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            )

            if (res.status === 401) {
                return { user: null }
            }

            if (!res.ok) {
                return { user: null }
            }

            return res.json()
        },

        retry: false,

        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60,
    })
}
