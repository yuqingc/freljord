// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React, { CSSProperties } from 'react';
import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const siderStyle: CSSProperties = { 
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
};

const leftLayoutStyle: CSSProperties = {
  marginLeft: 200,
};

class Container extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <Sider style={siderStyle}>
          <SideMenu/>
        </Sider>
        <Layout style={leftLayoutStyle}>
          <HeaderBar/>
          <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
    </Layout>
      );
  }
}

export default Container;
