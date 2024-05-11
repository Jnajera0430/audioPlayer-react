import IconPlay from "./utils/icons/IconPlay";
import IconPause from "./utils/icons/IconPause";
import IconAudio from "./utils/icons/IconAudio";
import React, { useState, useEffect, useCallback, useRef, CSSProperties, ForwardRefExoticComponent, RefAttributes, forwardRef, ForwardedRef, useImperativeHandle, SyntheticEvent, MouseEvent } from 'react';
import { AudioVisualizer } from "./espectrum/index";
interface AudioPlayerStyles extends CSSProperties {}
interface Props {
  checked?: boolean;
  disabled?: boolean;
  style?: AudioPlayerStyles;
  audio: string;
  playing?: string;
  setPlaying?: (value: string) => void;
  borderPlay?: boolean;
  showSpectro?: boolean;
  showCounter?: boolean;
  handleEndOfAudio?: () => void;
  handlePlay?: (value: boolean) => void;
}
/**
 * Components for rendering and audio reporting.
 * @param audio string -> *required, path of audio to render
 * @param playin string | undefined -> var to know which is the path of the above audio
 * @param setPlaying (value: string) -> void | undefined, modifier of the var "playing"
 * @param iconPlay boolean | undefined -> var to show icon play
 * @param borderPlay boolean | undefined -> var to show the border
 * @param showSpectro boolean | undefined -> var to show the spectro
 * @param showCounter boolean | undefined -> var to show the counter and total duration
 * @param handleEndOfAudio () => void | undefined -> function to manage the end of the audio
 * @param handlePlay (value: boolean) => void | undefined -> function to manage listening on audio startup
 */
const AudioPlayer: ForwardRefExoticComponent<Props & RefAttributes<HTMLAudioElement>> = forwardRef(
  (
    {
      checked = false,
      disabled = false,
      style,
      audio,
      playing,
      setPlaying,
      borderPlay = true,
      showSpectro = true,
      showCounter = true,
      handleEndOfAudio,
      handlePlay,
    }: Props,
    ref?: ForwardedRef<HTMLAudioElement>
  ) => {
    const [finallyPlay, setFinallyPlay] = useState<boolean>(false);
    const [showIconAudio, setShowIconAudio] = useState(true);
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [blob, setBlob] = useState<Blob | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const refAudio = useRef<HTMLAudioElement | null>(null);
    useImperativeHandle<HTMLAudioElement | null, HTMLAudioElement | null>(ref, () => refAudio.current, []);

    const formatedDuration = useCallback((duration: number | undefined) => {
      if (!duration || (duration && isNaN(duration)) || duration === 0) {
        return "00:00";
      }
      const minutesFloat = duration / 60;
      const minutes = parseInt(minutesFloat.toString(), 10);
      const secondesRest = minutesFloat - minutes;
      const secondes = parseInt((secondesRest * 60).toString(), 10);
      const minuteFinal = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const secondFinal = secondes < 10 ? `0${secondes}` : `${secondes}`;
      return `${minuteFinal}:${secondFinal}`;
    }, []);

    const handleAudioTimeUpdate = useCallback((event: SyntheticEvent<HTMLAudioElement>) => {
      const audioElement = event.currentTarget;
      setCurrentTime(audioElement.currentTime);
    }, []);

    const handleOnClick = (event: MouseEvent<HTMLCanvasElement>) => {
      if (refAudio.current) {
        const audioElement = refAudio.current;
        const rect = event.currentTarget.getBoundingClientRect();
        const offSetX = event.clientX - rect.left;
        const totalWith = rect.width;
        const clickFraction = offSetX / totalWith;
        const newTime = clickFraction * audioElement.duration;
        audioElement.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleControlAudio = () => {
      setIsPlay((state) => (refAudio.current?.duration && refAudio.current?.duration > 0 ? !state : state));
      setPlaying && setPlaying(audio);
      setShowIconAudio(false);
    };

    const handleSetBlob = (state: Blob) => setBlob(state);

    const getBlob = useCallback(async (url: string) => {
      try {
        if (showSpectro) {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error al cargar el archivo. Código de estado: ${response.status}`);
          }
          const arrayBuffer = await response.arrayBuffer();
          const blob = new Blob([arrayBuffer]);
          handleSetBlob(blob);
        }
      } catch (error) {
        console.log({ error });
      }
    }, []);

    useEffect(() => {
      if (audio) {
        getBlob(audio);
        setIsPlay(false);
      }
    }, [getBlob, audio]);

    useEffect(() => {
      const event = refAudio.current;
      if (event) {
        if (typeof handlePlay === "function") {
          handlePlay(isPlay ? true : false);
        }
        isPlay ? event.play() : event.pause();
      }
    }, [isPlay]);

    useEffect(() => {
      const event = refAudio?.current;
      if (event?.currentTime === event?.duration) {
        setFinallyPlay(true);
        setIsPlay(false);
        setShowIconAudio(true);
        if (typeof handleEndOfAudio === "function") {
          handleEndOfAudio();
        }
      }
    }, [refAudio.current?.currentTime, refAudio.current?.duration]);

    useEffect(() => {
      if (playing !== audio) {
        setIsPlay(false);
        if (refAudio?.current?.currentTime) {
          refAudio.current.currentTime = 0;
        }
      }
    }, [playing]);

    return (
      <div
        style={{...style, display:"flex", alignItems:"center",
         gap:`${showSpectro ? "1.25rem" : 0}`, cursor: disabled ? "initial" : "pointer"}}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <button
            disabled={disabled}
            style={{
              color: borderPlay ? "var(--colorPurple)" : "transparent",
              backgroundColor: "transparent",
              height: "4rem",
              width: "5rem",
              borderRadius: "40px",
              border: borderPlay ? (finallyPlay || checked ? "1px solid #5EEA0F" : "1px solid #ADA4B7") : "none",
            }}
            onClick={() => handleControlAudio()}
          >
            {showIconAudio ? (
              <IconAudio color={finallyPlay || checked ? "#5EEA0F" : "#9B0FEA"} />
            ) : isPlay ? (
              <IconPause color="#9B0FEA" />
            ) : (
              <IconPlay color="#ADA4B7" />
            )}
          </button>
        </div>
        <div>
          <audio ref={refAudio} src={audio} id="audio-element" onTimeUpdate={handleAudioTimeUpdate}></audio>
          <div style={{display:"flex", gap:"0 1.25rem"}}>
            {showSpectro && blob && (
              <AudioVisualizer
                blob={blob}
                width={300}
                height={50}
                barWidth={4}
                gap={4}
                barColor={"#ADA4B7"}
                currentTime={currentTime}
                barPlayedColor="#9B0FEA"
                handleOnClick={handleOnClick}
                style={{ cursor: "pointer" }}
              />
            )}
            {showCounter && (
              <p
                style={{
                  width: "6rem",
                  color: "var(--iconos-neutros, #6B6F75)",
                  fontFamily: "Mont",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                {formatedDuration(currentTime)}/{formatedDuration(refAudio.current?.duration)}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer ;
