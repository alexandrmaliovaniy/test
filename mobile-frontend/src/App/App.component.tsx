import React from 'react';
import { CreateComponent } from '@carthus/core';
import AppView from './View/App.view'
import { AuthProvider } from './Service/Auth';

const App = CreateComponent({
    View: AppView,
    providers: [AuthProvider]
});

export default App;