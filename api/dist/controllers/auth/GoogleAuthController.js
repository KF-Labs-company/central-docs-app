"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthController = void 0;
const GoogleAuthService_1 = require("../../services/auth/GoogleAuthService");
class GoogleAuthController {
    async handle(req, res) {
        try {
            const { token } = req.body;
            if (!token) {
                return res
                    .status(400)
                    .json({ error: 'Google token is required' });
            }
            const service = new GoogleAuthService_1.GoogleAuthService();
            const { user, authToken } = await service.execute(token);
            res.cookie('token', authToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            return res.json({ user });
        }
        catch (error) {
            return res.status(500).json({
                error: 'Authentication failed',
                details: error instanceof Error ? error.message : error,
            });
        }
    }
}
exports.GoogleAuthController = GoogleAuthController;
