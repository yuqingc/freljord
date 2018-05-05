// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Icon, Menu } from 'antd';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';
import sidebarRouterConfig, { ISidebarRouter } from 'ts/utils/sidebarRouterConfig';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

interface ISideMenuProps {
  location: any,
}

class SideMenu extends React.Component<any, ISideMenuProps> {

  private handleClick = (e: any) => {
    const { history } = this.props;
    history.replace(e.key);
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
        sidebarRouterConfig.map((v: ISidebarRouter) => {
          // If the router is encrypted, whether or not its children are encrypted, is is not rendered.
          // An admin can render all parts.
          if (v.isEncrypted && !isAdmin) { return; }
          if (v.children) {
            return (
              <SubMenu
                key={v.name}
                title={<span><Icon type={v.icon} /><span>{v.name}</span></span>}
              >
                {
                  v.children.map((child) => {
                    if (!child.isEncrypted || isAdmin) {
                      return (
                        <Menu.Item key={child.absPath}>
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
              key={v.absPath}
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

// 使用了 withRouter 之后就出现菜单的 bug
// 收起和展开的时候宽度是变了 但是文字和图标行为不正常
export default withRouter(connect(mapStateToProps)(SideMenu) as any);
// export default withRouter(SideMenu);
