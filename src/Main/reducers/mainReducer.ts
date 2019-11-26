import { MainAction, REFRESH } from "./actions";
import { MainState } from "../MainState";

const defaultState: MainState = {
    porp: "..."
}

export function mainReducer(
    state = defaultState, 
    action: MainAction | any
): MainState 
{
    switch (action.type) {
        case REFRESH:
            return state;
        default:
            return state;
    }
};