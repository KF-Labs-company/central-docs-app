"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const google_auth_library_1 = require("google-auth-library");
const prisma_1 = require("../../database/prisma");
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
class GoogleAuthService {
    async execute(token) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload) {
            throw new Error('Invalid Google token');
        }
        const { sub, email, name, picture } = payload;
        if (!email) {
            throw new Error('Google did not send the email.');
        }
        let user = await prisma_1.prisma.user.findFirst({
            where: {
                OR: [{ googleId: sub }, { email: email }],
            },
        });
        if (!user) {
            user = await prisma_1.prisma.user.create({
                data: {
                    googleId: sub,
                    email,
                    name: name || '',
                    avatar: picture,
                    role: 'user',
                },
            });
        }
        const authToken = jsonwebtoken_1.default.sign({
            id: user.id,
            role: user.role,
            email: user.email,
        }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                createdAt: user.createdAt,
            },
            authToken,
        };
    }
}
exports.GoogleAuthService = GoogleAuthService;
