import * as React from 'react';

interface stateList {};

export default class Test extends React.Component<undefined, stateList> {

  constructor () {
    super();
    this.state = {};
  }

  add (e:any, num:any, c:any) {
    let div = this.refs.myValue;
    for (let key in div) {
      // console.log(key);
    }
    console.log(num);
    console.log(num.target);
    console.log(e);
    console.log('c');
    console.log(c);
    console.log(typeof c);
  }
  
  render () {
    return (
      <div>
        Test
        <img src="/res/test.png" alt=""/>
        <div ref="myValue">1</div>
        <button onClick={this.add.bind(this, 12)}>add</button>
      </div>
    );
  }
}