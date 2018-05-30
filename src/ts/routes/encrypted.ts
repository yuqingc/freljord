// Copyright 2018 Matt<mr.chenyuqing@live.com>

import importAsynchronously from 'ts/utils/dynamicImport';
import { IMtRoute } from './index';

const Encrypted = importAsynchronously(() => import('ts/components/contents/encrypted/Encrypted'));

const encryptedRoutes: IMtRoute[] = [
  {
    name: 'Encrypted',
    path: '/encrypted',
    exact: true,
    component: Encrypted,
    isEncrypted: true,
  }
];

export default encryptedRoutes;
