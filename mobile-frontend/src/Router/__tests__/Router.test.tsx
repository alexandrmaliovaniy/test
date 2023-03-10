import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Router from './..'

test('Initial testing component: Router', async () => {
    render(<Router />)

})