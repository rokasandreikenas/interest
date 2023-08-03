import { AuthLayoutRoutes, MainLayoutRoutes } from "./routeTypes";

import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout";

export const LOGIN_PATH = "/";
export const HOME_PATH = "/";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [{ path: HOME_PATH, Component: Home }],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [{ path: LOGIN_PATH, Component: Login }],
};
