export function createAuthHeaders(
    token: string | null
): Record<string, string> {
    const headers: Record<string, string> = {}

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return headers
}

export function createJsonAuthHeaders(
    token: string | null
): Record<string, string> {
    return {
        'Content-Type': 'application/json',
        ...createAuthHeaders(token),
    }
}
