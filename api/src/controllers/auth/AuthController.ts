import { Request, Response } from 'express'
import { AuthService } from '../../services/auth/AuthService'

export class AuthController {
    async handle(request: Request, response: Response) {
        try {
            const authService = new AuthService()
            const user = await authService.me(request.cookies.token)

            return response.json({ user })
        } catch (error) {
            return response.status(401).json({
                message: 'Unauthorized',
            })
        }
    }
}
