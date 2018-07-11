// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { Icon } from 'antd';

import { COPYRIGHT_TEXT, ANTD_URL } from 'ts/utils/consts';

const FooterText = (props: {}) => (
  <>
    {`${COPYRIGHT_TEXT} Powered by `}
    <Icon type="ant-design"/>
    &nbsp;
    <a onClick={() => {window.open(ANTD_URL);}} className="ant-d-url">{`Ant Design`}</a>
  </>
);

export default FooterText;
