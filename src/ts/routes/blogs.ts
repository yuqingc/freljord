// Copyright 2018 Matt<mr.chenyuqing@live.com>

import importAsynchronously from 'ts/utils/dynamicImport';
import { IMtRoute } from './index';

const Originals = importAsynchronously(() => import('ts/components/contents/blogs/originals/Originals'));
const OriginalDetail = importAsynchronously(() => import('ts/components/contents/blogs/originals/OriginalDetail'));
const Favorites = importAsynchronously(() => import('ts/components/contents/blogs/favorites/Favorites'));

const blogsRoutes: IMtRoute[] = [
  {
    name: 'Originals',
    path: '/blogs/originals',
    exact: true,
    component: Originals,
  },
  {
    name: 'Original Ariticle',
    path: '/blogs/originals/detail/:id',
    component: OriginalDetail,
  },
  {
    name: 'Favorites',
    path: '/blogs/favorites',
    component: Favorites,
  }
];

export default blogsRoutes;
