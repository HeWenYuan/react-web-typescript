import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as _ from 'lodash';

import getTestData from "../../redux/app";

interface PropsList {
  color:string,
  changeColor:any,
  getTestData:any
};
interface StateList {};

class Button extends React.Component<PropsList, StateList> {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  }

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
      // this.context.store.dispatch({type: color});
      // this.props.changeColor();
      // this.context.store.dispatch(this.props.changeColor(color));
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
        <button onClick={() => this.getTestData()}></button>
      </div>
    );
  }
}

const mapStateToProps = function(state:any) {
  return {
    color: state.app.color
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return bindActionCreators(
    {
      changeColor: (color:string) => ({type: color}),
      getTestData: getTestData
    },
    dispatch
  );
}

let VisibleButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default VisibleButton;


