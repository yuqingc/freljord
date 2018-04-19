// Copyright 2018 Matt<mr.chenyuqing@live.com>
import { Home } from 'components/home';
import { Technology, Resume } from 'components/blogs';
import { Books, Files } from 'components/downloads';
import { Messages } from 'components/messages';
import { Encrypted } from 'components/encrypted';

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

interface ISidebarRouter {
    name: string;
    path: string;
    absPath: string;
    exact?: boolean;
    icon: string;
    isEncrypted?: boolean;
    component?: any,
    children?: ISidebarRouter[]
}

export default sidebarRouterConfig;
export {ISidebarRouter};
