// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Paper } from 'ts/components/public';
import { IMtState } from 'ts/reducers';
import * as blogsActions from 'ts/actions/blogsActions';

const data = [
  {
    title: 'Introduction of this website 1',
    creationTime: 'May 25th 2018',
  },
  {
    title: 'Introduction of this website 2',
    creationTime: 'May 24th 2018',
  },
  {
    title: 'Introduction of this websitee 3',
    creationTime: 'May 23th 2018',
  },
  {
    title: 'Introduction of this website 4',
    creationTime: 'May 22th 2018',
  },
];

interface IOrigninalProps {
  actions: typeof blogsActions;
  isLoggedIn: boolean;
}

class Originals extends React.Component<IOrigninalProps, {}> {
  public render () {
    const { isLoggedIn } = this.props;

    return (
      <Paper>
        {
          isLoggedIn &&
          <Link to="/blogs/originals/create"><Button type="primary">New Original Article</Button></Link>
        }
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to="/blogs/originals/detail/fake-id">{item.title}</Link>}
                description={item.creationTime}
              />
            </List.Item>
          )}
        />
      </Paper>
    );
  }
}

const mapStateToProps = (state: IMtState) => (
  {
    isLoggedIn: state.main.get('isLoggedIn'),
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(blogsActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Originals);
