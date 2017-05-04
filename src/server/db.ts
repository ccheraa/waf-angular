export * from '../common/db';
import { Model, AuthModel } from '@ts-webapp/back';

import {
  UserModelScheme, UserModelDefinition,
  DemoModelScheme, DemoModelDefinition,
/// imports
} from '../common/db';
export const UserModel = new AuthModel<UserModelDefinition>('User', UserModelScheme);
export const DemoModel = new Model<DemoModelDefinition>('Demo', DemoModelScheme);
/// exports
