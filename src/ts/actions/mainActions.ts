// Copyright 2018 Matt<mr.chenyuqing@live.com>

import _ from 'lodash';
import { message } from 'antd';

import { createAxios, formParamsFrom } from 'ts/utils/utils';

type showGlobalMessageKeyType = 'info' | 'success' | 'error' | 'warning';

export const showGlobalMessage = (mode: showGlobalMessageKeyType, messageString: string) => (dispatch: any) => {
  message[mode](messageString);
};

export const toggleLoginModal = (show: boolean) => ({
  type: 'TOGGLE_lOGIN_MODAL',
  show,
});

export const clearUserInfo = () => ({
  type: 'CLEAR_USER_INFO',
});

export const toggleIsLoggingIn = (isLoggingIn: boolean) => ({
  type: 'TOGGLE_IS_LOGGING_IN',
  isLoggingIn,
});

export const hasLoggedIn = (username: string) => ({
  type: 'HAS_LOGGED_IN',
  username,
});

export const toggleLoginFailAlert = (show: boolean) => ({
  type: 'TOGGLE_LOGIN_FAIL_ALERT',
  show,
});

export const login = (
  values: {username: string, password: string},
  cb: () => any
) => (dispatch: any) => {
  dispatch(toggleIsLoggingIn(true));
  // const params = new URLSearchParams();
  // TODO: optimize axios.post referring to npm docs
  // params.append('username', values.username);
  // params.append('password', values.password);
  createAxios().post(
    `/ryze/login`,
    formParamsFrom(values),
  ).then(res => {
    console.log('login success', res);
    const username = _.get(res, 'data.username');
    const token = _.get(res, 'data.access_token');
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    dispatch(hasLoggedIn(username));
    dispatch(toggleIsLoggingIn(false));
    dispatch(toggleLoginFailAlert(false));
    dispatch(toggleLoginModal(false));
    dispatch(showGlobalMessage('success', 'You have logged in successfully!'));
    cb();
  }).catch(err => {
    console.log('login err', err);
    dispatch(toggleIsLoggingIn(false));
    dispatch(toggleLoginFailAlert(true));
    dispatch(showGlobalMessage('error', 'Logging in failed!'));
  });
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  dispatch(clearUserInfo());
  dispatch(showGlobalMessage('warning', 'You have logged out!'));
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
      dispatch(showGlobalMessage('warning', 'Invalid or expired token. Please log in manually.'));
    });
  }
};
