import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Main/components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { store } from './Main/store';

// everything inside App component can access anything in Provider component
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App  />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
