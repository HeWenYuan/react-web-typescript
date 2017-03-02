import * as React from 'react';
import {connect} from 'react-redux';
import Button from './Button/Button';
import ShowBar from './ShowBar/ShowBar';


export default class App extends React.Component<undefined, undefined> {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <ShowBar />
        <Button /> 
      </div>
    );
  }
}