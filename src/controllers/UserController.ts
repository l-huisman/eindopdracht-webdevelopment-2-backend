import {Request, Response} from "express";
import BaseController from "./BaseController";
import UserService from "../services/UserService";
import UserResponseDTO from "../dtos/UserResponseDTO";
import APIResponseDTO from "../dtos/APIResponseDTO";
import {UsersNotFoundException} from "../exceptions/UsersNotFoundException";
import {NotImplementedException} from "../exceptions/NotImplementedException";


export default class UserController extends BaseController {
    public async getUser(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("getUser method not implemented", 501);
    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        const userService = new UserService();
        let users: any[];
        try {
            users = await userService.getUsers();
            const response = new APIResponseDTO<UserResponseDTO[]>("Success", users, undefined);
            res.status(200).json(response);
        } catch (error) {
            let message: string = "Something went wrong, please try again later or contact administrator.";
            let statusCode: number = 500;
            if (error instanceof UsersNotFoundException) {
                message = error.message;
                statusCode = error.statusCode;
            }
            const response = new APIResponseDTO<any>(message, undefined, error);
            res.status(statusCode).json(response);
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("createUser method not implemented", 501);
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("updateUser method not implemented", 501);
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("deleteUser method not implemented", 501);
    }
}