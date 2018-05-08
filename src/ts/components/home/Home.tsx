// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon, Tooltip, Carousel } from 'antd';

import { IMtState } from 'ts/reducers';
import * as homeActions from 'ts/actions/homeActions';
import { MT_GITHUB_ADDR, MT_ZHIHU_ADDR, MT_EMAIL } from 'ts/utils/consts';

class Home extends React.Component<any, {}> {

  changeName (name: string) {
    const { actions } = this.props;
    actions.changeName(name);
  }

  public render () {
    const { name } = this.props;
    const slideArr = ['1', `2`, `3`, `4`];

    return (
      <div className="home-container">
        <div className="home-slides">
          <Carousel autoplay>
          {
            slideArr.map(v => (
              <div
                key={v}
              >
                <h3>{v}</h3>
              </div>
            ))
          }
          </Carousel>
        </div>
        <div className="display-icons">
          <div className="icon-wrapper">
            <Tooltip title="GitHub">
            <Icon
              type="github"
              onClick={() => {window.open(MT_GITHUB_ADDR);}}
              />
            </Tooltip>
          </div>
          <div className="icon-wrapper">
            <Tooltip title="Zhihu">
              <Icon
                type="zhihu"
                onClick={() => {window.open(MT_ZHIHU_ADDR);}}
                />
              </Tooltip>
          </div>
          <div className="icon-wrapper">
            <Tooltip title={`mailto:${MT_EMAIL}`}>
              <Icon
                type="mail"
                onClick={() => {window.location.href = `mailto:${MT_EMAIL}`;}}
                />
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
