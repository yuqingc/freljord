// Copyright 2018 Matt<mr.chenyuqing@live.com>

import immutable from 'immutable';

import { IMainAction } from 'ts/actions';
import * as mainActionTypes from 'ts/actions/actionTypes/mainActionTypes';

interface IMainState {
  showLoginModal: boolean;
  username: string | undefined;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  showLoginFailAlert: boolean;
  showBackButtonInHeader: boolean;
}

const initalState = immutable.fromJS({
   showLoginModal: false,
   username: undefined,
   isLoggingIn: false,
   isLoggedIn: false,
   showLoginFailAlert: false,
   showBackButtonInHeader: false,
} as IMainState);

export default function home (state: typeof initalState = initalState, action: IMainAction) {
    switch (action.type) {
        case mainActionTypes.TOGGLE_LOGIN_MODAL:
            return state.set('showLoginModal', action.show);
        case mainActionTypes.CLEAR_USER_INFO:
            return state.set('isLoggedIn', false).
            set('username', undefined);
        case mainActionTypes.TOGGLE_IS_LOGGING_IN:
            return state.set('isLoggingIn', action.isLoggingIn);
        case mainActionTypes.HAS_LOGGED_IN:
            return state.set('isLoggedIn', true).
                set('username', action.username);
        case mainActionTypes.CANCEL_LOGIN:
            return state.set('showLoginModal', false).
                set('showLoginFailAlert', false);
        case mainActionTypes.CLOSE_SUCCESSFUL_LOGIN:
            return state.set('username', action.username).
                set('isLoggedIn', true).
                set('isLoggingIn', false).
                set('showLoginFailAlert', false).
                set('showLoginModal', false);
        case mainActionTypes.ALERT_FAILED_LOGIN:
            return state.set('isLoggingIn', false).
                set('showLoginFailAlert', true);
        case mainActionTypes.TOGGLE_BACK_BUTTON_IN_HEADER:
            return state.set('showBackButtonInHeader', action.show);
        default:
            return state;
    }
}
