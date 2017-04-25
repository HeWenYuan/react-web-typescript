import * as React from 'react';
import * as _ from 'lodash';
require('./index.scss');

interface PropsList {
  color:string,
  changeColor:any,
  getTestData:any
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
      console.log(nextProps);
      console.log('color is changed !');
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

  render () {
    return (
      <div>
        <button onClick={()=> this.changeColor('yellow')}>变黄</button>
        <button onClick={()=> this.changeColor('blue')}>变蓝</button>
        <button onClick={() => this.getTestData()}>getTestData</button>
      </div>
    );
  }
}


