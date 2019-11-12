import { MainState } from "../Main/MainState";
import { FriendState } from "../Friends/FriendState";

export interface State {
    mainState: MainState,
    friendState: FriendState
};