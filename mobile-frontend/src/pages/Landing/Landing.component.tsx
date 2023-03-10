import React from 'react';
import { CreateComponent } from '@carthus/core';
import LandingView from './View/Landing.view'

const Landing = CreateComponent({
    View: LandingView,
    providers: []
});

export default Landing;