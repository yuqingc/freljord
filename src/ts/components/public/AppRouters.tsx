// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import sidebarRouterConfig, { ISidebarRouter } from 'ts/utils/sidebarRouterConfig';
import Container from './Container';
import { Home } from 'ts/components/home';
import NotFound from './NotFound';
import { IMtState } from 'ts/reducers';

interface IAppRoutersProps {
  isLoggedIn: boolean;
}

class AppRouters extends React.Component<IAppRoutersProps, {}> {

  // Render routes recursively
  // If the route is encrypted and the current user is not admin, it will redirect to the NotFound page
  // Any depth of route should be registered with this function,
  // but the side bar only renders to the second depth of route at most
  public renderRoutesRecursively (configs: ISidebarRouter[]): any {
    const { isLoggedIn } = this.props;
    const isAdmin = isLoggedIn; // for now
    const resultRoutes: any = [];
    (function go (innerConfigs: ISidebarRouter[], parentPath: string): void {
      for (const v of innerConfigs) {
        if (v.children && (!v.isEncrypted || isAdmin)) {
          go(v.children, v.path);
        } else if (!v.isEncrypted || isAdmin) {
          resultRoutes.push(
            <Route
              key={v.name}
              path={parentPath + v.path}
              exact={v.exact}
              component={v.component}
            />
          );
        }
      }
    })(configs, '');

    return resultRoutes;
  }

  public render () {
    return(
      <Router>
        <Container>
          <Switch>
            {
              this.renderRoutesRecursively(sidebarRouterConfig)
            }
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state: IMtState) => ({
  isLoggedIn: state.main.get('isLoggedIn'),
});

export default connect(mapStateToProps)(AppRouters as any);
