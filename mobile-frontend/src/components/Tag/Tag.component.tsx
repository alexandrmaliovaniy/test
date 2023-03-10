import React from 'react';
import { CreateComponent } from '@carthus/core';
import TagView from './View/Tag.view'

const Tag = CreateComponent({
    View: TagView,
    providers: []
});

export default Tag;