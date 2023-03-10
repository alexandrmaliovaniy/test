import React from 'react';
import { CreateComponent } from '@carthus/core';
import HeaderView from './View/Header.view'

const Header = CreateComponent({
    View: HeaderView,
    providers: []
});

export default Header;