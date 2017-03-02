import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ShowBar from './ShowBar';

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    color: state.color
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return bindActionCreators(
    {
      
    },
    dispatch
  );
};

let ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ShowBar as any);

export default ButtonContainer;