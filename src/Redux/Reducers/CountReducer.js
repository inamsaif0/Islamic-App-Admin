import { NAVBAR } from "../Action/ActionFunction";
const intialState = false


//switch case matching wo onclick use pata chalata hai ke konsa action perform krna hai yeh nichey hua hai


export const CounterReducer = (state = intialState, { type, payload }) => {

    // console.log("value of countreducer payload ",payload)

    switch (type) {

      case NAVBAR:
        // debugger
        return  payload  ;

        // case ActionTypes.DECREMENT:
        // return  state - 1;
      default:
        return state ;
    }
  };