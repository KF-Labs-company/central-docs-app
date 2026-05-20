import { Request, Response } from 'express'
import { GoogleAuthService } from '../../services/auth/GoogleAuthService'

export class GoogleAuthController {
    async handle(req: Request, res: Response) {
        try {
            const { token } = req.body

            if (!token) {
                return res.status(400).json({
                    error: 'Google token is required',
                })
            }

            const service = new GoogleAuthService()
            const result = await service.execute(token)

            return res.json(result)
        } catch (error) {
            console.error(error)

            return res.status(500).json({
                error: 'Authentication failed',
            })
        }
    }
}
