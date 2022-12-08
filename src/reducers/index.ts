import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleReducer: articleReducer,
});

export default rootReducer;
