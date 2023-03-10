import React, { FC } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../../App/Service/Auth";

interface IAppGuardProps {

}

const AppGuard: FC<IAppGuardProps> = ({...props}) => {
    const {isLogin, ready} = useAuth();
    if (!ready || !isLogin) return <Navigate to={'/'} />
    return <Outlet />
};

export type { IAppGuardProps };
export default AppGuard;