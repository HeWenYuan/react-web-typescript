import * as React from 'react';

export default class Button extends React.Component<undefined, undefined> {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };


  changeColor (color:string) {
    console.log(color);
    console.log(this.context);
    try {
      console.log(this.context.store);
    } catch (err) {
      console.log(err);
    }
  }

  render () {
    return (
      <div>
        <button onClick={()=>this.changeColor('yellow')}>变黄</button>
        <button onClick={()=>this.changeColor('blue')}>变蓝</button>
      </div>
    );
  }
}
