import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface ISigninGuardProps {

}

const SigninGuard: FC<ISigninGuardProps> = ({...props}) => {
    return <Outlet />
};

export type { ISigninGuardProps };
export default SigninGuard;