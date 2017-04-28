import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import reducer from './redux/reducer';
import Routes from './Routes';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,
  document.getElementById("content")
);