import { AuthLayoutRoutes, MainLayoutRoutes } from "./routeTypes";

import AuthLayout from "../layouts/AuthLayout";
import Examples from "../pages/Examples/Examples";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout";
import Pin from "../pages/Pin/Pin";

export const LOGIN_PATH = "/";

export const HOME_PATH = "/";
export const PIN_PATH = "/:id";
export const EXAMPLES_PATH = "/examples";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: PIN_PATH, Component: Pin },
    { path: EXAMPLES_PATH, Component: Examples },
  ],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [{ path: LOGIN_PATH, Component: Login }],
};
