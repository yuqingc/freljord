// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IMtState } from 'ts/reducers';
import * as mainActions from 'ts/actions/mainActions';

interface IShowBackProps {
  actions: typeof mainActions;
  children: any;
}

// HOC
// show back button on entering and disappear on exiting
const withBackButtonInHeader = (WrappedComponent: React.ComponentType<any>) => {

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

  const mapStateToProps = (state: IMtState) => ({});

  const mapDispatchToProps = (dispatch: any) => (
    {
      actions: bindActionCreators(mainActions, dispatch),
    }
  );

  return (
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(ShowBackInHeader) as any
  );
};

export default withBackButtonInHeader;
