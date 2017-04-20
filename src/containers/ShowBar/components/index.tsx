import * as React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

interface PropsList {color: string; changColor: any};
interface StateList {};

export default class ShowBar extends React.Component<PropsList, StateList> {

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  };
  
  render() {

    let {color} = this.props;

    return (
      <div style={{width: "200px", height: '200px', backgroundColor: color ? color : 'red', border: '1px solid black'}}>
        <img src="" alt=""/>
      </div>
    );
  }
}