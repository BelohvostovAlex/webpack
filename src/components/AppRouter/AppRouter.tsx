import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../../router';
import { pathesEnum } from '../../router/interfaces';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to={pathesEnum.LOGIN} />} />
    </Routes>
  );
};
