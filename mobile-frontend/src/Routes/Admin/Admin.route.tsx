import React from 'react';
import { CreateRoute } from '@carthus/core';
import AdminGuard from './Admin.guard';

const AdminRoute = CreateRoute({
    path: "admin",
    Guard: AdminGuard,
    Component: null,
    routes: []
})

export default AdminRoute;