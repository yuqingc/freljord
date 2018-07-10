// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Form, Input } from 'antd';

import { Paper } from 'ts/components/public';
import withBackButtonInHeader from 'ts/utils/withBackButtonInHeader';

const FormItem = Form.Item;

class EditBlog extends React.Component<{}, {}> {
  render () {
    return (
      <Paper>
        <Form layout="vertical">
          <FormItem label="Title">
            <Input placeholder="Input the title here" />
          </FormItem>
        </Form>
      </Paper>
    );
  }
}

export default withBackButtonInHeader(EditBlog);
