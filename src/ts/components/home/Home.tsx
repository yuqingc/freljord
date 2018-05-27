// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon, Tooltip, Carousel } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

import { IMtState } from 'ts/reducers';
import * as homeActions from 'ts/actions/homeActions';
import { MT_GITHUB_ADDR, MT_ZHIHU_ADDR, MT_EMAIL } from 'ts/utils/consts';
import { showGlobalMessage } from 'ts/utils/utils';

class Home extends React.Component<any, {}> {

  public render () {
    const { name } = this.props;
    const slideArr = ['1', `2`, `3`, `4`];

    return (
      <div className="home-container">
        <div className="home-slides">
          <Carousel autoplay effect="fade">
          {
            slideArr.map(v => (
              <div
                key={v}
                className="inside-slide"
              >
                <h2>{v}</h2>
              </div>
            ))
          }
          </Carousel>
        </div>
        <div className="display-icons">
          <div className="icon-wrapper">
            <a href={MT_GITHUB_ADDR} target="_blank">
              <Tooltip title="GitHub">
                <Icon
                  type="github"
                />
              </Tooltip>
            </a>
          </div>
          <div className="icon-wrapper">
            <a href={MT_ZHIHU_ADDR} target="_blank">
              <Tooltip title="Zhihu">
                <Icon
                  type="zhihu"
                />
              </Tooltip>
            </a>
          </div>
          <div className="icon-wrapper">
            <Tooltip title={`Click to copy: ${MT_EMAIL}`}>
              <CopyToClipboard
                text={MT_EMAIL}
                onCopy={() => {showGlobalMessage('success', 'Copied!');}}
              >
                <Icon type="mail"/>
                </CopyToClipboard>
              </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IMtState) => (
  {
    name: state.home.get('name'),
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    actions: bindActionCreators(homeActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);
