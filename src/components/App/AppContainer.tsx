import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from './App';

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

let ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(App as any);

export default ButtonContainer;