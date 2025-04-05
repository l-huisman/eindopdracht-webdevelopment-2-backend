import {CustomException} from "./CustomException";

export class EventsNotFoundException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}