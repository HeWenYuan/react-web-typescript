import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getTestData } from "../../utils/http";
import ButtonVisual from './components';

const mapStateToProps = function(state:any) {
  return {
    color: state.app.color,
    getTestData: getTestData
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return bindActionCreators(
    {
      changeColor: (color:string) => ({type: color})
    },
    dispatch
  );
};

let Button = connect(mapStateToProps, mapDispatchToProps)(ButtonVisual);

export default Button;

