import React from 'react';
import { CreateComponent } from '@carthus/core';
import SignupView from './View/Signup.view'

const Signup = CreateComponent({
    View: SignupView,
    providers: []
});

export default Signup;