// Copyright 2018 Matt<mr.chenyuqing@live.com>

import importAsynchronously from 'ts/utils/dynamicImport';
import { IMtRoute } from './index';

const Home = importAsynchronously(() => import('ts/components/contents/home/Home'));

const homeRoutes: IMtRoute[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  }
];

export default homeRoutes;
