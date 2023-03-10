import React from 'react';
import { CreateComponent } from '@carthus/core';
import ButtonView from './View/Button.view'

const Button = CreateComponent({
    View: ButtonView,
    providers: []
});

export default Button;