// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import FooterText from './FooterText';
import LoginModal from './LoginModal';
import * as mainActions from 'ts/actions/mainActions';

const { Header, Footer, Sider, Content } = Layout;

interface IContainerProps {
  children: React.ReactElement<any>[];
  actions: any;
}

interface IContainerState {
  collapsed: boolean,
}

class Container extends React.Component<IContainerProps, IContainerState> {
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
      <Layout className="mt-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="mt-left-layout"
        >
          <SideMenu/>
        </Sider>
        <Layout className="mt-right-layout" style={{marginLeft: this.state.collapsed ? 80 : 200}}>
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

// If you don't wrap Container with `withRouter`, router render will not work due to the connect function.
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container) as any);
