// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Modal } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

interface ILoginModalProps {
  showLoginModal: boolean;
  actions: any;
}

class LoginModal extends React.Component<ILoginModalProps, {}> {

  public handleCancel () {
    const { actions } = this.props;
    actions.toggleLoginModal(false);
  }

  public handleOk () {
    const { actions } = this.props;
    actions.fakeLogin();
    actions.toggleLoginModal(false);
  }

  public render () {
    const { showLoginModal } = this.props;

    return (
      <Modal
        title="Login"
        visible={showLoginModal}
        onCancel={() => this.handleCancel()}
        onOk={() => this.handleOk()}
      >
      xxxxx
      </Modal>
    );
  }
}

const mapStateToProps = (state: IMtState) => (
  {
    showLoginModal: state.main.get('showLoginModal'),
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(mainActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal as any);
