import { Router } from 'express';
import GroupController from '../controllers/GroupController';

const groupRoutes = Router();
const groupController = new GroupController();

groupRoutes.get('/groups', (req, res) => groupController.getGroups(req, res));
groupRoutes.get('/groups/:id', (req, res) => groupController.getGroup(req, res));
groupRoutes.get('/groups/user/:id', (req, res) => groupController.getGroupsByUser(req, res));
groupRoutes.post('/groups', (req, res) => groupController.createGroup(req, res));
groupRoutes.put('/groups/:id', (req, res) => groupController.updateGroup(req, res));
groupRoutes.delete('/groups/:id', (req, res) => groupController.deleteGroup(req, res));
groupRoutes.post('/groups/:groupId/users/:userId', (req, res) => groupController.addUserToGroup(req, res));
groupRoutes.delete('/groups/:groupId/users/:userId', (req, res) => groupController.removeUserFromGroup(req, res));

export default groupRoutes;