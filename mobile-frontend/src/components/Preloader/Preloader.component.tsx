import React from 'react';
import { CreateComponent } from '@carthus/core';
import PreloaderView from './View/Preloader.view'

const Preloader = CreateComponent({
    View: PreloaderView,
    providers: []
});

export default Preloader;