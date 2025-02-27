import {CustomException} from "./CustomException";

export class UserCreationException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}