// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import FooterText from './FooterText';
import LoginModal from './LoginModal';
import * as mainActions from 'ts/actions/mainActions';

const { Header, Footer, Sider, Content } = Layout;

interface IContainerState {
  collapsed: boolean,
}

class Container extends React.Component<any, IContainerState> {
  public state = {
    collapsed: false,
  };

  public componentDidMount () {
    const { actions } = this.props;
    actions.checkTokenAtLaunch();
  }

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
        <LoginModal/>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(mainActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
