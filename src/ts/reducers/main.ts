// Copyright 2018 Matt<mr.chenyuqing@live.com>

import immutable from 'immutable';

import { IMainAction } from 'ts/actions';

interface IMainState {
  showLoginModal: boolean;
  username: string | undefined;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  showLoginFailAlert: boolean;
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
        case 'CANCEL_LOGIN':
            return state.set('showLoginModal', false).
                set('showLoginFailAlert', false);
        case 'CLOSE_SUCCESSFUL_LOGIN':
            return state.set('username', action.username).
                set('isLoggedIn', true).
                set('isLoggingIn', false).
                set('showLoginFailAlert', false).
                set('showLoginModal', false);
        case 'ALERT_FAILED_LOGIN':
            return state.set('isLoggingIn', false).
                set('showLoginFailAlert', true);
        default:
            return state;
    }
}
