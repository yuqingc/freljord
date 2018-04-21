// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Provider } from 'react-redux';

import AppRouters from 'ts/components/public/AppRouters';
import store from 'ts/utils/store';

class App extends React.Component<{}, {}> {
    public render () {
        return (
            <Provider store={store}>
                <AppRouters/>
            </Provider>
        );
    }
}

export default App;
