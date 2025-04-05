import {BaseRepository} from "./BaseRepository";
import {NotImplementedException} from "../exceptions/NotImplementedException";


export default class GroupRepository extends BaseRepository {
    public async getGroup(req: Request, res: Response): Promise<any[]> {
        throw new NotImplementedException("getUsers method not implemented", 501);
    }
    
    public async getGroups(req: Request, res: Response): Promise<any[]> {
        throw new NotImplementedException("getUsers method not implemented", 501);
    }
    
    public async getGroupsByUser(userId: number): Promise<any[]> {
        try {
            const query = `SELECT g.id, g.name FROM 'groups' g JOIN user_groups ug ON g.id = ug.group_id WHERE ug.user_id = ?`;
            const params = [userId];
            const result = await this.executeQuery<any[]>(query, params);
            if (result.length === 0) {
                throw new NotImplementedException(`Groups with user id ${userId} not found in the database`, 404);
            }
            return result;
        } catch (error) {
            throw new NotImplementedException(`Groups with user id ${userId} not found`, 404, error as Error);
        }
    }
    
    public async createGroup(): Promise<any> {
        throw new NotImplementedException("createGroup method not implemented", 501);
    }
    
    public async updateGroup(): Promise<any> {
        throw new NotImplementedException("updateGroup method not implemented", 501);
    }
    
    public async deleteGroup(groupId: number): Promise<void> {
        throw new NotImplementedException("deleteGroup method not implemented", 501);
    }
}