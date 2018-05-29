// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { dynamicComponentFromPath } from 'ts/utils/DynamicImport';

// import { Home } from 'ts/components/home';
// import { Originals, OriginalDetail, Favorites } from 'ts/components/blogs';
// import { Books, Files } from 'ts/components/downloads';
// import Messages from 'ts/components/messages/Messages';
// import { Encrypted } from 'ts/components/encrypted';

const Home = dynamicComponentFromPath(import('ts/components/home/Home'));
const Originals = dynamicComponentFromPath(import('ts/components/blogs/originals/Originals'));
const OriginalDetail = dynamicComponentFromPath(import('ts/components/blogs/originals/OriginalDetail'));
const Favorites = dynamicComponentFromPath(import('ts/components/blogs/favorites/Favorites'));

const Books = dynamicComponentFromPath(import('ts/components/downloads/books/Books'));
const Files = dynamicComponentFromPath(import('ts/components/downloads/files/Files'));

const Messages = dynamicComponentFromPath(import('ts/components/messages/Messages'));

const Encrypted = dynamicComponentFromPath(import('ts/components/encrypted/Encrypted'));

// const Home = (props:any) => (
//     <DynamicImport load={() => import('ts/components/home/Home')}>
//       {(Component) => Component === null
//         ? <p>Loading</p>
//         : <Component {...props} />}
//     </DynamicImport>
//   );

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
