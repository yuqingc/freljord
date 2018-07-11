// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';

const SubMenu = Menu.SubMenu;

interface ISideMenuConfig {
  name: string;
  path: string;
  icon: string;
  children?: ISideMenuConfig[];
  isEncrypted?: boolean,
}

const SideMenuConfig: ISideMenuConfig[] = [
  {
    name: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    name: 'Blogs',
    path: '/blogs',
    icon: 'rocket',
    children: [
      {
        name: 'Originals',
        path: '/blogs/originals',
        icon: 'code-o',
      },
      {
        name: 'Favorites',
        path: '/blogs/favorites',
        icon: 'star-o',
      }
    ]
  },
  {
    name: 'Downloads',
    path: '/downloads',
    icon: 'download',
    children: [
      {
        name: 'Books',
        path: '/downloads/books',
        icon: 'book',
      },
      {
        name: 'Files',
        path: '/downloads/files',
        icon: 'folder',
      }
    ]
  },
  {
    name: 'Messages',
    path: '/messages',
    icon: 'message',
  },
  {
    name: 'Encrypted',
    path: '/encrypted',
    icon: 'lock',
    isEncrypted: true,
  },
];

interface ISideMenuProps extends RouteComponentProps<ISideMenuProps> {
  location: any;
  history: any;
  isLoggedIn: boolean;
  onChangeMenu?: (key: string) => void;
}

class SideMenu extends React.Component<ISideMenuProps, {}> {

  private handleClick = (e: ClickParam) => {
    const { history, onChangeMenu } = this.props;
    history.replace(e.key);
    onChangeMenu && onChangeMenu(e.key);
  }

  // tslint:disable-next-line:member-ordering
  public render () {
    const { isLoggedIn } = this.props;
    const isAdmin = isLoggedIn;  // For now
    const { location: { pathname } } = this.props;

    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        defaultSelectedKeys={['Home']}
        mode="inline"
        selectedKeys={[pathname]}
      >
      {
        SideMenuConfig.map((v) => {
          // If the router is encrypted, whether or not its children are encrypted, is is not rendered.
          // An admin can render all parts.
          if (v.isEncrypted && !isAdmin) { return; }
          if (v.children) {
            return (
              <SubMenu
                key={v.name}
                title={
                  <span>
                    <Icon type={v.icon} />
                    <span>{v.name}</span>
                  </span>
                }
              >
                {
                  v.children.map((child) => {
                    if (!child.isEncrypted || isAdmin) {
                      return (
                        <Menu.Item key={child.path}>
                          <Icon type={child.icon} />
                          <span>{child.name}</span>
                        </Menu.Item>
                      );
                    }
                  })
                }
              </SubMenu>
            );
          }

          return (
            <Menu.Item
              key={v.path}
            >
              <Icon type={v.icon} />
              <span>{v.name}</span>
            </Menu.Item>
          );
        })
      }
      </Menu>
    );
  }
}

const mapStateToProps = (state: IMtState) => ({
  isLoggedIn: state.main.get('isLoggedIn'),
});

const connectedSideMenu = connect(mapStateToProps, null,  null, { pure: false })(SideMenu);

// bug
// fixed: https://github.com/ant-design/ant-design/issues/10380
export default withRouter(connectedSideMenu);
// export default withRouter(SideMenu);
