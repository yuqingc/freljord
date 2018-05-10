// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Home } from 'ts/components/home';
import { Technology, Resume } from 'ts/components/blogs';
import { Books, Files } from 'ts/components/downloads';
import { Messages } from 'ts/components/messages';
import { Encrypted } from 'ts/components/encrypted';

// You can add router configs recursively but only the two most outer levels of the hierarchy are rendered in side menu.
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
                name: 'Technology',
                path: '/technology',
                absPath: '/blogs/technology',
                icon: 'code-o',
                component: Technology,
            },
            {
                name: 'Resume',
                path: '/resume',
                absPath: '/blogs/resume',
                icon: 'contacts',
                component: Resume,
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
interface ISidebarRouter {
    readonly name: string;
    readonly path: string;
    readonly absPath: string;
    readonly exact?: boolean;
    readonly icon: string;
    readonly isEncrypted?: boolean;
    readonly component?: any;
    readonly children?: ISidebarRouter[];
}

export default sidebarRouterConfig;
export { ISidebarRouter };
