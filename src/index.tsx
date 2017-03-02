import * as React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import reducer from './redux/reducer';

import Hello from './components/Hello';


let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Hello framework="React" compiler="TypeScript" />
  </Provider>
  ,
  document.getElementById("content")
);