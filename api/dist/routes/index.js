"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const pdf_routes_1 = require("./pdf.routes");
const auth_routes_1 = require("./auth.routes");
<<<<<<< HEAD
exports.routes = (0, express_1.Router)();
exports.routes.use('/pdf', pdf_routes_1.pdfRoutes);
exports.routes.use('/auth', auth_routes_1.authRoutes);
=======
const dashboard_routes_1 = require("./dashboard.routes");
const user_routes_1 = require("./user.routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/pdf', pdf_routes_1.pdfRoutes);
exports.routes.use('/auth', auth_routes_1.authRoutes);
exports.routes.use('/dashboard', dashboard_routes_1.dashboardRoutes);
exports.routes.use('/user', user_routes_1.userRoutes);
>>>>>>> dev
