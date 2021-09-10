import messages from "./messages";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    messages: messages
});

export default allReducers;