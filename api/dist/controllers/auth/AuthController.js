"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../../services/auth/AuthService");
class AuthController {
    async handle(request, response) {
        try {
            const authService = new AuthService_1.AuthService();
            const user = await authService.me(request.cookies.token);
            return response.json({ user });
        }
        catch (error) {
            return response.status(401).json({
                message: 'Unauthorized',
            });
        }
    }
}
exports.AuthController = AuthController;
