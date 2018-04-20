// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Layout } from 'antd';

import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import FooterText from './FooterText';

const { Header, Footer, Sider, Content } = Layout;

interface IContainerState {
  collapsed: boolean,
}

class Container extends React.Component<any, IContainerState> {
  public state = {
    collapsed: false,
  };

  public onCollapse = (collapsed: boolean) => {
    this.setState({collapsed});
  }

  public render () {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <SideMenu/>
        </Sider>
        <Layout className="mt-right-layout">
          <Header className="mt-header">
            <HeaderBar/>
          </Header>
          <Content className="mt-content">{this.props.children}</Content>
          <Footer className="mt-footer"><FooterText/></Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Container;
