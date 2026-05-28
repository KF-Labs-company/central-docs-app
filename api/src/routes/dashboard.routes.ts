import { Router } from 'express'
import { DashboardController } from '../controllers/dashboard/DashboardController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const dashboardRoutes = Router()
const dashboardController = new DashboardController()

dashboardRoutes.get(
    '/countUsers',
    ensureAuthenticated,
    dashboardController.countUsers
)
dashboardRoutes.get(
    '/listTools',
    ensureAuthenticated,
    dashboardController.listTools
)

export { dashboardRoutes }
