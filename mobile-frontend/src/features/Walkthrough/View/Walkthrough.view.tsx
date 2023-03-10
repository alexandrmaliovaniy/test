import React, { FC } from 'react';
import "./Walkthrough.styles.scss";
import WalkthroughDisplay from "../Components/WalkthroughDisplay";
import WalkthroughControl from "../Components/WalkthroughControl";
import WalkthroughText from "../Components/WalkthroughText";

interface IWalkthroughProps {

}

const WalkthroughView: FC<IWalkthroughProps> = ({...props}) => {
    return <div className={'Walktrhough'}>
        <WalkthroughDisplay />
        <WalkthroughText />
        <WalkthroughControl />
    </div>;
};

export default WalkthroughView;
export type { IWalkthroughProps }