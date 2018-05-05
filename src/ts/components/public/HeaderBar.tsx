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

import { REPO_ADDR } from 'ts/utils/consts';
import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

const LEFT_PARTS_COL: number = 8;
const RIGHT_PARTS_COL: number = 6;

class HeaderBar extends React.Component<any, {}> {

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
    const { username, isLoggedIn } = this.props;
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
      <Col span={LEFT_PARTS_COL}>
        <Link to="/">
          <Avatar src={require('images/fly-square.jpg')}/>
        </Link>
      </Col>
      <Col span={RIGHT_PARTS_COL} className="mt-header-right">
        <div className="mt-header-right-items">
          <Tooltip placement="bottom" title="Edit this page on GitHub">
            <Button onClick={this.goToGithubRepo}><Icon type="edit"/>Edit</Button>
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
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(mainActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar as any);
