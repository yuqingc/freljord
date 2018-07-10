// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Modal, Form, Input, Icon, Button, Alert } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

const FormItem  = Form.Item;

interface ILoginModalProps extends FormComponentProps {
  actions: typeof mainActions;
  showLoginModal: boolean;
  isLoggingIn: boolean;
  showLoginFailAlert: boolean;
}

type LoginModalStateNameType = 'username' | 'password';

class LoginModal extends React.Component<ILoginModalProps, {}> {

  private handleCancel = () => {
    const { actions } = this.props;
    const { resetFields } = this.props.form;
    resetFields();
    actions.cancelLogin();
  }

  private handleSubmit = () => {
    const { actions } = this.props;
    const { resetFields } = this.props.form;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        actions.login(values, resetFields);
      }
    });
  }

  private emptyField = (fieldName: LoginModalStateNameType) => () => {
    const { form } = this.props;
    form.resetFields([fieldName]);
  }

  private suffixOf = (fieldName: LoginModalStateNameType) => {
    const { form } = this.props;
    const fieldValue = form.getFieldValue(fieldName);

    return fieldValue ?
    <Icon
      type="close-circle"
      style={{ color: 'rgba(0,0,0,.25)', cursor: 'pointer' }}
      onClick={this.emptyField(fieldName)}
    /> : null;
  }

  public render () {
    const {
      showLoginModal,
      isLoggingIn,
      showLoginFailAlert,
    } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        title="Log in"
        visible={showLoginModal}
        onCancel={this.handleCancel}
        onOk={this.handleSubmit}
        footer={[
          <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
          <Button key="submit" type="primary" loading={isLoggingIn} onClick={() => {this.handleSubmit();}}>
            {isLoggingIn ? 'Logging in...' : 'Log in'}
          </Button>,
        ]}
      >
        <Form layout="vertical">
          {
            showLoginFailAlert &&
            <div className="login-fail-alert">
              <Alert message="Log in failed!" type="error" showIcon />
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
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                suffix={this.suffixOf('username')}
                placeholder="Username"
              />
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
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={this.suffixOf('password')}
                  type="password"
                  placeholder="Password"
                />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const LoginModalForm = Form.create()(LoginModal);

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalForm);
