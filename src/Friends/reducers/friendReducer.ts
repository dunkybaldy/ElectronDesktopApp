import { FriendState } from "../FriendState";
import { FriendAction, ADD_FRIEND, REMOVE_FRIEND } from "./actions";
import { Reducer } from "redux";

export const friendReducer: Reducer<FriendState | undefined> = (state: FriendState | undefined, action: FriendAction | any) => {
    if (state === undefined) {
        return state;
    }

    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: state.friends.concat(action.friend)
            };
        case REMOVE_FRIEND:
            return {
                ...state,
                friends: state.friends.splice(
                    state.friends.indexOf(action.friend),
                    1
                )
            };
        default:
            return state;
    }
};