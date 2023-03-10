import React from 'react';
import { CreateComponent } from '@carthus/core';
import ForgotPasswordView from './View/ForgotPassword.view'

const ForgotPassword = CreateComponent({
    View: ForgotPasswordView,
    providers: []
});

export default ForgotPassword;