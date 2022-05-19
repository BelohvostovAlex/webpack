import { Login } from '../pages/Login';
import { UsersPageContainer } from '../pages/UsersPage';
import { IRoute, pathesEnum } from './interfaces';

export const publicRoutes: IRoute[] = [
  { path: pathesEnum.LOGIN, element: Login },
  { path: pathesEnum.USERS, element: UsersPageContainer },
];
