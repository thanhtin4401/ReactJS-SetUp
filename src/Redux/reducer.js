import React from "react";
import { combineReducers } from "redux";
import authReducer from "./Auth/AuthSlice";
// compine user
const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;
