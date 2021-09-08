import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';

const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('../pages/Login'))
const Todos = lazy(() => import('../pages/Todos'))

const routes = [
  {
    name: "home",
    path: ['/','/home', '/index'],
    component: Home,
    exact: true,
    isProtected: false,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    exact: true,
    isProtected: false,
  },
  {
    name: "login",
    path: '/login',
    component: Login,
    exact: true,
    isProtected: false,
  },
  {
    name: "todos",
    path: "/todos",
    component: Todos,
    exact: true,
    isProtected: false,
  },
  {
    name: "pagenotfound",
    path: "*",
    component: PageNotFound,
    exact: false,
    isProtected: false,
  },
];

const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
    {routes.map(({ name, path, component: Component, exact }, i) => (
      <Route key={name} path={path} exact={exact} component={Component} />
    ))}
  </Switch>
  </Suspense>
);

export default Routes;
