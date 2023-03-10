import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IAuthGuardProps {

}

const AuthGuard: FC<IAuthGuardProps> = ({...props}) => {
    return <Outlet />
};

export type { IAuthGuardProps };
export default AuthGuard;