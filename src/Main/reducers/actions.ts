import { Action, ActionCreator } from 'redux';

export const REFRESH = 'REFRESH';

export interface RefreshAction extends Action {
    type: 'REFRESH';
}

export const refresh: ActionCreator<RefreshAction> = () => ({
    type: REFRESH
});

export type MainAction = RefreshAction;