import { Main } from '../pages/Main';
import { UsersPageContainer } from '../pages/UsersPage';
import { IRoute, pathesEnum } from './interfaces';

export const publicRoutes: IRoute[] = [
  { path: pathesEnum.MAIN, element: Main },
];
export const privateRoutes: IRoute[] = [
  { path: pathesEnum.USERS, element: UsersPageContainer },
];
