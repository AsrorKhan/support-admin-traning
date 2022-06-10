import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { authRoutes, publicRoutes } from './routes';
import { LOGIN_ROUTE } from '../utils/constants/routeConstants';
import Main from '../pages/main/main';


function AppRoutes() {
  const { users } = useAppSelector(state => state.user);
  console.log(users.isAuth);
  return (
    <Routes>
      <Route  path='/' element={<Main/>}/>
      {users.isAuth && authRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      {!users.isAuth && publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      {!users.isAuth && publicRoutes.map((route) => (
        <Route path='*' key={route.path} element={<Navigate to={`/${LOGIN_ROUTE}`} />} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
