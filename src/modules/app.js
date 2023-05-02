import { combineReducers } from "redux";
import { authReducer, profileReducer } from "./user";
export const userReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
export const publicReducer = combineReducers({ auth: authReducer });
