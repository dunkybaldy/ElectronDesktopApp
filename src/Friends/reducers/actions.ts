import { Action, ActionCreator } from 'redux';

export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export interface AddFriendAction extends Action {
    type: 'ADD_FRIEND';
    friend: string;
}
export interface RemoveFriendAction extends Action {
    type: 'REMOVE_FRIEND';
    friend: string;
}

export const addFriend: ActionCreator<AddFriendAction> = (friend: string) => ({
    type: ADD_FRIEND,
    friend
});

export const removeFriend: ActionCreator<RemoveFriendAction> = (friend: string) => ({
    type: REMOVE_FRIEND,
    friend
});

export type FriendAction = AddFriendAction | RemoveFriendAction;