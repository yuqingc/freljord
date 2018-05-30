// Copyright 2018 Matt<mr.chenyuqing@live.com>

import importAsynchronously from 'ts/utils/dynamicImport';
import { IMtRoute } from './index';

const Originals = importAsynchronously(() => import('ts/components/contents/blogs/originals/Originals'));
const OriginalDetail = importAsynchronously(() => import('ts/components/contents/blogs/originals/OriginalDetail'));
const Favorites = importAsynchronously(() => import('ts/components/contents/blogs/favorites/Favorites'));
const EditBlog = importAsynchronously(() => import('ts/components/contents/blogs/EditBlog'));

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
    exact: true,
  },
  {
    name: 'Create Blog',
    path: '/blogs/:type(originals|favorites)/create',
    component: EditBlog,
    isEncrypted: true,
  },
  {
    name: 'Edit Blog',
    path: '/blogs/:type(originals|favorites)/modify/:id',
    component: EditBlog,
    isEncrypted: true,
  }
];

export default blogsRoutes;
