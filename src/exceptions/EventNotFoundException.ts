import {CustomException} from "./CustomException";

export class EventNotFoundException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}