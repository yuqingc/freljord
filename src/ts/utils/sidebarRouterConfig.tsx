// Copyright 2018 Matt<mr.chenyuqing@live.com>

// This file is deprecated and will be deleted in the future
// **Do not** add any configs in this file
// Config side menu items in `ts/components/frame/SideMenu.tsx`
// Config routes in `ts/routes`

import importAsynchronously from 'ts/utils/dynamicImport';

const Home = importAsynchronously(() => import('ts/components/contents/home/Home'));
const Originals = importAsynchronously(() => import('ts/components/contents/blogs/originals/Originals'));
const OriginalDetail = importAsynchronously(() => import('ts/components/contents/blogs/originals/OriginalDetail'));
const Favorites = importAsynchronously(() => import('ts/components/contents/blogs/favorites/Favorites'));

const Books = importAsynchronously(() => import('ts/components/contents/downloads/books/Books'));
const Files = importAsynchronously(() => import('ts/components/contents/downloads/files/Files'));

const Messages = importAsynchronously(() => import('ts/components/contents/messages/Messages'));

const Encrypted = importAsynchronously(() => import('ts/components/contents/encrypted/Encrypted'));

const sidebarRouterConfig: ISidebarRouter[] = [
    {
        name: 'Home',
        path: '/',
        absPath: '/',
        exact: true,
        icon: 'home',
        component: Home,
    },
    {
        name: 'Blogs',
        path: '/blogs',
        absPath: '/blogs',
        icon: 'rocket',
        children: [
            {
                name: 'Originals',
                path: '/originals',
                absPath: '/blogs/originals',
                exact: true,
                icon: 'code-o',
                component: Originals,
                children: [
                    {
                        name: 'Original Ariticle',
                        path: '/detail/:id',
                        absPath: '/blogs/originals/detail/:id',
                        icon: '',
                        component: OriginalDetail,
                    }
                ]
            },
            {
                name: 'Favorites',
                path: '/favorites',
                absPath: '/blogs/favorites',
                icon: 'star-o',
                component: Favorites,
            }
        ]
    },
    {
        name: 'Downloads',
        path: '/downloads',
        absPath: '/downloads',
        icon: 'download',
        children: [
            {
                name: 'Books',
                path: '/books',
                absPath: '/downloads/books',
                icon: 'book',
                component: Books,
            },
            {
                name: 'Files',
                path: '/files',
                absPath: '/downloads/files',
                icon: 'folder',
                component: Files,
            }
        ]
    },
    {
        name: 'Messages',
        path: '/messages',
        absPath: '/messages',
        icon: 'message',
        component: Messages,
    },
    {
        name: 'Encrypted',
        path: '/encrypted',
        absPath: '/encrypted',
        icon: 'lock',
        isEncrypted: true,
        component: Encrypted,
    },
];

// absPath is the absolute path
// absPath is used as key of side menu
interface ISidebarRouterBasics {
    readonly name: string;
    readonly path: string;
    readonly absPath: string;
    readonly exact?: boolean;
    readonly icon: string;
    readonly isEncrypted?: boolean;
}

interface ISidebarRouterWithComponent extends ISidebarRouterBasics {
    readonly component: any;
}

interface ISidebarRouterWithChildren extends ISidebarRouterBasics {
    readonly children: ISidebarRouter[];
}

type ISidebarRouter = ISidebarRouterWithComponent | ISidebarRouterWithChildren | (ISidebarRouterWithComponent & ISidebarRouterWithChildren);

export default sidebarRouterConfig;
export { ISidebarRouter, ISidebarRouterWithComponent, ISidebarRouterWithChildren };
