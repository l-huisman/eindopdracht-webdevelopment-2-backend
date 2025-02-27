import jwt, {JwtPayload, Secret} from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express';
import APIResponseDTO from "../dtos/APIResponseDTO";

export const SECRET_KEY: Secret = process.env.JWT_SECRET_KEY || 'default_secret_key';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        (req as CustomRequest).token = jwt.verify(token, SECRET_KEY);

        next();
    } catch (err) {
        const response = new APIResponseDTO<any>("Please authenticate!", undefined, err);
        res.status(401).json(response);
    }
};