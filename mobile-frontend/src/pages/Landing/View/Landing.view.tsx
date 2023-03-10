import React, { FC } from 'react';
import "./Landing.styles.scss";
import Walkthrough from "../../../features/Walkthrough";

interface ILandingProps {

}

const LandingView: FC<ILandingProps> = ({...props}) => {
    return (
        <div className={'Landing'}>
            <Walkthrough />
        </div>
    );
};

export default LandingView;
export type { ILandingProps }