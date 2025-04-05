import {GroupRequestDTO} from "../dtos/GroupRequestDTO";
import {GroupResponseDTO} from "../dtos/GroupResponseDTO";
import GroupRepository from "../repositories/GroupRepository";
import {NotImplementedException} from "../exceptions/NotImplementedException";

export default class GroupService {
    private readonly groupRepository: GroupRepository;

    constructor() {
        this.groupRepository = new GroupRepository();
    }

    public async getGroup(groupId: number): Promise<GroupResponseDTO> {
        throw new NotImplementedException("getGroup method not implemented", 501);
    }

    public async getGroups(req: Request, res: Response): Promise<void> {
        throw new NotImplementedException("getGroups method not implemented", 501);
    }

    public async getGroupsByUser(userId: number): Promise<GroupResponseDTO[]> {
        const data: any = await this.groupRepository.getGroupsByUser(userId);
        return this.mapGroupsToGroupResponseDTOs(data);
    }

    public async createGroup(group: GroupRequestDTO): Promise<GroupResponseDTO> {
        throw new NotImplementedException("createGroup method not implemented", 501);
    }

    public async updateGroup(group: GroupRequestDTO): Promise<GroupResponseDTO> {
        throw new NotImplementedException("updateGroup method not implemented", 501);
    }

    public async deleteGroup(groupId: number): Promise<void> {
        throw new NotImplementedException("deleteGroup method not implemented", 501);
    }

    public async addUserToGroup(groupId: number, userId: number): Promise<void> {
        throw new NotImplementedException("addUserToGroup method not implemented", 501);
    }

    public async removeUserFromGroup(groupId: number, userId: number): Promise<void> {
        throw new NotImplementedException("removeUserFromGroup method not implemented", 501);
    }

    private async mapGroupToGroupResponseDTO(data: any): Promise<GroupResponseDTO> {
        return new GroupResponseDTO(
            data.id,
            data.name
        );
    }

    private async mapGroupsToGroupResponseDTOs(data: any[]): Promise<GroupResponseDTO[]> {
        return data.map((group: any) => {
            return new GroupResponseDTO(
                group.id,
                group.name
            );
        });
    }
}