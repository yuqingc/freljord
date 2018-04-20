// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { connect } from 'react-redux';
import { IMtState } from 'reducers';
import { bindActionCreators } from 'redux';
import * as homeActions  from 'actions/homeActions';

class Home extends React.Component<any, {}> {

  changeName (name: string) {
    const { actions } = this.props;
    actions.changeName(name);
  }

  public render () {
    const { name } = this.props;
    return (
      <div>
        <p>name:{name}</p>
        <button onClick={() => this.changeName('Json')}>Json</button>
        <button onClick={() => this.changeName('Matt')}>Matt</button>
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
