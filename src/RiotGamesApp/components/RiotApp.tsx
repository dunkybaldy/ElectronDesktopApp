import { RiotAppState } from "../RiotAppState";
import React from "react";

export interface RiotAppProps {
    userId: string;
}

export class RiotApp extends React.Component<RiotAppState, RiotAppProps> {

    render() {
        return <>
            <div>you've reached a work in progress.</div>
            <div>Congratulations</div>
        </>
    };
}