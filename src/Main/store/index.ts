import * as React from "react";
import { createStore, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk"
import { State } from "../../Shared/State";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducer } from "../../Shared/reducers";

const configureStore = (initialState?: State): Store<State | undefined> => {
    const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
    const enhancer = composeWithDevTools(middlewareEnhancer);
    return createStore(Reducer, initialState, enhancer);
};

const store = configureStore();

if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').rootReducer)
    );
}

export default store;