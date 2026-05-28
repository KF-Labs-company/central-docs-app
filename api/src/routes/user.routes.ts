import { Router } from 'express'
import { UserController } from '../controllers/user/UserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const userRoutes = Router()
const userController = new UserController()

userRoutes.delete('/me', ensureAuthenticated, userController.deleteUser)

export { userRoutes }
