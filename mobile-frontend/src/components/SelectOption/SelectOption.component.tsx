import React from 'react';
import { CreateComponent } from '@carthus/core';
import SelectOptionView from './View/SelectOption.view'

const SelectOption = CreateComponent({
    View: SelectOptionView,
    providers: []
});

export default SelectOption;