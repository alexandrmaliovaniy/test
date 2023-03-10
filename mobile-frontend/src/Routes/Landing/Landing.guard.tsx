import React, { FC } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../../App/Service/Auth";

interface ILandingGuardProps {

}

const LandingGuard: FC<ILandingGuardProps> = ({...props}) => {
    const {ready, isLogin} = useAuth();
    if (!ready && !isLogin) return <Navigate to={'/'} />
    return <Outlet />
};

export type { ILandingGuardProps };
export default LandingGuard;