import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppHeader,
  AppSidebar,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarNav navConfig={navigation} {...this.props} />
          </AppSidebar>
          <main className="main" style={{overflow: 'hidden'}}>
            <Switch>
              {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                      <route.component {...props} />
                    )} />)
                    : (null);
                },
              )}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
