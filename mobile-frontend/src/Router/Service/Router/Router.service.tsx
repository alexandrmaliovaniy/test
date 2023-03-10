import React from 'react';
import {useRoutes} from "react-router-dom";
import MainRoute from "../../../Routes/Main.route";

const RouterService = () => {
    return useRoutes(MainRoute);
};

export default RouterService;