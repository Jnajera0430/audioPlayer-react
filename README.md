# Player AudioPlayer React

Player AudioPlayer React is a React component designed to play audio and visualize its spectrum. It provides playback controls, audio spectrum display and additional functionality to enhance the audio playback experience in your React applications.

## Installation

InstallationTo install Player AudioPlayer React, use npm:

`npm install player-audioplayer-react`

Or with yarn:

`yarn add player-audioplayer-react`

## Usage

To use Player AudioPlayer React in your project, import the component and set the necessary properties, such as the audio file to play. Here is a basic example of how to use it:

```js
import React from 'react';
import AudioPlayer from 'player-audioplayer-react';

const App = () => {
  const audioUrl = 'https://example.com/audio.mp3';

  return (
    <div>
      <h1>Audio Player</h1>
      <AudioPlayer audio={audioUrl} />
    </div>
  );
};

export default App;
```

## Props

The `AudioPlayer` component accepts the following properties:

- `audio`: (string, required) URL of the audio file to play.
- `playing`: (string) Path of the audio file being played.
- `setPlaying`: ((value: string) => void) Function to set the path of the audio file being played.
- `borderPlay`: (boolean) Indicates if a border should be shown at the play button.
- `showSpectrum`: (boolean) Indicates if the audio spectrum should be shown while playing.
- `showCounter`: (boolean) Indicates whether to display the playback time counter.
- `handleEndOfAudio`: (() => void) Function to handle the end of audio playback.
- `handlePlay`: ((value: boolean) => void) Function to handle audio playback.

## Observations

The audio player will only paint the spectrum for audios that allow access to data as a blog object through an HTTP request. Make sure that your audio does not have CORS blocking that does not allow the request to be made.

