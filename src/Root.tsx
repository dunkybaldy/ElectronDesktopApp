import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login/components/Login';
import { Main } from './Main/components/Main';
import { RootProps } from './Shared/AppState';
import { Banner } from './Shared/NavComponents/Banner';
import { Provider } from 'react-redux';
import store from './Main/store';

export class Root extends React.Component<RootProps> {
  constructor(props: RootProps) {
    super(props);

    this.state = {...props};
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route 
            exact path="/"
            render={(_) => <Login loggedIn={false} />}
          />
          <Route
            path="/main"
            render={(routeProps) => (<Main {...routeProps} {...this.props.mainState} />)}
          />
        </BrowserRouter>
      </Provider>
    )
  }
};