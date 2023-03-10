import React from 'react';
import { CreateComponent } from '@carthus/core';
import SecondaryButtonView from './View/SecondaryButton.view'

const SecondaryButton = CreateComponent({
    View: SecondaryButtonView,
    providers: []
});

export default SecondaryButton;