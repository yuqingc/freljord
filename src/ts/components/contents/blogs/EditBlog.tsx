// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { FormEvent } from 'react';
import { Form, Input, Button, Popconfirm } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { Paper } from 'ts/components/public';
import withBackButtonInHeader from 'ts/utils/withBackButtonInHeader';

const FormItem = Form.Item;
const { TextArea } = Input;

interface IEditBlogProps extends FormComponentProps {
}

class EditBlog extends React.Component<IEditBlogProps, {}> {

  private handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  private discard = () => {
    console.log('discard');
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    // throw new Error('A fucking error'); // test error boundaries in React 16

    return (
      <Paper>
        <Form
          layout="vertical"
          onSubmit={this.handleSubmit}
        >
          <FormItem label="Title">
            {
              getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Cannot be empty!',
                  }
                ],
              })(
                <Input placeholder="Input the title here" />
              )
            }
          </FormItem>
          <FormItem label="Content">
            {
              getFieldDecorator('content', {
                rules: [
                  {
                    required: true,
                    message: 'Cannot be empty!',
                  }
                ]
              })(
                <TextArea
                  autosize={{minRows: 10}}
                  placeholder="Input the content here"
                />
              )
            }
          </FormItem>
          <FormItem>
            <div className="edit-btn-wrapper">
              <Popconfirm
                title="Discard everything?"
                onConfirm={this.discard}
                okText="Discard"
                cancelText="Cancel"
              >
                <Button type="danger">
                  Discard
                </Button>
              </Popconfirm>
              <Button
                type="primary"
                htmlType="submit"
              >
                Ok
              </Button>
            </div>
          </FormItem>
        </Form>
      </Paper>
    );
  }
}

const EditBlogForm = Form.create()(EditBlog);

export default withBackButtonInHeader(EditBlogForm);
