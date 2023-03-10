import React from 'react';
import { CreateComponent } from '@carthus/core';
import PhoneInputView from './View/PhoneInput.view'

const PhoneInput = CreateComponent({
    View: PhoneInputView,
    providers: []
});

export default PhoneInput;