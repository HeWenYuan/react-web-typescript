import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import reducer from './redux/reducer';


import App from './containers/App/App';
import Hello from './containers/Hello/Hello';


let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/hello" component={Hello}></Route>
    </Router>
  </Provider>
  ,
  document.getElementById("content")
);