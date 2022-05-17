import React, { useState } from 'react';
import { AppRouter } from './components/AppRouter';
import { AppContext } from './context';

export const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const changeSetIsAuth = (val: boolean) => {
    setIsAuth(val);
  };

  return (
    <AppContext.Provider value={{ isAuth, changeSetIsAuth }}>
      <div className="app">
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
};
