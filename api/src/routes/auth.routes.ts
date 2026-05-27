import { Router } from 'express'
import { GoogleAuthController } from '../controllers/auth/GoogleAuthController'
import { AuthController } from '../controllers/auth/AuthController'
import { LogoutController } from '../controllers/auth/LogoutController'

const authRoutes = Router()
const googleAuthController = new GoogleAuthController()
const authController = new AuthController()
const logoutController = new LogoutController()

authRoutes.post('/google', googleAuthController.handle)
authRoutes.get('/me', authController.handle)
authRoutes.post('/logout', logoutController.handle)
export { authRoutes }
