"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../../services/user/UserService");
class UserController {
    userService;
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    deleteUser = async (req, res) => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res
                    .status(401)
                    .json({ message: 'Usuário não autenticado' });
            }
            await this.userService.deleteUser(userId);
            return res
                .status(200)
                .json({ message: 'Usuário deletado com sucesso' });
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    };
}
exports.UserController = UserController;
