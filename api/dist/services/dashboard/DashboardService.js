"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const prisma_1 = require("../../database/prisma");
class DashboardService {
    async countUsers() {
        const count = await prisma_1.prisma.user.count();
        return count;
    }
    async listTools() {
        const tools = await prisma_1.prisma.tool.findMany({
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
        });
        return tools.map((tool) => ({
            name: tool.name,
            value: tool._count.accesses,
        }));
    }
}
exports.DashboardService = DashboardService;
