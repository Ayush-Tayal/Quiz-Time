import { combineReducers } from "redux";
import scoreReducer from "./score";

const allReducers = combineReducers ({
    scores:scoreReducer
})

export default allReducers