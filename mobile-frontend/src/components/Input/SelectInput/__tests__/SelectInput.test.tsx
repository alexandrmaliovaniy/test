import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SelectInput from './..'

test('Initial testing component: SelectInput', async () => {
    render(<SelectInput />)

})