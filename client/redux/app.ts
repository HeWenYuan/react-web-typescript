import { assign } from 'lodash';

const initialState = {
  num: 0,
  color: 'black'
};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case 'yellow':
      return assign({}, state, {color: action.color});
    case 'blue':
      return assign({}, state, {color: action.color});
    case 'change_color': 
      return assign({}, state, {color: action.color});
    default:
      return state
  }
};