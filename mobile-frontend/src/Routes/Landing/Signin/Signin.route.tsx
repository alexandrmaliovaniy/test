import React from 'react';
import { CreateRoute } from '@carthus/core';
import SigninGuard from './Signin.guard';

const SigninRoute = CreateRoute({
    path: "signin",
    Guard: SigninGuard,
    Component: null,
    routes: []
})

export default SigninRoute;