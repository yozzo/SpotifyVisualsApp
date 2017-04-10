import React from "react";

import YouTube from "react-youtube";


export default class EmpireSounds extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        //

    return (
        <YouTube
            videoId="SHgbB8Mmr1s"
            opts={opts}
            onReady={this._onReady}
        />
        );
}

componentDidUpdate() {
    // event.target.stopVideo();
    console.log('did update', this);
}

_onReady(event) {
    console.log('event', event);

    // access to player in all event handlers via event.target
    event.target.playVideo();
}
}