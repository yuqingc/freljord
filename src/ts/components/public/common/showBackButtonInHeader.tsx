// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

interface IShowBackProps {
  actions?: any;
}

// HOC
// show back button on entering and disappear on exiting
const showBackButtonInHeader = (WrappedComponent: React.ComponentClass) => {

  class ShowBackInHeader extends React.Component<IShowBackProps, {}> {

    public componentDidMount () {
      const { actions } = this.props;
      actions.toggleBackButtonInHeader(true);
    }

    public componentWillUnmount () {
      const { actions } = this.props;
      actions.toggleBackButtonInHeader(false);
    }

    public render () {
      return <WrappedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state: IMtState) => (
    {
      showBackButtonInHeader: state.main.get('showBackButtonInHeader'),
    } as any
  );

  const mapDispatchToProps = (dispatch: any) => (
    {
      actions: bindActionCreators(mainActions, dispatch),
    }
  );

  return connect(mapStateToProps, mapDispatchToProps)(ShowBackInHeader);
};

export default showBackButtonInHeader;
