import { MainAction, REFRESH } from "./actions";
import { MainState } from "../MainState";
import { Reducer } from "redux";

export const mainReducer: Reducer<MainState | undefined> = (state: MainState | undefined, action: MainAction | any) => {
    switch (action.type) {
        case REFRESH:
            return state;
        default:
            return state;
    }
};