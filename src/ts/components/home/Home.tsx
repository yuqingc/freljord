// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IMtState } from 'ts/reducers';
import * as homeActions from 'ts/actions/homeActions';

class Home extends React.Component<any, {}> {

  changeName (name: string) {
    const { actions } = this.props;
    actions.changeName(name);
  }

  public render () {
    const { name } = this.props;

    return (
      <div className="home-container">
       xxx
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
