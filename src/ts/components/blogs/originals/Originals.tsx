// Copyright 2018 Matt<mr.chenyuqing@live.com>

import ReactMarkdown from 'react-markdown';
import { List } from 'antd';
import { Link } from 'react-router-dom';

import { Paper } from 'ts/components/public/common';

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

class Originals extends React.Component<{}, {}> {
  public render () {
    return (
      <Paper>
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

export default Originals;
