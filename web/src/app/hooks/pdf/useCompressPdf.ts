import { useMutation } from '@tanstack/react-query'

export function useCompressPdf() {
    return useMutation({
        mutationFn: async (file: File) => {
            const formData = new FormData()
            formData.append('file', file)

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/pdf/compress`,
                {
                    method: 'POST',
                    credentials: 'include',
                    body: formData,
                }
            )

            if (!res.ok) {
                const error = await res.json().catch(() => ({}))
                throw error
            }

            return res.blob()
        },
    })
}
