import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
import Hello from './containers/Hello';
import Test from './containers/Test';

export default class Routes extends React.Component<any, any> {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/hello" component={Hello}></Route>
        <Route path="/test" component={Test}></Route>
      </Router>
    );
  }
}