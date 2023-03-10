import React from 'react';
import { CreateComponent } from '@carthus/core';
import CheckboxView from './View/Checkbox.view'

const Checkbox = CreateComponent({
    View: CheckboxView,
    providers: []
});

export default Checkbox;