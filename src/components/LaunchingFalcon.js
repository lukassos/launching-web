import React from 'react';
import YouTube from 'react-youtube';

class LaunchingFalcon extends React.Component {
  render() {
    const opts = {
      height: '720',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
	      controls: 0,
	      rel: 0,
	      showinfo: 0
		}
		// ,
	  // start: 1166
    };

    return (
      <YouTube
        videoId="Dorv9A8M8HM"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default LaunchingFalcon;
