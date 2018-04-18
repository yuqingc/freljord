// Copyright 2018 Matt<mr.chenyuqing@live.com>

import '../styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

declare const module: any;

const render = (Component: any) => ReactDOM.render(
  <Component/>,
  document.getElementById('root') as HTMLElement,
);

render(App);
