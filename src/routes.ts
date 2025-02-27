import {Request, Response, Router} from 'express';
import UserController from './controllers/UserController';
import AuthController from "./controllers/AuthController";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Hello World'});
});

routes.get('/users', (req: Request, res: Response) => {
    const userController = new UserController();
    return userController.getUsers(req, res);
});

routes.post('/login', (req: Request, res: Response) => {
    const authController = new AuthController();
    return authController.login(req, res);
});

routes.post('/register', (req: Request, res: Response) => {
    const authController = new AuthController();
    return authController.register(req, res);
});

export default routes;