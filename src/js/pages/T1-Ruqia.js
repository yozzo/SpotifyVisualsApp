import React from "react";
import SpotifyStore from "../stores/SpotifyStore";

export default class Ruquia extends React.Component {
    constructor() {
        super();
        this.getSpotify = this.getSpotify.bind(this);

        this.state = {
            albums: SpotifyStore.getAll()
        };

        debugger;
    }

    getSpotify() {
        this.setState({
            albums: SpotifyStore.getAll()
        });
    }

    render() {
        return (
            <div>
                <h1>Track One</h1>
            </div>
        );
    }
}