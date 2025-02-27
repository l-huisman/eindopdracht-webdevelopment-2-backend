import {CustomException} from "./CustomException";

export class UserDTOException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}