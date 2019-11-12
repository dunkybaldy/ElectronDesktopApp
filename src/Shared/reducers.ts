import { combineReducers } from "redux";
import { friendReducer } from "../Friends/reducers/friendReducer";
import { mainReducer } from "../Main/reducers/mainReducer";

export const Reducer = combineReducers({
    mainState: mainReducer,
    friendState: friendReducer
});