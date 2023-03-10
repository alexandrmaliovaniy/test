import React from 'react';
import { CreateComponent } from '@carthus/core';
import DateInputView from './View/DateInput.view'

const DateInput = CreateComponent({
    View: DateInputView,
    providers: []
});

export default DateInput;