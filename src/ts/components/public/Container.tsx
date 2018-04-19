// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import { Layout} from 'antd';
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
    console.log(collapsed);
    this.setState({collapsed});
  }

  public render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <SideMenu/>
        </Sider>
        <Layout className="mt-left-layout">
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
