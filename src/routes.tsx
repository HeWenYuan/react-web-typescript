import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';

export default class Routes extends React.Component<any, any> {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
      </Router>
    );
  }
}