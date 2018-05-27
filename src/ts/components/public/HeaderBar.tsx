// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Col,
  Row,
  Button,
  Icon,
  Tooltip,
  Menu,
  Dropdown,
  Avatar,
} from 'antd';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { REPO_ADDR } from 'ts/utils/consts';
import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

const LEFT_PARTS_COL: number = 3;
const RIGHT_PARTS_COL: number = 6;

interface IHeaderBarProps {
  actions: any;
  username: string;
  isLoggedIn: boolean;
  history: any;
  showBackButtonInHeader: boolean;
}

class HeaderBar extends React.Component<IHeaderBarProps, {}> {

  public goToGithubRepo () {
    window.open(REPO_ADDR);
  }

  public login () {
    const { actions } = this.props;
    console.log('login');
    actions.toggleLoginModal(true);
  }

  public logout () {
    const { actions } = this.props;
    console.log('logout');
    actions.logout();
  }

  public clickMenu (key: string) {
    switch (key) {
      case 'logout':
        this.logout();
        break;
      default:
        return;
    }
  }

  public render () {
    const { username, isLoggedIn, history, showBackButtonInHeader } = this.props;
    const userMenu = (
      <Menu onClick={({key}) => this.clickMenu(key)}>
        <Menu.Item key="logout">
          <Icon type="logout"/> Log out
        </Menu.Item>
      </Menu>
    );

    return (
    <Row
      className="mt-header-bar"
      type="flex"
      justify="space-between">
      <Col span={LEFT_PARTS_COL} className="mt-header-left">
        <Link to="/">
          <Avatar src={require('images/yuqingc.png')}/>
        </Link>
        {
          showBackButtonInHeader &&
          <Button icon="rollback" onClick={() => history.goBack()}>Back</Button>
        }
      </Col>
      <Col span={RIGHT_PARTS_COL} className="mt-header-right">
        <div className="mt-header-right-items">
          <Tooltip placement="bottom" title="Fork on GitHub">
            <Button onClick={this.goToGithubRepo}><Icon type="fork"/>Contribute</Button>
          </Tooltip>
          {
            isLoggedIn ?
            <Dropdown overlay={userMenu}><span><Icon type="user"/> {username} <Icon type="down"/></span></Dropdown> :
            <Tooltip placement="bottom" title="Login to manage this site">
              <Button onClick={() => this.login()}><Icon type="login"/>Log in</Button>
            </Tooltip>
          }
        </div>
      </Col>
    </Row>);
  }
}

const mapStateToProps = (state: IMtState) => (
  {
    showLoginModal: state.main.get('showLoginModal'),
    username: state.main.get('username'),
    isLoggedIn: state.main.get('isLoggedIn'),
    showBackButtonInHeader: state.main.get('showBackButtonInHeader'),
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(mainActions, dispatch),
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderBar as any) as any);
