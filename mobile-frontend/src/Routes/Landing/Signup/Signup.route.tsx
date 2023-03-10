import React from 'react';
import { CreateRoute } from '@carthus/core';
import SignupGuard from './Signup.guard';

const SignupRoute = CreateRoute({
    path: "signup",
    Guard: SignupGuard,
    Component: null,
    routes: []
})

export default SignupRoute;