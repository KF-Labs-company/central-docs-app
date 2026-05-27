import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useGoogleLogin() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (credential: string) => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ token: credential }),
                }
            )

            if (!res.ok) throw new Error('Login failed')

            return res.json()
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['me'] })
        },
    })
}
