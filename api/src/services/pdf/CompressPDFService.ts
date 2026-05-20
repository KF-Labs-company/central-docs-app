import { PDFDocument } from 'pdf-lib'

export class CompressPDFService {
    async execute(buffer: Buffer) {
        const pdfDoc = await PDFDocument.load(buffer)

        const compressedPdf = await pdfDoc.save({
            useObjectStreams: true,
        })

        return Buffer.from(compressedPdf)
    }
}
