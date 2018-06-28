// Copyright 2018 Matt<mr.chenyuqing@live.com>

import _ from 'lodash';

import {
  createAxios,
  formParamsFrom,
  showGlobalMessage
} from 'ts/utils/utils';
import * as mainActionTypes from './actionTypes/mainActionTypes';

export const toggleLoginModal = (show: boolean) => ({
  type: mainActionTypes.TOGGLE_lOGIN_MODAL,
  show,
});

export const clearUserInfo = () => ({
  type: mainActionTypes.CLEAR_USER_INFO,
});

export const toggleIsLoggingIn = (isLoggingIn: boolean) => ({
  type: mainActionTypes.TOGGLE_IS_LOGGING_IN,
  isLoggingIn,
});

export const hasLoggedIn = (username: string) => ({
  type: mainActionTypes.HAS_LOGGED_IN,
  username,
});

export const cancelLogin = () => ({
  type: mainActionTypes.CANCEL_LOGIN,
});

export const closeSuccessfulLogin = (username: string) => ({
  type: mainActionTypes.CLOSE_SUCCESSFUL_LOGIN,
  username,
});

export const alertFailedLogin = () => ({
  type: mainActionTypes.ALERT_FAILED_LOGIN,
});

export const login = (
  values: {username: string, password: string},
  cb: () => any
) => (dispatch: any) => {
  dispatch(toggleIsLoggingIn(true));
  createAxios().post(
    `/ryze/login`,
    formParamsFrom(values),
  ).then(res => {
    console.log('login success', res);
    const username = _.get(res, 'data.username');
    const token = _.get(res, 'data.access_token');
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    dispatch(closeSuccessfulLogin(username));
    showGlobalMessage('success', 'Logged in successfully!');
    cb();
  }).catch(err => {
    console.log('login err', err);
    dispatch(alertFailedLogin());
    showGlobalMessage('error', 'Log in failed!');
  });
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  dispatch(clearUserInfo());
  showGlobalMessage('warning', 'Logged out!');
};

export const checkTokenAtLaunch = () => (dispatch: any) => {
  const localToken = localStorage.getItem('token');
  if (localToken) {
    createAxios().get('/ryze/varify_token').
    then(res => {
      console.log('check tokennn', res);
      const username = _.get(res, 'data.usr');
      dispatch(hasLoggedIn(username));
    }).catch(err => {
      showGlobalMessage('warning', 'Invalid or expired token. Please log in manually.');
    });
  }
};

export const toggleBackButtonInHeader = (show: boolean) => ({
  type: mainActionTypes.TOGGLE_BACK_BUTTON_IN_HEADER,
  show,
});
