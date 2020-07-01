import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({ user: userReducer });

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
