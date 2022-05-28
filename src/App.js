import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import AppFirstLoad from './AppFirstLoad';

export default function App(){

    return(
        <Provider store={store}>
            <AppFirstLoad/>
        </Provider>
    )
}
