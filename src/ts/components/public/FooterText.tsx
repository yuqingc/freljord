// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { Icon } from 'antd';

import { COPYRIGHT_TEXT } from 'ts/utils/consts';

const FooterText = (props: {}) => (
  <>{`${COPYRIGHT_TEXT} Powered by`} <Icon type="ant-design"/>{` Ant Design`}</>
);

export default FooterText;
