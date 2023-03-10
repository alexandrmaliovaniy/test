import React, { FC } from 'react';
import "./SplashImage.styles.scss";

interface ISplashImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const SplashImageView: FC<ISplashImageProps> = ({className, ...props}) => {
    return <div className={`SplashImage ${className}`}>
        <img {...props}/>
        <div className={'SplashFade'} />
    </div>;
};

export default SplashImageView;
export type { ISplashImageProps }