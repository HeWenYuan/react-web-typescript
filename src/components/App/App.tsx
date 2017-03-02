import * as React from 'react';
import {connect} from 'react-redux';
import ButtonContainer from '../Button/ButtonContainer';
import ShowBarContainer from '../ShowBar/ShowBarContainer';


export default class App extends React.Component<undefined, undefined> {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <ShowBarContainer />
        <ButtonContainer /> 
      </div>
    );
  }
}