import {combineReducers} from "redux";
import verifyUser from "./verifyUser"
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers ({
    verifyUser,
    users,
    questions,
    loadingBar: loadingBarReducer
})
