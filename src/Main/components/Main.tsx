import React from 'react';
import logo from './logo.svg';
import '../../Shared/Styles/App.css';

export interface MainProps {
  porp: string;
}

export class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p>
            <p>We only have one prop: "{this.props.porp}"</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
      </>
    )
  }
};