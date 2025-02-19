export class CustomException extends Error {
    statusCode: number;
    error?: Error;

    constructor(message: string, statusCode: number, error?: Error) {
        super(message);
        this.name = 'CustomException';
        this.statusCode = statusCode
        this.error = error;
    }
}