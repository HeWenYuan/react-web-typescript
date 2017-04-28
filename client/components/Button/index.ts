import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getTestData, getServerColor } from "../../utils/http";
import ButtonVisual from './components';

const mapStateToProps = function(state:any) {
  return {
    color: state.app.color,
    getTestData: getTestData,
    getServerColor: getServerColor
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return bindActionCreators(
    {
      changeColor: (color:string) => ({type: color}),
      changeColorServer: (res:any) => {
        return {
          type: 'change_color',
          color: res.color
        };
      }
    },
    dispatch
  );
};

let Button = connect(mapStateToProps, mapDispatchToProps)(ButtonVisual);

export default Button;

