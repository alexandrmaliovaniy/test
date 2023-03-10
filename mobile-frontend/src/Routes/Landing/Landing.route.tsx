import React from 'react';
import { CreateRoute } from '@carthus/core';
import AuthRoute from './Auth/Auth.route';
import SigninRoute from './Signin/Signin.route';
import SignupRoute from './Signup/Signup.route';
import LandingGuard from './Landing.guard';
import Landing from "../../pages/Landing";

const LandingRoute = CreateRoute({
    path: "landing",
    Guard: LandingGuard,
    Component: Landing,
    routes: [AuthRoute, SigninRoute, SignupRoute]
})

export default LandingRoute;