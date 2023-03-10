import React, { FC } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../App/Service/Auth";

interface IMainGuardProps {

}

const MainGuard: FC<IMainGuardProps> = ({...props}) => {
    const {ready, isLogin} = useAuth();
    if (!ready) return <Outlet />
    if (isLogin) return <Navigate to={'/app'} />
    return <Navigate to={'/landing'} />
};

export type { IMainGuardProps };
export default MainGuard;