import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import getTestData from "../../redux/app";
import ButtonVisual from './components';

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
};

let Button = connect(mapStateToProps, mapDispatchToProps)(ButtonVisual);

export default Button;

