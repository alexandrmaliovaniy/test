import React from 'react';
import { CreateComponent } from '@carthus/core';
import InputView from './View/Input.view'

const Input = CreateComponent({
    View: InputView,
    providers: []
});

export default Input;