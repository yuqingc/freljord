// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import AppRouters from 'components/public/AppRouters';
import store from 'utils/store';
import { Provider } from 'react-redux';

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
