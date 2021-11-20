import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./Reducers";

export const store = createStore(allReducers, applyMiddleware(thunk))