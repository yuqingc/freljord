// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Col, Row } from 'antd';
import React from 'react';

class HeaderBar extends React.Component<{}, {}> {
  public render () {
    return (
    <Row className="mt-header-bar">
      <Col span={6}>Header1</Col>
      <Col span={18}>Header2</Col>
    </Row>);
    }
}

export default HeaderBar;
