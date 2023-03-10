import React, { FC } from 'react';
import "./App.styles.scss";
import Router from "../../Router";

interface IAppProps {

}


const AppView: FC<IAppProps> = ({...props}) => {
    return <Router />
};

export default AppView;
export type { IAppProps }