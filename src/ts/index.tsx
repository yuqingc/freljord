// Copyright 2018 Matt<mr.chenyuqing@live.com>

import '../styles/index.scss';

import ReactDOM from 'react-dom';

import App from 'ts/components/App';

const render = (Component: any) => ReactDOM.render(
  <Component/>,
  document.getElementById('root') as HTMLElement,
);

render(App);
