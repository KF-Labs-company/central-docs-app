import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const optionalAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies?.token ?? extractBearerToken(req)

    if (!token) return next()

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string
            role: string
            email: string
        }

        ;(req as any).user = {
            id: decoded.id,
            role: decoded.role,
            email: decoded.email,
        }
    } catch {}

    next()
}

const extractBearerToken = (req: Request): string | null => {
    const authHeader = req.headers.authorization
    if (!authHeader) return null
    const [, token] = authHeader.split(' ')
    return token ?? null
}
