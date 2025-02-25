import UserRepository from "../repositories/UserRepository";

export default class UserService {

    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getUsers() {
        return await this.userRepository.getUsers();
    }
}