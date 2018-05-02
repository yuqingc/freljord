// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Modal, Form, Input, Icon, Button, Alert } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

const FormItem  = Form.Item;

class LoginModal extends React.Component<any, {}> {

  public handleCancel () {
    const { actions } = this.props;
    const { resetFields } = this.props.form;
    resetFields();
    actions.cancelLogin();
  }

  public handleSubmit () {
    const { actions } = this.props;
    const { resetFields } = this.props.form;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        actions.login(values, resetFields);
      }
    });
  }

  public render () {
    const {
      showLoginModal,
      actions,
      isLoggingIn,
      showLoginFailAlert,
    } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        title="Log in"
        visible={showLoginModal}
        onCancel={() => {this.handleCancel();}}
        onOk={() => {this.handleSubmit();}}
        footer={[
          <Button key="back" onClick={() => {this.handleCancel();}}>Cancel</Button>,
          <Button key="submit" type="primary" loading={isLoggingIn} onClick={() => {this.handleSubmit();}}>
            {isLoggingIn ? 'Logging in...' : 'Log in'}
          </Button>,
        ]}
      >
        <Form layout="vertical">
          {
            showLoginFailAlert &&
            <div className="login-fail-alert">
              <Alert message="Logging in failed!" type="error" showIcon />
            </div>
          }
          <FormItem>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                max: 30,
                message: 'Cannot be over 30 characters!'
              },
              {
                whitespace: true,
                message: 'Whitespace is invalid!'
              }
            ],
          })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  max: 50,
                  message: 'Too long!'
                }
              ],
              })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const WrappedLoginModal = Form.create()(LoginModal);

const mapStateToProps = (state: IMtState) => (
  {
    showLoginModal: state.main.get('showLoginModal'),
    isLoggingIn: state.main.get('isLoggingIn'),
    showLoginFailAlert: state.main.get('showLoginFailAlert'),
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(mainActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginModal as any);
