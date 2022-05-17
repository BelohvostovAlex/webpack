import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';
import { pathesEnum } from '../../router/interfaces';

export const AppRouter: React.FC = () => {
  const { isAuth } = useContext(AppContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="/*" element={<Navigate to={pathesEnum.USERS} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="/*" element={<Navigate to={pathesEnum.LOGIN} replace />} />
    </Routes>
  );
};
