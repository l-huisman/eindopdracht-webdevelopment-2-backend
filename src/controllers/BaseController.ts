import APIResponseDTO from "../dtos/APIResponseDTO";

export default class BaseController {
    public errorHandler(error: any, errorType: any, message: string = "Something went wrong, please try again later or contact administrator."): [number, APIResponseDTO<any>] {
        let statusCode: number = 500;
        if (error instanceof errorType) {
            message = error.message;
            statusCode = error.statusCode;
        }
        const apiResponse = new APIResponseDTO<any>(message, undefined, error);
        return [statusCode, apiResponse];
    }
}