import React, { FC } from 'react';
import "./Link.styles.scss";
import {Link} from "react-router-dom";

interface ILinkProps {
    to: string;
    children: string;
}

const LinkView: FC<ILinkProps> = ({to, children, ...props}) => {
    return <Link className={'Link'} to={to}>{children}</Link>;
};

export default LinkView;
export type { ILinkProps }