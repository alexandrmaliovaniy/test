import React, { FC } from 'react';
import "./PageBreak.styles.scss";

interface IPageBreakProps {
    children?: string
}

const PageBreakView: FC<IPageBreakProps> = ({children, ...props}) => {
    return <div className={'PageBreak'}>
        <div className={'LeftBar'} />
        {children && <div className={'Content'}>{children}</div>}
        <div className={'RightBar'} />
    </div>;
};

export default PageBreakView;
export type { IPageBreakProps }