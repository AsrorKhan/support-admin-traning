import { ADMINS_ROUTE, LOGIN_ROUTE, NOT_FOUND, USERS_ROUTE } from '../utils/constants/routeConstants';
import { Login } from '../pages/login/login';
import { Admins } from '../pages/admins/admins';
import { Users } from '../pages/users/users';
import NotFoundPage from '../pages/notFound/notFound';


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: <Login />,
    permission: []
  }
];

export const authRoutes = [
  {
    path: ADMINS_ROUTE,
    component: <Admins />,
    permission: []
  },
  {
    path: USERS_ROUTE,
    component: <Users />,
    permission: []
  },
  {
    path: NOT_FOUND,
    component: <NotFoundPage />,
    permission: []
  }
];
