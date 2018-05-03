// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from 'ts/reducers';

let store: any;

declare const NODE_ENV: string;

if (NODE_ENV == 'development') {
    store = createStore(
        reducer,
        applyMiddleware(thunk, logger),
    );
} else {
    store = createStore(
        reducer,
        applyMiddleware(thunk),
    );
}

export default store;
