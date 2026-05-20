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

        let user = await prisma.user.findUnique({
            where: {
                email: email!,
            },
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    googleId: sub,
                    email: email!,
                    name: name!,
                    avatar: picture,
                },
            })
        }

        const authToken = jwt.sign(
            {
                userId: user.id,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '7d',
            }
        )

        return {
            user,
            token: authToken,
        }
    }
}
