export default class LoginResponseDTO {
    public id: string;
    public username: string;
    public token: string;
    public admin: boolean;

    constructor(id: string, username: string, token: string, admin: boolean = false) {
        this.id = id;
        this.username = username;
        this.token = token;
        this.admin = admin;
    }
}