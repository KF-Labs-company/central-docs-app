import { prisma } from '../../database/prisma'

export class DashboardService {
    async countUsers() {
        const count = await prisma.user.count()

        return count
    }

    async listTools() {
        const tools = await prisma.tool.findMany({
            where: { isActive: true },
            select: {
                name: true,
                _count: {
                    select: {
                        accesses: true,
                    },
                },
            },
            orderBy: {
                accesses: {
                    _count: 'desc',
                },
            },
        })

        return tools.map((tool) => ({
            name: tool.name,
            value: tool._count.accesses,
        }))
    }
}
