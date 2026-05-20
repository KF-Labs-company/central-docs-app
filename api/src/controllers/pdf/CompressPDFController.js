"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressPDFController = void 0;
const CompressPDFService_1 = require("../../services/pdf/CompressPDFService");
class CompressPDFController {
    async handle(req, res) {
        const file = req.file;
        if (!file) {
            return res.status(400).json({
                error: 'File not provided',
            });
        }
        const service = new CompressPDFService_1.CompressPDFService();
        const compressedPdf = await service.execute(file.buffer);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=compressed.pdf');
        return res.send(compressedPdf);
    }
}
exports.CompressPDFController = CompressPDFController;
//# sourceMappingURL=CompressPDFController.js.map