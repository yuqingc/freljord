// Copyright 2018 Matt<mr.chenyuqing@live.com>'

import { combineReducers } from 'redux';
import home from './home';

const reducer = combineReducers({
    home,
});

interface IMtState {
    home: any,
}

export default reducer;
export { IMtState };
