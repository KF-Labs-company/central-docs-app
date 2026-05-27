import { Request, Response } from 'express'
import { AuthService } from '../../services/auth/AuthService'

export class LogoutController {
    async handle(req: Request, res: Response) {
        const service = new AuthService()

        const result = await service.logout(res)

        return res.json(result)
    }
}
