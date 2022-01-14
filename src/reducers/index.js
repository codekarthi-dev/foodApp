import GenerealReducer from "./GeneralReducer";
import { combineReducers } from "redux";

export default combineReducers({
  generalState: GenerealReducer,
});
