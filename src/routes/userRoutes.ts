import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/users', (req, res) => userController.getUsers(req, res));

export default userRoutes;