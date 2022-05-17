import React from 'react';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum pathesEnum {
  MAIN = '/main',
  USERS = '/',
}
