import http from "../utils/http";

const initialState = {
  num: 0,
  color: 'black'
};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        num: 3
      };
    case 'DECREMENT':
      return {
        ...state,
        num: 0
      };

    case 'yellow':
      return {
        ...state,
        color: 'yellow'
      };

    case 'blue':
      return {
        ...state,
        color: 'blue'
      };
    default:
      return state
  }
};

export function getTestData () {
  let rq = new http("/get_test_data", "get", {}, (res:any) => {
    console.log(res);
  });

  rq.request();
}