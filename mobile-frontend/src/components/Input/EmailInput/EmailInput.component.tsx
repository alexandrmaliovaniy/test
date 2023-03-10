import React from 'react';
import { CreateComponent } from '@carthus/core';
import EmailInputView from './View/EmailInput.view'

const EmailInput = CreateComponent({
    View: EmailInputView,
    providers: []
});

export default EmailInput;