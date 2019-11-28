import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login/components/Login';
import { Main } from './Main/components/Main';
import { RootProps } from './Shared/AppState';

export class Root extends React.Component<RootProps> {
  constructor(props: RootProps) {
    super(props);

    this.state = {...props};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route 
            exact path="/"
            render={(_) => <Login loggedIn={false} />}
          />
          <Route
            path="/main"
            render={(routeProps) => (<Main {...routeProps} {...this.props.mainState} />)}
          />
        </div>
      </BrowserRouter>
    )
  }
};