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
        <Link to="/test">I Love You !</Link>
        <div>
          <img src='/res/test.png' alt="myimg"/>
        </div>
        <div>
          <img src={require('./Joker.jpg')} alt="img"/>
        </div>
        <div className='bg'></div>
        asdasdasd
        云端图片
        <div>
          <img src="https://o44j7l4g3.qnssl.com/reply_script_material/1493264952/qrcode.jpeg" alt="yunduan"/>
        </div>
      </div>
    );
  }
}