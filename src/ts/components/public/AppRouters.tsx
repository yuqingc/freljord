// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import sidebarRouterConfig, { ISidebarRouter } from 'utils/sidebarRouterConfig';
import Container from './Container';
import { Home } from 'components/home';
import NotFound from './NotFound';

class AppRouters extends React.Component<{}, {}> {

  // Render routes recursively
  // If the route is encrypted and the current user is not admin, it will redirect to the NotFound page
  // Any depth of route should be registered with this function,
  // but the side bar only renders to the second depth of route at most
  public renderRoutesRecursively (configs: ISidebarRouter[]): any {
    const isAdmin = false;
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

export default AppRouters;
