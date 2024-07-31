import { combineReducers } from "redux";
// yeh import actioin se kre rhy hai action ka function yeh formfunction


import {  CounterReducer   } from "./CountReducer";


const reducers = combineReducers({

  Counter:CounterReducer
});
export default reducers;
