import React from 'react';
import logo from './logo.svg';
import '../../Shared/Styles/App.scss';
import { Redirect } from 'react-router';
import { MainState } from '../MainState';

export interface MainProps {
  porp: string;
  logoutRequest: boolean;
}

export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
      porp: props.porp,
      logoutRequest: props.logoutRequest
    };
  }

  render() {
    return (
      <>
        {
          this.state.logoutRequest ? <Redirect to="/" /> : false
        }
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>We only have one prop: "{this.props.porp}"</p>
            <a className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">Learn React</a>
          </header>
        </div>
      </>
    )
  }

  onClick = () => {
    this.setState({ logoutRequest: true });
  };
};