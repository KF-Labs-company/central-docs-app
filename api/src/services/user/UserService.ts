import { prisma } from '../../database/prisma'

export class UserService {
    async deleteUser(userId: string): Promise<void> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        await prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id: userId },
            })

            if (!user) throw new Error('User not found')

            await tx.toolAccess.updateMany({
                where: {
                    userId,
                },
                data: {
                    userSnapshot: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                        role: user.role,
                        deletedAt: new Date(),
                    },
                    userId: null,
                },
            })

            await tx.user.delete({
                where: { id: userId },
            })
        })
    }
}
