import React, { FC } from 'react';
import "./WalkthroughDisplay.styles.scss";
import SplashImage from "../../../../../components/SplashImage";
import {useWalkthrough} from "../../../Service/Walkthrough";
import {useHeader} from "../../../../Header";

interface IWalkthroughDisplayProps {

}

const WalkthroughDisplayView: FC<IWalkthroughDisplayProps> = ({...props}) => {
    const wt = useWalkthrough();
    useHeader();
    return <SplashImage className={"WalkthroughDisplay"} src={wt.data.image} />
};

export default WalkthroughDisplayView;
export type { IWalkthroughDisplayProps }