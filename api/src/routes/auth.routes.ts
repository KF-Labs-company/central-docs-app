import { Router } from 'express'
import { GoogleAuthController } from '../controllers/auth/GoogleAuthController'

const authRoutes = Router()
const googleAuthController = new GoogleAuthController()

authRoutes.post('/google', googleAuthController.handle)
export { authRoutes }
