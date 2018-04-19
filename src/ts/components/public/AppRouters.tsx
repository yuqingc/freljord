// Copyright 2018 Matt<mr.chenyuqing@live.com>

import React from 'react';
import sidebarRouterConfig, { ISidebarRouter } from 'utils/sidebarRouterConfig';
import Container from './Container';
import { Home } from 'components/home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

// 行为艺术
function renderRoutesRecursively(configs: ISidebarRouter[]): any {
  const resultRoutes: any = [];
  (function go (innerConfigs: ISidebarRouter[], parentPath: string): void {
    for (let v of innerConfigs) {
      if (v.children) {
        go(v.children, v.path);
      }
      else {
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
  })(configs, '')

  return resultRoutes;
}

class AppRouters extends React.Component<{}, {}> {

  // The art of recursion
  renderRoutesRecursively(configs: ISidebarRouter[]): any {
    const isAdmin = false;
    const resultRoutes: any = [];
    (function go (innerConfigs: ISidebarRouter[], parentPath: string): void {
      for (let v of innerConfigs) {
        if (v.children && (!v.isEncrypted || isAdmin)) {
          go(v.children, v.path);
        }
        else if (!v.isEncrypted || isAdmin) {
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
    })(configs, '')

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
