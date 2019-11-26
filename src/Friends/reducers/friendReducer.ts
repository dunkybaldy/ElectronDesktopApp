import { FriendState } from "../FriendState";
import { FriendAction, ADD_FRIEND, REMOVE_FRIEND } from "./actions";

const defaultState: FriendState = {
    friends: []
};

export function friendReducer(
    state = defaultState, 
    action: FriendAction
): FriendState 
{
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