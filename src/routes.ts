import {Router} from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import groupRoutes from './routes/groupRoutes';

const routes = Router();

routes.use('/api', (req, res) => res.json({message: 'API is working'}));
routes.use(userRoutes);
routes.use(authRoutes);
routes.use(groupRoutes);

export default routes;