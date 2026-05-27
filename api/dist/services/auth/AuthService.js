"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../database/prisma");
class AuthService {
    async me(token) {
        if (!token) {
            throw new Error('Token not found');
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    async logout(res) {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'strict',
        });
        return { success: true };
    }
}
exports.AuthService = AuthService;
