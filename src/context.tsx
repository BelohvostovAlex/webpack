import React from 'react';

interface IAppContext {
  isAuth: boolean;
  changeSetIsAuth: (val: boolean) => void;
}

export const AppContext = React.createContext({} as IAppContext);
