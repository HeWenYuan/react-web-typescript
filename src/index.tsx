import * as React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import reducer from './redux/reducer';
import App from './components/App/App';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("content")
);