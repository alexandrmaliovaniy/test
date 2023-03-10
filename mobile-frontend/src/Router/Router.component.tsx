import React from 'react';
import { CreateComponent } from '@carthus/core';
import RouterView from './View/Router.view'
import {BrowserRouter, Routes} from "react-router-dom";

const Router = CreateComponent({
    View: RouterView,
    providers: []
});

export default Router;