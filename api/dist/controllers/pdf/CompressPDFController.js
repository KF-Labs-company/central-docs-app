"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressPDFController = void 0;
const CompressPDFService_1 = require("../../services/pdf/CompressPDFService");
class CompressPDFController {
    async handle(req, res) {
        const file = req.file;
        if (!file) {
<<<<<<< HEAD
            return res.status(400).json({
                error: 'File not provided',
            });
        }
        const service = new CompressPDFService_1.CompressPDFService();
        const compressedPdf = await service.execute(file.buffer);
=======
            return res.status(400).json({ error: 'File not provided' });
        }
        const service = new CompressPDFService_1.CompressPDFService();
        const userId = req.user?.id;
        const ipAddress = req.ip;
        const compressedPdf = await service.execute(file.buffer, userId, ipAddress);
>>>>>>> dev
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=compressed.pdf');
        return res.send(compressedPdf);
    }
}
exports.CompressPDFController = CompressPDFController;
