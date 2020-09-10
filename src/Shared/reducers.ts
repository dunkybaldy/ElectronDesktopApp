import { combineReducers } from "redux";
import { friendReducer } from "../Friends/reducers/friendReducer";
import { mainReducer } from "../Main/reducers/mainReducer";
import { AppState } from "./AppState";
import { loginReducer } from "../Login/reducers/loginReducer";
import { riotAppReducer } from "../RiotGamesApp/reducers/riotAppReducer";

export const Reducer = combineReducers<AppState>({
    friendState: friendReducer,
    mainState: mainReducer,
    loginState: loginReducer,
    riotAppState: riotAppReducer
});