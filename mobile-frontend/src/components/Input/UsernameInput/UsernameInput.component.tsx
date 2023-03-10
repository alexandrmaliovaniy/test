import React from 'react';
import { CreateComponent } from '@carthus/core';
import UsernameInputView from './View/UsernameInput.view'

const UsernameInput = CreateComponent({
    View: UsernameInputView,
    providers: []
});

export default UsernameInput;