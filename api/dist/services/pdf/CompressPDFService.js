"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressPDFService = void 0;
const pdf_lib_1 = require("pdf-lib");
class CompressPDFService {
    async execute(buffer) {
        const pdfDoc = await pdf_lib_1.PDFDocument.load(buffer);
        const compressedPdf = await pdfDoc.save({
            useObjectStreams: true,
        });
        return Buffer.from(compressedPdf);
    }
}
exports.CompressPDFService = CompressPDFService;
