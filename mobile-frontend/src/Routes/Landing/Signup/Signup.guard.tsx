import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface ISignupGuardProps {

}

const SignupGuard: FC<ISignupGuardProps> = ({...props}) => {
    return <Outlet />
};

export type { ISignupGuardProps };
export default SignupGuard;