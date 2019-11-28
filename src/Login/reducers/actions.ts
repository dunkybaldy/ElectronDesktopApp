import { Action, ActionCreator } from "redux";

export const SUBMITLOGIN = 'SUBMITLOGIN';

export interface SubmitLoginAction extends Action {
    type: "SUBMITLOGIN"
};

export const submitLogin: ActionCreator<SubmitLoginAction> = () => ({
    type: SUBMITLOGIN
});

export type LoginAction = SubmitLoginAction;