import { Action, ActionCreator } from "redux";

export const REQUESTFREECHAMPS = 'REQUESTFREECHAMPS';

export interface RequestfreeChampsAction extends Action {
    type: "REQUESTFREECHAMPS"
};

export const submitLogin: ActionCreator<RequestfreeChampsAction> = () => ({
    type: REQUESTFREECHAMPS
});

export type LoginAction = RequestfreeChampsAction;