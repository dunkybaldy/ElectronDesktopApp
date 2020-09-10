import React from "react";
import "../Styles/App.scss"

export class Banner extends React.Component {
    render() {
        return <>
            <span className="banner">
                <div>
                    <button type="submit" onClick={this.onClick}>Logout</button>
                </div>
            </span>            
        </>
    }

    onClick = () => {
        alert("Logout clicked... how do I change login props?");
    }
}