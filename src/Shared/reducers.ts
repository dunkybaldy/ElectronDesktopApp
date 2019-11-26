import { combineReducers } from "redux";
import { friendReducer } from "../Friends/reducers/friendReducer";
import { mainReducer } from "../Main/reducers/mainReducer";
import { State } from "./State";

export const Reducer = combineReducers<State>({
    friendState: friendReducer,
    mainState: mainReducer
});