import React from 'react';
import { CreateComponent } from '@carthus/core';
import PrimaryButtonView from './View/PrimaryButton.view'

const PrimaryButton = CreateComponent({
    View: PrimaryButtonView,
    providers: []
});

export default PrimaryButton;