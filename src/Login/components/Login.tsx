import React from 'react';
import { LoginState } from '../LoginState';
import { Redirect } from 'react-router';

export interface LoginProps {
    loggedIn: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    render() {
        return <>
            {
                this.state.loggedIn ? <Redirect to="/Main" /> : false
            }
            <div>
                <button type="submit" onClick={this.onClick}>Login</button>
            </div>
        </>
    };

    onClick = () => {
        alert("Click on da butt");
        this.setState({ loggedIn: true })
    }
}