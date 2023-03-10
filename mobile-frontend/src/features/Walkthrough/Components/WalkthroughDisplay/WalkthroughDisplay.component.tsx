import React from 'react';
import { CreateComponent } from '@carthus/core';
import WalkthroughDisplayView from './View/WalkthroughDisplay.view'

const WalkthroughDisplay = CreateComponent({
    View: WalkthroughDisplayView,
    providers: []
});

export default WalkthroughDisplay;