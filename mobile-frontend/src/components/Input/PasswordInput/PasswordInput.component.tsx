import React from 'react';
import { CreateComponent } from '@carthus/core';
import PasswordInputView from './View/PasswordInput.view'

const PasswordInput = CreateComponent({
    View: PasswordInputView,
    providers: []
});

export default PasswordInput;