export * from './db.route';
import { DBRoute } from './db.route';
import { UserRoute } from './user.route';
export const ROUTES = [DBRoute, UserRoute];
