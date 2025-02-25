import {BaseRepository} from "./BaseRepository";
import {UsersNotFoundException} from "../exceptions/UsersNotFoundException";


export default class UserRepository extends BaseRepository {
    public async getUsers() {
        try {
            const query = `SELECT * FROM users`;
            const result = await this.executeQuery(query);
            if (result.length <= 0) {
                throw new UsersNotFoundException("No users found in the database", 404);
            }
            return result;
        } catch (error) {
            throw new UsersNotFoundException("Users not found in the database", 404, error as Error);
        }
    }
}