// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Icon, Menu } from 'antd';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';
import sidebarRouterConfig,
{
  ISidebarRouter,
  ISidebarRouterWithChildren,
  ISidebarRouterWithComponent,
} from 'ts/utils/sidebarRouterConfig';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

interface ISideMenuProps {
  location: any;
  history: any;
  isLoggedIn: boolean;
}

class SideMenu extends React.Component<ISideMenuProps, {}> {

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
          if ((v as ISidebarRouterWithChildren).children) {
            return (
              <SubMenu
                key={v.name}
                title={<span><Icon type={v.icon} /><span>{v.name}</span></span>}
              >
                {
                  (v as ISidebarRouterWithChildren).children.map((child) => {
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

// bug
// fixed: https://github.com/ant-design/ant-design/issues/10380
export default withRouter(connect(mapStateToProps, null,  null, { pure: false })(SideMenu) as any);
// export default withRouter(SideMenu);