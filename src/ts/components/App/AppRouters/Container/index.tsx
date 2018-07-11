// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';

import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import FooterText from './FooterText';
import LoginModal from './LoginModal';
import * as mainActions from 'ts/actions/mainActions';

const { Header, Footer, Sider, Content } = Layout;

interface IContainerProps extends RouteComponentProps<IContainerProps> {
  children: React.ReactElement<any> | React.ReactElement<any>[];
  actions: typeof mainActions;
}

interface IContainerState {
  collapsed: boolean,
  hasError: boolean,
}

class Container extends React.Component<IContainerProps, IContainerState> {
  constructor (props: any) {
    super(props);
    this.state = {
      collapsed: false,
      hasError: false,
    };
  }

  public componentDidMount () {
    const { actions } = this.props;
    actions.checkTokenAtLaunch();
  }

  public componentDidCatch (error: any, info: any) {
    if (process.env.NODE_ENV == 'development') {
      console.error('error caught from child element tree:', error);
      console.info('info got in `componentDidCatch`', info);
    }
    this.setState({hasError: true});
  }

  private onCollapse = (collapsed: boolean) => {
    this.setState({collapsed});
  }

  // recover from crashed page on route changing
  private onChangeMenu = (key: string) => {
    this.setState({hasError: false});
  }

  public render () {
    const ERROR_MESSAGE: string = 'Oops... Something went wrong in this page. Try switching to other tabs in the left menu.';

    return (
      <Layout className="mt-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="mt-left-layout"
        >
          <SideMenu onChangeMenu={this.onChangeMenu} />
        </Sider>
        <Layout className="mt-right-layout" style={{marginLeft: this.state.collapsed ? 80 : 200}}>
          <Header className="mt-header">
            <HeaderBar/>
          </Header>
          <Content className="mt-content">{this.state.hasError ? ERROR_MESSAGE : this.props.children}</Content>
          <Footer className="mt-footer"><FooterText/></Footer>
        </Layout>
        <LoginModal/>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => (
  {
    actions: bindActionCreators(mainActions, dispatch),
  }
);

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

// If you don't wrap Container with `withRouter`, router render will not work due to the connect function.
export default withRouter(connectedContainer);
