import {Request, Response} from "express";
import BaseController from "./BaseController";
import APIResponseDTO from "../dtos/APIResponseDTO";
import GroupService from "../services/GroupService";
import {GroupResponseDTO} from "../dtos/GroupResponseDTO";
import {GroupNotFoundException} from "../exceptions/GroupNotFoundException";
import {NotImplementedException} from "../exceptions/NotImplementedException";

export default class GroupController extends BaseController {
    private readonly groupService: GroupService;

    constructor() {
        super();
        this.groupService = new GroupService();
    }

    public async getGroup(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("getGroup method not implemented", 501);
    }

    public async getGroups(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("getGroups method not implemented", 501);
    }

    public async getGroupsByUser(req: Request, res: Response): Promise<void> {
        try {
            const userId: number = parseInt(req.params.userId);
            const groups: GroupResponseDTO[] = await this.groupService.getGroupsByUser(userId);
            const apiResponse = new APIResponseDTO<GroupResponseDTO[]>("Success", groups, undefined);
            res.status(200).json(apiResponse);
        } catch (error) {
            const [statusCode, apiResponse] = this.errorHandler(error, GroupNotFoundException);
            res.status(statusCode).json(apiResponse);
        }
    }

    public async createGroup(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("createGroup method not implemented", 501);
    }

    public async updateGroup(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("updateGroup method not implemented", 501);
    }

    public async deleteGroup(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("deleteGroup method not implemented", 501);
    }

    public async addUserToGroup(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("addUserToGroup method not implemented", 501);
    }

    public async removeUserFromGroup(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("removeUserFromGroup method not implemented", 501);
    }
}

