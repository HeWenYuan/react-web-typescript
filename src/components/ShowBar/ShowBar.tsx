import * as React from 'react';

export default class ShowBar extends React.Component<undefined, undefined> {


  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div style={{width: "200px", height: '200px', backgroundColor: 'red', border: '1px solid black'}}>
        
      </div>
    );
  }
}