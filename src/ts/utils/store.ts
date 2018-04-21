// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from 'ts/reducers';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
);

export default store;
