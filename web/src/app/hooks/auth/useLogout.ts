import { useQueryClient } from '@tanstack/react-query'

export function useLogout() {
    const queryClient = useQueryClient()

    return async function logout() {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        })

        queryClient.removeQueries({ queryKey: ['me'] })

        window.location.href = '/'
    }
}
