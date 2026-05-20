"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthController = void 0;
const GoogleAuthService_1 = require("../../services/auth/GoogleAuthService");
class GoogleAuthController {
    async handle(req, res) {
        try {
            const { token } = req.body;
            if (!token) {
                return res.status(400).json({
                    error: 'Google token is required',
                });
            }
            const service = new GoogleAuthService_1.GoogleAuthService();
            const result = await service.execute(token);
            return res.json(result);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                error: 'Authentication failed',
            });
        }
    }
}
exports.GoogleAuthController = GoogleAuthController;
