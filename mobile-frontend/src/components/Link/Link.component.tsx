import React from 'react';
import { CreateComponent } from '@carthus/core';
import LinkView from './View/Link.view'

const Link = CreateComponent({
    View: LinkView,
    providers: []
});

export default Link;