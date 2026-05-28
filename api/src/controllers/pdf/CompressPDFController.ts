import { Request, Response } from 'express'
import { CompressPDFService } from '../../services/pdf/CompressPDFService'

export class CompressPDFController {
    async handle(req: Request, res: Response) {
        const file = req.file

        if (!file) {
            return res.status(400).json({ error: 'File not provided' })
        }

        const service = new CompressPDFService()

        const userId = (req as any).user?.id
        const ipAddress = req.ip

        const compressedPdf = await service.execute(
            file.buffer,
            userId,
            ipAddress
        )

        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=compressed.pdf'
        )

        return res.send(compressedPdf)
    }
}
