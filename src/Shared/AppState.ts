import { MainState } from "../Main/MainState";
import { FriendState } from "../Friends/FriendState";
import { LoginState } from "../Login/LoginState";

export interface AppState {
    mainState: MainState,
    friendState: FriendState,
    loginState: LoginState
};

export interface RootProps {
    mainState: MainState,
    friendState: FriendState,
    loginState: LoginState
}