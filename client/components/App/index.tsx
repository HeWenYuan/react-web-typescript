import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import ShowBar from '../ShowBar';
import Button from '../Button';
import "./index.scss";
let img = require('./Joker.jpg');

interface AppProps {
  
};

interface AppState {
  num:number;
}

export default class App extends React.Component<AppProps, AppState> {

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      num: 1
    };
  }

  componentWillMount():void {
    console.log(backend_url);
  }

  render () {
    return (
      <div>
        <ShowBar />
        <Button />
        <Link to="/test">sb</Link>
        <div>
          <img src={require('./Joker.jpg')} alt="img"/>
        </div>
        asdasdasd
        云端图片
      </div>
    );
  }
}