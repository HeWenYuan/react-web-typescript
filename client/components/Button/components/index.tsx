import * as React from 'react';
import * as _ from 'lodash';
require('./index.scss');

interface PropsList {
  color:string;
  changeColor:any;
  getTestData:any;
  getServerColor:any;
  changeColorServer:any;
};
interface StateList {};

export default class Button extends React.Component<PropsList, StateList> {
  constructor(args:any) {
    super(args);
    this.state = {
      color: 23
    };
  }

  componentWillReceiveProps(nextProps:any) {
    if (!_.isEqual(nextProps, this.props)) {
    }
  }
  
  changeColor (color:string) {
    this.setState({color: color});
    try {
      this.props.changeColor(color);
    } catch(error) {console.log(error);}
  }

  getTestData() {
    this.props.getTestData();
  }

  getServerColor() {
    this.props.getServerColor(this.props.changeColorServer);
  }

  render () {
    return (
      <div>
        <button onClick={()=> this.changeColor('yellow')}>变黄</button>
        <button onClick={()=> this.changeColor('blue')}>变蓝</button>
        <button onClick={() => this.getTestData()}>getTestData</button>
        <button onClick={() => this.getServerColor()}>从服务器获取颜色</button>
      </div>
    );
  }
}


