// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const LEFT_PARTS_COL: number= 4;
const RIGHT_PARTS_COL: number = 6;

class HeaderBar extends React.Component<{}, {}> {
  public render () {
    return (
    <Row className="mt-header-bar">
      <Col span={LEFT_PARTS_COL}>
        <Link to="/">
          <h1><img style={{height: '50px'}} src={require("images/matt_logo.jpg")}/></h1>
        </Link>
      </Col>
      {/* <Col span={6}>Header1</Col> */}
      <Col
        span={RIGHT_PARTS_COL} 
        offset={24 - LEFT_PARTS_COL - RIGHT_PARTS_COL }
      >Header2</Col>
    </Row>);
  }
}

export default HeaderBar;
