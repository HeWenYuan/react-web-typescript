import * as React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import reducer from './redux/reducer';


let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Hello compiler="typescript" framework="React" />
  </Provider>
  ,
  document.getElementById("content")
);