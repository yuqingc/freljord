// Copyright 2018 Matt<mr.chenyuqing@live.com>

const sidebarRouterConfig: ISidebarRouter[] = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        icon: 'home',
    },
    {
        name: 'Blogs',
        path: '/blogs',
        icon: 'file-text',
    },
    {
        name: 'Downloads',
        path: '/downloads',
        icon: 'download',
    },
    {
        name: 'Messages',
        path: '/messages',
        icon: 'message',
    },
];

interface ISidebarRouter {
    name: string;
    path: string;
    exact?: boolean;
    icon: string;
}

export default sidebarRouterConfig;
export {ISidebarRouter};
