"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../database/prisma");
class UserService {
    async deleteUser(userId) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
        });
        await prisma_1.prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id: userId },
            });
            if (!user)
                throw new Error('User not found');
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
            });
            await tx.user.delete({
                where: { id: userId },
            });
        });
    }
}
exports.UserService = UserService;
