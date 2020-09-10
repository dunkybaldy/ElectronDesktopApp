import { RiotAppState } from "../RiotAppState";

const defaultState: RiotAppState = {
    userId: ""
};

export function riotAppReducer(
    state = defaultState,
    action: any
): RiotAppState
{
    switch (action.type) {
        default:
            return state;
    }
}