// Copyright 2018 Matt<mr.chenyuqing@live.com>'

import { combineReducers } from 'redux';

import home from './home';
import main from './main';

const reducer = combineReducers({
    home,
    main,
});

interface IMtState {
    home: any,
    main: any,
}

export default reducer;
export { IMtState };
