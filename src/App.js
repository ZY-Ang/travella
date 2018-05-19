import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { PageHome, Page404, Page500 } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" name="Dashboard" exact component={DefaultLayout} />
          <Route path="/wiki" name="Dashboard" exact component={DefaultLayout} />
          <Route path="/feed" name="Dashboard" exact component={DefaultLayout} />
          <Route path="/404" name="Page 404" component={Page404} />
          <Route path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" exact component={PageHome} />
          <Route path="*" name="Page 404" component={Page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
