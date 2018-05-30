// Copyright 2018 Matt<mr.chenyuqing@live.com>

import importAsynchronously from 'ts/utils/dynamicImport';
import { IMtRoute } from './index';

const Messages = importAsynchronously(() => import('ts/components/contents/messages/Messages'));

const messagesRoutes: IMtRoute[] = [
  {
    name: 'Messages',
    path: '/messages',
    exact: true,
    component: Messages,
  }
];

export default messagesRoutes;
