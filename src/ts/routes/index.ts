// Copyright 2018 Matt<mr.chenyuqing@live.com>

import _ from 'lodash';

import home from './home';
import blogs from './blogs';
import downloads from './downloads';
import messages from './messages';
import encrypted from './encrypted';

const routes: IMtRoute[] = _.concat(
  home,
  blogs,
  downloads,
  messages,
  encrypted,
);

export interface IMtRoute {
  name: string;
  path: string;
  exact?: boolean;
  component: (props: any) => JSX.Element;
  isEncrypted?: boolean;
}

export default routes;
