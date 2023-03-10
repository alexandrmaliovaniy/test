import React from 'react';
import { CreateComponent } from '@carthus/core';
import AuthView from './View/Auth.view'

const Auth = CreateComponent({
    View: AuthView,
    providers: []
});

export default Auth;