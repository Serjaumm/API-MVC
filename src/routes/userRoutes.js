import {Router} from 'express';
import { getUser } from '../controllers/userController';

const userRoutes = Router();

userRoutes.get("/", getUser);

export default userRoutes;