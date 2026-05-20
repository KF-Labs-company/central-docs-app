import { Router } from 'express'
import { pdfRoutes } from './pdf.routes'
import { authRoutes } from './auth.routes'

export const routes = Router()

routes.use('/pdf', pdfRoutes)
routes.use('/auth', authRoutes)
