import React, { FC } from 'react';
import "./Router.styles.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainRouter from "../../Routes/Main.router";

interface IRouterProps {

}

const RouterView: FC<IRouterProps> = ({...props}) => {
    return <RouterProvider router={createBrowserRouter(MainRouter)} />
};

export default RouterView;
export type { IRouterProps }