import * as React from 'react';
import {connect} from 'react-redux';
import VisibleShowBar from '../ShowBar/ShowBar';
import VisibleButton from '../Button/Button';


export default class App extends React.Component<undefined, undefined> {

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <VisibleShowBar />
        <VisibleButton />
      </div>
    );
  }
}