import { combineReducers } from "redux";
import { publicReducer, userReducer } from "./app";

export const rootReducer = combineReducers({
  public: publicReducer,
  user: userReducer,
});

//export * from './public';
export * from "./user";
