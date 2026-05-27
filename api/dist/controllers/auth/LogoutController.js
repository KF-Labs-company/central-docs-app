"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutController = void 0;
const AuthService_1 = require("../../services/auth/AuthService");
class LogoutController {
    async handle(req, res) {
        const service = new AuthService_1.AuthService();
        const result = await service.logout(res);
        return res.json(result);
    }
}
exports.LogoutController = LogoutController;
