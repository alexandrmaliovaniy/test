import React, { FC } from 'react';
import "./Auth.styles.scss";
import OutilneButton from "../../../components/Button/OutilneButton";
import PageBreak from "../../../components/PageBreak";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import Link from "../../../components/Link";

interface IAuthProps {

}

const AuthView: FC<IAuthProps> = ({...props}) => {
    return <div className={'Auth'}>
        <div className={'AuthContent'}>
            <h2>Let's you in</h2>
            <div className={'MediaAuth'}>
                <OutilneButton wide>Continue with Google</OutilneButton>
                <OutilneButton wide>Continue with Facebook</OutilneButton>
                <OutilneButton wide>Continue with Apple</OutilneButton>
            </div>
            <PageBreak>or</PageBreak>
            <PrimaryButton wide>Sign in with password</PrimaryButton>
            <p>Don't hand an account? <Link to={'/landing/signup'}>Sing up</Link></p>
        </div>
    </div>;
};

export default AuthView;
export type { IAuthProps }