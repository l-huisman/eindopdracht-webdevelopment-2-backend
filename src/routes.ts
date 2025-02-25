import {Request, Response, Router} from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Hello World'});
});

routes.get('/users', (req: Request, res: Response) => {
    const userController = new UserController();
    return userController.getUsers(req, res);
});

export default routes;