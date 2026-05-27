"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressPDFService = void 0;
const pdf_lib_1 = require("pdf-lib");
const prisma_1 = require("../../database/prisma");
const client_1 = require("@prisma/client");
class CompressPDFService {
    async execute(buffer, userId, ipAddress) {
        const start = Date.now();
        const userSnapshot = await this.getUserSnapshot(userId);
        try {
            const pdfDoc = await pdf_lib_1.PDFDocument.load(buffer);
            const compressedPdf = await pdfDoc.save({ useObjectStreams: true });
            const compressedBuffer = Buffer.from(compressedPdf);
            const reductionRate = ((buffer.length - compressedBuffer.length) / buffer.length) *
                100;
            await this.track({
                userId,
                userSnapshot,
                ipAddress,
                status: 'SUCCESS',
                durationMs: Date.now() - start,
                metadata: {
                    reductionRate,
                    originalSize: buffer.length,
                    compressedSize: compressedBuffer.length,
                },
            });
            return compressedBuffer;
        }
        catch (err) {
            await this.track({
                userId,
                userSnapshot,
                ipAddress,
                status: 'ERROR',
                durationMs: Date.now() - start,
            });
            throw err;
        }
    }
    async getUserSnapshot(userId) {
        if (!userId)
            return null;
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                role: true,
            },
        });
        if (!user)
            return null;
        return user;
    }
    async track({ userId, userSnapshot, ipAddress, status, durationMs, metadata, }) {
        try {
            const tool = await prisma_1.prisma.tool.findUnique({
                where: { slug: 'compress-pdf' },
            });
            if (!tool)
                return;
            await prisma_1.prisma.toolAccess.create({
                data: {
                    toolId: tool.id,
                    userId: userId ?? null,
                    userSnapshot: userSnapshot ?? client_1.Prisma.JsonNull,
                    ipAddress,
                    status,
                    durationMs,
                    metadata: metadata ?? client_1.Prisma.JsonNull,
                },
            });
        }
        catch (err) {
            console.error('trackAccess error:', err);
        }
    }
}
exports.CompressPDFService = CompressPDFService;
