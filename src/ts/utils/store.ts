// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
);

export default store;
