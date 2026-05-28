"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdfRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = require("../config/multer");
const CompressPDFController_1 = require("../controllers/pdf/CompressPDFController");
const compressPDFController = new CompressPDFController_1.CompressPDFController();
exports.pdfRoutes = (0, express_1.Router)();
const upload = (0, multer_1.default)(multer_2.multerConfig);
exports.pdfRoutes.post('/compress', upload.single('file'), compressPDFController.handle);
//# sourceMappingURL=pdf.routes.js.map