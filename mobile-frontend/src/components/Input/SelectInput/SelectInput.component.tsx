import React from 'react';
import { CreateComponent } from '@carthus/core';
import SelectInputView from './View/SelectInput.view'

const SelectInput = CreateComponent({
    View: SelectInputView,
    providers: []
});

export default SelectInput;