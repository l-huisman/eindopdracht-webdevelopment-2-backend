import {CustomException} from "./CustomException";

export class GroupNotFoundException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}