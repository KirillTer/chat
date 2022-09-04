import React from "react";
import Messages from "../pages/messages/Messages";
import Users from "../pages/users/Users";
import UserDetails from "../pages/users/UserDetails";
import Settings from "../pages/settings/Settings";
import Login from "../pages/auth/Login";

export interface IRoute {
  path: string;
  page: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MESSAGES = '/Messages',
  USERS = '/users',
  USERDETAILS = '/users/:id',
  SETTINGS = '/settings',
  LOGIN = '/auth/login',
  ANYPATH = '*'
}

export const routes: IRoute[] = [
  {path: RouteNames.MESSAGES, page: Messages},
  {path: RouteNames.USERS, page: Users},
  {path: RouteNames.USERDETAILS, page: UserDetails},
  {path: RouteNames.SETTINGS, page: Settings},
  {path: RouteNames.LOGIN, page: Login},
  {path: RouteNames.ANYPATH, page: Users},
]