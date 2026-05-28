"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const DashboardService_1 = require("../../services/dashboard/DashboardService");
class DashboardController {
    dashboardService;
    constructor() {
        this.dashboardService = new DashboardService_1.DashboardService();
    }
    countUsers = async (req, res) => {
        const countUsers = await this.dashboardService.countUsers();
        return res.status(200).json({ count: countUsers });
    };
    listTools = async (req, res) => {
        const tools = await this.dashboardService.listTools();
        return res.status(200).json(tools);
    };
}
exports.DashboardController = DashboardController;
