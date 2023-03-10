import React, { FC } from 'react';
import "./WalkthroughControl.styles.scss";
import SecondaryButton from "../../../../../components/Button/SecondaryButton";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import {useWalkthrough} from "../../../Service/Walkthrough";

interface IWalkthroughControlProps {

}

const WalkthroughControlView: FC<IWalkthroughControlProps> = ({...props}) => {
    const wt = useWalkthrough();
    return <div className={'WalkthroughControl'}>
        <SecondaryButton onClick={wt.skip}>Skip</SecondaryButton>
        <PrimaryButton onClick={wt.nextPage}>Next</PrimaryButton>
    </div>;
};

export default WalkthroughControlView;
export type { IWalkthroughControlProps }