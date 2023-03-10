import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UsernameInput from './..'

test('Initial testing component: UsernameInput', async () => {
    render(<UsernameInput />)

})