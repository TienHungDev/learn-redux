import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./counter";

const reducer = combineReducers({
    counter
});
const store = configureStore({
    reducer,
});
export default store;