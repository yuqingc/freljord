// Copyright 2018 Matt<mr.chenyuqing@live.com>

import immutable from 'immutable';

import { IMainAction } from 'ts/actions';

interface IMainState {
  showLoginModal: boolean,
  username: string | undefined,
  isLoggedIn: boolean,
}

const initalState: any = immutable.fromJS({
   showLoginModal: false,
   username: undefined,
   isLoggingIn: false,
   isLoggedIn: false,
   showLoginFailAlert:false,
} as IMainState);

export default function home (state = initalState, action: IMainAction) {
    switch (action.type) {
        case 'TOGGLE_lOGIN_MODAL':
            return state.set('showLoginModal', action.show);
        case 'CLEAR_USER_INFO':
            return state.set('isLoggedIn', false).
            set('username', undefined);
        case 'TOGGLE_IS_LOGGING_IN':
            return state.set('isLoggingIn', action.isLoggingIn);
        case 'HAS_LOGGED_IN':
            return state.set('isLoggedIn', true).
                set('username', action.username);
        case 'TOGGLE_LOGIN_FAIL_ALERT':
            return state.set('showLoginFailAlert', action.show);
        default:
            return state;
    }
}
