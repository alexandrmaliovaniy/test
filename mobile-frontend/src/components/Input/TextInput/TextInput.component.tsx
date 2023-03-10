import React from 'react';
import { CreateComponent } from '@carthus/core';
import TextInputView from './View/TextInput.view'

const TextInput = CreateComponent({
    View: TextInputView,
    providers: []
});

export default TextInput;