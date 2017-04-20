import * as React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ShowBarVisual from './components';

const mapStateToProps = function(state:any) {
  return {
    color: state.app.color
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return bindActionCreators(
    {
      
    },
    dispatch
  );
};

let ShowBar = connect(mapStateToProps, mapDispatchToProps)(ShowBarVisual);

export default ShowBar;