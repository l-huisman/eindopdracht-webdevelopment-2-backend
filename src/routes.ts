import {Router} from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import groupRoutes from './routes/groupRoutes';

const routes = Router();

routes.use('/v1/', (req, res) => res.json({message: 'Hello World'}));
routes.use('/v1', userRoutes);
routes.use('/v1', authRoutes);
routes.use('/v1', groupRoutes);

export default routes;