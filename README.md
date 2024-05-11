# Player AudioPlayer React

Player AudioPlayer React es un componente de React diseñado para reproducir audio y visualizar su espectro. Proporciona controles de reproducción, visualización del espectro de audio y funcionalidades adicionales para mejorar la experiencia de reproducción de audio en tus aplicaciones React.

## Instalación

Para instalar Player AudioPlayer React, utiliza npm:

`npm install player-audioplayer-react`

O con yarn:

`yarn add player-audioplayer-react`

## Uso

Para utilizar Player AudioPlayer React en tu proyecto, importa el componente y pásale las propiedades necesarias, como el archivo de audio a reproducir. Aquí tienes un ejemplo básico de cómo usarlo:

```js
import React from 'react';
import AudioPlayer from 'player-audioplayer-react';

const App = () => {
  const audioUrl = 'https://example.com/audio.mp3';

  return (
    <div>
      <h1>Reproductor de Audio</h1>
      <AudioPlayer audio={audioUrl} />
    </div>
  );
};

export default App;
```

## Props

El componente `AudioPlayer` acepta las siguientes propiedades:

`audio`: (string, required) URL del archivo de audio a reproducir.
`playing`: (string) Ruta del archivo de audio que se está reproduciendo.
`setPlaying`: ((value: string) => void) Función para establecer la ruta del archivo de audio en reproducción.
`borderPlay`: (boolean) Indica si se debe mostrar un borde al botón de reproducción.
`showSpectro`: (boolean) Indica si se debe mostrar el espectro de audio mientras se reproduce.
`showCounter`: (boolean) Indica si se debe mostrar el contador de tiempo de reproducción.
`handleEndOfAudio`: (() => void) Función para manejar el final de la reproducción del audio.
`handlePlay`: ((value: boolean) => void) Función para manejar la reproducción del audio.

## Observaciones

El reproductor de audio solo pintará el espectro para los audios que permitan acceder a datos como un objeto tipo blog a través de una petición HTTP. Asegurate que tu audio no tenga bloqueo de CORS que no permita hacer la peticion.

