import React from 'react';
import { CreateRouter } from '@carthus/core';
import LandingRoute from './Landing/Landing.route';
import AppRoute from './App/App.route';
import AdminRoute from './Admin/Admin.route';
import MainGuard from './Main.guard';
import SplashScreen from "../pages/SplashScreen";

const MainRouter = CreateRouter({
    path: "/",
    Guard: MainGuard,
    Component: SplashScreen,
    routes: [LandingRoute, AppRoute, AdminRoute]
})

export default MainRouter;