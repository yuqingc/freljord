// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Icon, Menu } from 'antd';
import sidebarRouterConfig, { ISidebarRouter } from 'utils/sidebarRouterConfig';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class SideMenu extends React.Component<any, any> {

  private handleClick = (e: any) => {
    console.log('click ', e);
  }

  // tslint:disable-next-line:member-ordering
  public render () {
      return (
        <Menu
          theme="dark"
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
        {
          sidebarRouterConfig.map((v: ISidebarRouter) => (
            <SubMenu
              key={v.name}
              title={<span><Icon type={v.icon} /><span>{v.name}</span></span>}
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          ))
        }
      </Menu>
      );
    }
}

export default SideMenu;
