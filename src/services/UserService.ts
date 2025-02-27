import UserRepository from "../repositories/UserRepository";
import { UserDTOException } from "../exceptions/UserDTOException";
import { UserCreationException } from "../exceptions/UserCreationException";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import IUser from "../interfaces/IUser";
import UserResponseDTO from "../dtos/UserResponseDTO";

export default class UserService {
    public userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAll(): Promise<UserResponseDTO[]> {
        return await this.userRepository.getUsers();
    }

    private mapToUserResponse(user: IUser): UserResponseDTO {
        return new UserResponseDTO(user.id, user.email, user.username);
    }

    private mapToUserResponseArray(users: IUser[]): UserResponseDTO[] {
        return users.map((user) => this.mapToUserResponse(user));
    }
}