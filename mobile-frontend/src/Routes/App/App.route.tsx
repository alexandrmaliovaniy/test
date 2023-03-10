import React from 'react';
import { CreateRoute } from '@carthus/core';
import AppGuard from './App.guard';

const AppRoute = CreateRoute({
    path: "app",
    Guard: AppGuard,
    Component: null,
    routes: []
})

export default AppRoute;