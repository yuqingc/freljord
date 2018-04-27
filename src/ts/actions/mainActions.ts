// Copyright 2018 Matt<mr.chenyuqing@live.com>

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
