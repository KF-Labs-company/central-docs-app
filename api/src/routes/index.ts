import { Router } from 'express'
import { pdfRoutes } from './pdf.routes'
import { authRoutes } from './auth.routes'
import { dashboardRoutes } from './dashboard.routes'
import { userRoutes } from './user.routes'

export const routes = Router()

routes.use('/pdf', pdfRoutes)
routes.use('/auth', authRoutes)
routes.use('/dashboard', dashboardRoutes)
routes.use('/user', userRoutes)
