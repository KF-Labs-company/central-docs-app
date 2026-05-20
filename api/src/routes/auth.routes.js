"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const GoogleAuthController_1 = require("../controllers/auth/GoogleAuthController");
const authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
const googleAuthController = new GoogleAuthController_1.GoogleAuthController();
authRoutes.post('/google', googleAuthController.handle);
//# sourceMappingURL=auth.routes.js.map