"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ensureAuthenticated = (req, res, next) => {
    const token = req.cookies?.token ?? extractBearerToken(req);
    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id,
            role: decoded.role,
            email: decoded.email,
        };
        next();
    }
    catch {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
exports.ensureAuthenticated = ensureAuthenticated;
const extractBearerToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return null;
    const [, token] = authHeader.split(' ');
    return token ?? null;
};
