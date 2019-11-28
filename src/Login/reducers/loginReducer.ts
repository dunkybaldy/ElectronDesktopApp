import { LoginState } from "../LoginState";
import { LoginAction, SUBMITLOGIN } from "./actions";

const defaultState: LoginState = {
    loggedIn: false
};

export function loginReducer(
    state = defaultState,
    action: LoginAction | any
): LoginState
{
    switch (action.type) {
        case SUBMITLOGIN:
            return state;
        default:
            return state;
    }
}