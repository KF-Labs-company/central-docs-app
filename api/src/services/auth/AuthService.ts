import jwt from 'jsonwebtoken'
import { prisma } from '../../database/prisma'
import { Response } from 'express'

type TokenPayload = {
    id: string
    role: string
    email: string
}

export class AuthService {
    async me(token?: string) {
        if (!token) {
            throw new Error('Token not found')
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as TokenPayload

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
        })

        if (!user) {
            throw new Error('User not found')
        }

        return user
    }

    async logout(res: Response) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
        })

        return { success: true }
    }
}
