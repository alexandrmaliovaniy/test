import React from 'react';
import { CreateComponent } from '@carthus/core';
import SigninView from './View/Signin.view'

const Signin = CreateComponent({
    View: SigninView,
    providers: []
});

export default Signin;