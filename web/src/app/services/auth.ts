export async function loginWithGoogle(credential: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                token: credential,
            }),
        }
    )

    if (!response.ok) {
        throw new Error('Login failed')
    }

    return response.json()
}
