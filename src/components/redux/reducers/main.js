import { getProductsReducers } from "../reducers/Productreducers"

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers
});

export default rootreducers;