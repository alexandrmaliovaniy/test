import React from 'react';
import { CreateComponent } from '@carthus/core';
import SplashScreenView from './View/SplashScreen.view'

const SplashScreen = CreateComponent({
    View: SplashScreenView,
    providers: []
});

export default SplashScreen;