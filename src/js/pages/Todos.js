import React from "react";
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import YouTube from "react-youtube";

import ReactAudioPlayer from 'react-audio-player';

export default class Featured extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
        <YouTube
    videoId="3yhsPewIa5w"
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
