import { useQuery } from '@tanstack/react-query'

export function useUsersCount() {
    return useQuery({
        queryKey: ['dashboard-users-count'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/dashboard/countUsers`,
                {
                    credentials: 'include',
                }
            )

            if (!res.ok) throw new Error('Error fetching users')

            return res.json()
        },
    })
}
