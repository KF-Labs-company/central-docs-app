"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const pdf_routes_1 = require("./pdf.routes");
const auth_routes_1 = require("./auth.routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/pdf', pdf_routes_1.pdfRoutes);
exports.routes.use('/auth', auth_routes_1.authRoutes);
//# sourceMappingURL=index.js.map