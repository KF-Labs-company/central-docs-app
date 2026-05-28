import { PDFDocument } from 'pdf-lib'
import { prisma } from '../../database/prisma'
import { Prisma } from '@prisma/client'

export class CompressPDFService {
    async execute(buffer: Buffer, userId?: string, ipAddress?: string) {
        const start = Date.now()

        const userSnapshot = await this.getUserSnapshot(userId)

        try {
            const pdfDoc = await PDFDocument.load(buffer)
            const compressedPdf = await pdfDoc.save({ useObjectStreams: true })
            const compressedBuffer = Buffer.from(compressedPdf)

            const reductionRate =
                ((buffer.length - compressedBuffer.length) / buffer.length) *
                100

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
            })

            return compressedBuffer
        } catch (err) {
            await this.track({
                userId,
                userSnapshot,
                ipAddress,
                status: 'ERROR',
                durationMs: Date.now() - start,
            })
            throw err
        }
    }

    private async getUserSnapshot(
        userId?: string
    ): Promise<Prisma.InputJsonValue | null> {
        if (!userId) return null

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                role: true,
            },
        })

        if (!user) return null

        return user
    }

    private async track({
        userId,
        userSnapshot,
        ipAddress,
        status,
        durationMs,
        metadata,
    }: {
        userId?: string
        userSnapshot?: Prisma.InputJsonValue | null
        ipAddress?: string
        status: 'SUCCESS' | 'ERROR'
        durationMs: number
        metadata?: Prisma.InputJsonValue
    }) {
        try {
            const tool = await prisma.tool.findUnique({
                where: { slug: 'compress-pdf' },
            })
            if (!tool) return

            await prisma.toolAccess.create({
                data: {
                    toolId: tool.id,
                    userId: userId ?? null,
                    userSnapshot: userSnapshot ?? Prisma.JsonNull,
                    ipAddress,
                    status,
                    durationMs,
                    metadata: metadata ?? Prisma.JsonNull,
                },
            })
        } catch (err) {
            console.error('trackAccess error:', err)
        }
    }
}
