import { MainState } from "../Main/MainState";
import { FriendState } from "../Friends/FriendState";
import { LoginState } from "../Login/LoginState";
import { RiotAppState } from "../RiotGamesApp/RiotAppState";

export interface AppState {
    mainState: MainState,
    friendState: FriendState,
    loginState: LoginState,
    riotAppState: RiotAppState
};

export interface RootProps {
    mainState: MainState,
    friendState: FriendState,
    loginState: LoginState,
    riotAppState: RiotAppState
}