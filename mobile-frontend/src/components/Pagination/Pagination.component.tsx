import React from 'react';
import { CreateComponent } from '@carthus/core';
import PaginationView from './View/Pagination.view'

const Pagination = CreateComponent({
    View: PaginationView,
    providers: []
});

export default Pagination;