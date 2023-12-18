// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducers from './components/redux/reducers/main';

// const middleware = [thunk];

// const store = createStore(
//     rootReducers,  // <-- Corrected the variable name to match the import
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import rootReducer from "./components/redux/reducers/main";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;




