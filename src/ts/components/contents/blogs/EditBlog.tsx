// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Paper } from 'ts/components/public';
import withBackButtonInHeader from 'ts/utils/withBackButtonInHeader';

class EditBlog extends React.Component<{}, {}> {
  render () {
    return (
      <Paper>edit</Paper>
    );
  }
}

export default withBackButtonInHeader(EditBlog);
