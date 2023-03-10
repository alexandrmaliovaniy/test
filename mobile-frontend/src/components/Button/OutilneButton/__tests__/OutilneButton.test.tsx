import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OutilneButton from './..'

test('Initial testing component: OutilneButton', async () => {
    render(<OutilneButton />)

})