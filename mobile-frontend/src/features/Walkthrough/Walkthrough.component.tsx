import React from 'react';
import { CreateComponent } from '@carthus/core';
import { WalkthroughProvider } from './Service/Walkthrough';
import WalkthroughView from './View/Walkthrough.view'

const Walkthrough = CreateComponent({
    View: WalkthroughView,
    providers: [WalkthroughProvider]
});

export default Walkthrough;