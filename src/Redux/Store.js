import { applyMiddleware } from "redux";
import { createStore ,Middleware ,compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./Reducers/RootReducer";

// const store = createStore(
//   reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
// );


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  
);

export default store;
