import { Route, Routes, Navigate } from 'react-router-dom';

import { authPath } from './paths';
import PageNotFound from '../shared/PageNotFound';
import SignIn from '../features/SignIn';

const MainRoutes = () => {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <Routes>
      <Route
        path="/"
        element={
          accessToken ? (
            <Navigate to={authPath.signIn.path} replace />
          ) : (
            <Navigate to={authPath.signIn.path} replace />
          )
        }
      />

      <Route path={authPath.signIn.path} element={<SignIn />} />

      {/* USER SIGN IN */}

      <Route path={'/404'} element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};

export default MainRoutes;
