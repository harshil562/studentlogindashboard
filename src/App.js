import React, { Component } from 'react';
import Login from './Pages/Login/Login';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Dashboard from './Pages/Dashboard/Dashboard';
import Details from './Pages/Details/Details'
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  render() {
    const { cookies } = this.props;
    const isSessionActive = cookies.get('isSessionActive');
    return (
      <div>
        {!isSessionActive ? <Login cookies={cookies} /> :
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={() => <Dashboard cookies={cookies} />} />
                <Route exact path="/:studentId" component={Details} />
              </Switch>
            </div>
          </BrowserRouter>}
      </div>
    );
  }
}

export default withCookies(App);
