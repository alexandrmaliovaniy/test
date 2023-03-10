import React, { FC } from 'react';
import "./WalkthroughText.styles.scss";
import {useWalkthrough} from "../../../Service/Walkthrough";
import Pagination from "../../../../../components/Pagination";

interface IWalkthroughTextProps {

}

const WalkthroughTextView: FC<IWalkthroughTextProps> = ({...props}) => {
    const wt = useWalkthrough();
    return <div className={'WalkthroughText'}>
        <h2>{wt.data.title}</h2>
        <p>{wt.data.content}</p>
        <Pagination value={wt.page} length={wt.length} />
    </div>;
};

export default WalkthroughTextView;
export type { IWalkthroughTextProps }