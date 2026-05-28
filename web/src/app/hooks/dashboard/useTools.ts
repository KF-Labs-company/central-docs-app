import { useQuery } from '@tanstack/react-query'

export function useTools() {
    return useQuery({
        queryKey: ['dashboard-tools'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/dashboard/listTools`,
                {
                    credentials: 'include',
                }
            )

            if (!res.ok) throw new Error('Error fetching tools')

            return res.json()
        },
    })
}
