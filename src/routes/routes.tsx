import { ADMINS_ROUTE, LOGIN_ROUTE, USERS_ROUTE } from './routesConstants'
import { Login } from '../pages/login/login'
import { Admins } from '../pages/admins/admins'
import { Users } from '../pages/users/users'


export const publicRoute = [
  {
    path: LOGIN_ROUTE,
    component: <Login/>,
    permission: [],
  },
]

export const authRoutes = [
  {
    path: ADMINS_ROUTE,
    component: <Admins/>,
    permission: [],
  },
  {
    path: USERS_ROUTE,
    component: <Users/>,
    permission: [],
  },
]
