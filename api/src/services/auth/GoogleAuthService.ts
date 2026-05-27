import jwt from 'jsonwebtoken'
import { OAuth2Client } from 'google-auth-library'
import { prisma } from '../../database/prisma'

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export class GoogleAuthService {
    async execute(token: string) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        })

        const payload = ticket.getPayload()

        if (!payload) {
            throw new Error('Invalid Google token')
        }

        const { sub, email, name, picture } = payload

        if (!email) {
            throw new Error('Google did not send the email.')
        }

        let user = await prisma.user.findFirst({
            where: {
                OR: [{ googleId: sub }, { email: email }],
            },
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    googleId: sub,
                    email,
                    name: name || '',
                    avatar: picture,
                    role: 'user',
                },
            })
        }

        const authToken = jwt.sign(
            {
                id: user.id,
                role: user.role,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        )

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                createdAt: user.createdAt,
            },
            authToken,
        }
    }
}
