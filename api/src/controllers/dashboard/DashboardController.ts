import { Request, Response } from 'express'
import { DashboardService } from '../../services/dashboard/DashboardService'

export class DashboardController {
    private dashboardService: DashboardService

    constructor() {
        this.dashboardService = new DashboardService()
    }

    countUsers = async (req: Request, res: Response) => {
        const countUsers = await this.dashboardService.countUsers()
        return res.status(200).json({ count: countUsers })
    }

    listTools = async (req: Request, res: Response) => {
        const tools = await this.dashboardService.listTools()
        return res.status(200).json(tools)
    }
}
