import { createStore } from "redux";
import allReducers from "./Reducers";

export const store = createStore (allReducers)