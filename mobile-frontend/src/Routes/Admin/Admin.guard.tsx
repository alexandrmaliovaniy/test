import React, { FC } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../../App/Service/Auth";

interface IAdminGuardProps {

}

const AdminGuard: FC<IAdminGuardProps> = ({...props}) => {
    const {ready, isAdmin} = useAuth();
    if (!ready || !isAdmin) return <Navigate to={'/'} />
    return <Outlet />
};

export type { IAdminGuardProps };
export default AdminGuard;