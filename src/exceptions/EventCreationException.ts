import {CustomException} from "./CustomException";

export class EventCreationException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}