import {CustomException} from "./CustomException";

export class ConfigurationException extends CustomException {
    constructor(message: string, statusCode: number, error?: Error) {
        super(message, statusCode, error)
    }
}