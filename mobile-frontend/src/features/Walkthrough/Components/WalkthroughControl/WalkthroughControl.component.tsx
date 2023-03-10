import React from 'react';
import { CreateComponent } from '@carthus/core';
import WalkthroughControlView from './View/WalkthroughControl.view'

const WalkthroughControl = CreateComponent({
    View: WalkthroughControlView,
    providers: []
});

export default WalkthroughControl;