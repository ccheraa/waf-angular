import { UserModel } from '../db';
import { UserController } from '@ts-webapp/back';
export const UserRoute = UserController(UserModel);
