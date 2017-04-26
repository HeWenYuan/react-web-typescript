import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import ShowBar from '../ShowBar';
import Button from '../Button';
import "./index.scss";


export default class App extends React.Component<any, any> {

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <ShowBar />
        <Button />
        <Link to="/test">I Love You ! 2b2b,sbsb</Link>
        <div>
          <img src='/res/test.png' alt="myimg"/>
        </div>
        <div>
          <img src={require('./Joker.jpg')} alt="img"/>
        </div>
        <div className='bg'></div>
        asdasdasd
      </div>
    );
  }
}