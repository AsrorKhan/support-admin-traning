import { ADMINS_ROUTE, CONFIGURATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NOT_FOUND, SETTINGS_ROUTE, USERS_ROUTE } from '../utils/constants/routeConstants';
import { Login } from '../pages/login/login';
import { Admins } from '../pages/admins/admins';
import { Users } from '../pages/users/users';
import { NotFoundPage } from '../pages/notFound/notFound';
import { Configuration } from '../pages/configuration/configuration';
import { Settings } from '../pages/settings/settings';
import Main from '../pages/main/main';


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: <Login />,
    permission: []
  }
];

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    component: <Main />,
    permission: []
  },
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
    path: CONFIGURATION_ROUTE,
    component: <Configuration />,
    permission: []
  },
  {
    path: SETTINGS_ROUTE,
    component: <Settings />,
    permission: []
  },
  {
    path: NOT_FOUND,
    component: <NotFoundPage />,
    permission: []
  }
];
