import React, { FC } from 'react';
import "./Preloader.styles.scss";

interface IPreloaderProps {

}

const PreloaderView: FC<IPreloaderProps> = ({...props}) => {
    return <div className={'Preloader'}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>;
};

export default PreloaderView;
export type { IPreloaderProps }