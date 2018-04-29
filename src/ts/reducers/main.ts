// Copyright 2018 Matt<mr.chenyuqing@live.com>

import immutable from 'immutable';

import { IMainAction } from 'ts/actions';

interface IMainState {
  showLoginModal: boolean,
  username: string,
  isLoggedIn: boolean,
}

const initalState: any = immutable.fromJS({
   showLoginModal: false,
   username: 'admin',
   isLoggedIn: false,
} as IMainState);

export default function home (state = initalState, action: IMainAction) {
    switch (action.type) {
        case 'TOGGLE_lOGIN_MODAL':
            return state.set('showLoginModal', action.show);
        case 'CLEAR_USER_INFO':
            return state.set('isLoggedIn', false);
        case 'FAKE_LOGIN':
            return state.set('isLoggedIn', true);
        default:
            return state;
    }
}