// Copyright 2018 Matt<mr.chenyuqing@live.com>

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import sidebarRouterConfig,
  {
    ISidebarRouter,
    ISidebarRouterWithComponent,
    ISidebarRouterWithChildren
  } from 'ts/utils/sidebarRouterConfig';
import routes, { IMtRoute } from 'ts/routes';
import Container from './Container';
import { NotFound } from 'ts/components/public';
import { IMtState } from 'ts/reducers';

interface IAppRoutersProps {
  isLoggedIn: boolean;
}

class AppRouters extends React.Component<IAppRoutersProps, {}> {

  // This method is deprecated and will be deleted in the future
  // Render routes recursively
  // If the route is encrypted and the current user is not admin, it will redirect to the NotFound page
  // Any depth of route should be registered with this function,
  // but the side bar only renders to the second depth of route at most
  // public renderRoutesRecursively (configs: ISidebarRouter[]): any {
  //   const { isLoggedIn } = this.props;
  //   const isAdmin = isLoggedIn; // for now
  //   const resultRoutes: any = [];
  //   (function go (innerConfigs: ISidebarRouter[], parentPath: string): void {
  //     for (const v of innerConfigs) {
  //       if (!v.isEncrypted || isAdmin) {
  //         if ((v as ISidebarRouterWithComponent).component) {
  //           resultRoutes.push(
  //             <Route
  //               key={v.name}
  //               path={parentPath + v.path}
  //               exact={!!v.exact}
  //               component={(v as ISidebarRouterWithComponent).component}
  //             />
  //           );
  //         }
  //         if ((v as ISidebarRouterWithChildren).children) {
  //           go((v as ISidebarRouterWithChildren).children, parentPath + v.path);
  //         }
  //       }
  //     }
  //   })(configs, '');

  //   return resultRoutes;
  // }

  private renderRoutes (routes: IMtRoute[]) {
    const { isLoggedIn } = this.props;
    const isAdmin = isLoggedIn; // for now

    return routes.map(v => {
      if (isAdmin || !v.isEncrypted) {
        return (
          <Route
            key={v.name}
            path={v.path}
            exact={v.exact}
            component={v.component}
          />
        );
      }
    });
  }

  public render () {
    return(
      <Router>
        <Container>
          <Switch>
            {
              this.renderRoutes(routes)
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

export default connect(mapStateToProps)(AppRouters);
