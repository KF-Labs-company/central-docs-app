"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const optionalAuthenticated = (req, res, next) => {
    const token = req.cookies?.token ?? extractBearerToken(req);
    if (!token)
        return next();
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id,
            role: decoded.role,
            email: decoded.email,
        };
    }
    catch { }
    next();
};
exports.optionalAuthenticated = optionalAuthenticated;
const extractBearerToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return null;
    const [, token] = authHeader.split(' ');
    return token ?? null;
};
