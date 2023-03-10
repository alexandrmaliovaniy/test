import React from 'react';
import { CreateRoute } from '@carthus/core';
import AuthGuard from './Auth.guard';
import Auth from "../../../pages/Auth";

const AuthRoute = CreateRoute({
    path: "auth",
    Guard: AuthGuard,
    Component: Auth,
    routes: []
})

export default AuthRoute;