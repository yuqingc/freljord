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
  readonly name: string;
  readonly path: string;
  readonly exact?: boolean;
  readonly component: (props: any) => JSX.Element;
  readonly isEncrypted?: boolean;
}

export default routes;
