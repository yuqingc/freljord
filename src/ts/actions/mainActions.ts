// Copyright 2018 Matt<mr.chenyuqing@live.com>

import axios from 'axios';

export const toggleLoginModal = (show: boolean) => ({
  type: 'TOGGLE_lOGIN_MODAL',
  show,
});

export const clearUserInfo = () => ({
  type: 'CLEAR_USER_INFO',
});

export const fakeLogin = () => ({
  type: 'FAKE_LOGIN',
});

export const login = (values: {username: string, password: string}) => (dispatch: any) => {
  const params = new URLSearchParams();
  params.append('username', values.username);
  params.append('password', values.password);
  axios.post(
    `/ryze/login`,
    params,
  ).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  });
};
