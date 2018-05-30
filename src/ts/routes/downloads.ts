// Copyright 2018 Matt<mr.chenyuqing@live.com>

import importAsynchronously from 'ts/utils/dynamicImport';
import { IMtRoute } from './index';

const Books = importAsynchronously(() => import('ts/components/contents/downloads/books/Books'));
const Files = importAsynchronously(() => import('ts/components/contents/downloads/files/Files'));

const downloadsRoutes: IMtRoute[] = [
  {
    name: 'Books',
    path: '/downloads/books',
    component: Books,
  },
  {
    name: 'Files',
    path: '/downloads/files',
    component: Files,
  }
];

export default downloadsRoutes;
