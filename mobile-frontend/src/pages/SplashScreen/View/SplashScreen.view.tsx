import React, { FC } from 'react';
import "./SplashScreen.styles.scss";
import Preloader from "../../../components/Preloader";
import SplashImage from "../../../components/SplashImage";

interface ISplashScreenProps {

}

const SplashScreenView: FC<ISplashScreenProps> = ({...props}) => {
    return <div className={'SplashScreen'}>
        <div className={'PreloaderContainer'}>
            <Preloader />
        </div>
    </div>
};

export default SplashScreenView;
export type { ISplashScreenProps }