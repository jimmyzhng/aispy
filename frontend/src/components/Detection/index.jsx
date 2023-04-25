import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import Spinner from "react-bootstrap/Spinner";
import { runCoco } from "../../helpers/detectionHelpers";

import "./index.scss";
import { useVideo } from "../../context/VideoContext";

export default function Detection({ view }) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const videoPlayer = videoRef.current
    ? videoRef.current.getInternalPlayer
      ? videoRef.current.getInternalPlayer()
      : videoRef.current
    : null;

  // Sound
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const soundData = useRef(new Uint8Array(2048));

  const { setPlaying, playing, setDetections, setSoundDetections, muted } =
    useVideo();

  useEffect(() => {
    if (videoPlayer) {
      runCoco(videoRef, videoPlayer, canvasRef, setDetections);

      // Create AudioContext
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      // Create analyser node (expresses audio time & frequency data)
      const analyser = new AnalyserNode(audioContext, { fftSize: 2048 });
      analyserRef.current = analyser;

      // Connect analyser to audio source
      const source = audioContext.createMediaElementSource(videoPlayer);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      // Set loop to check for sound
      const soundCheckLoop = () => {
        requestAnimationFrame(soundCheckLoop);
        analyser.getByteFrequencyData(soundData.current);
        const soundPlaying = soundData.current.some((val) => val > 0);

        setSoundDetections(soundPlaying);
      };
      soundCheckLoop();

      return () => {
        audioContext.close();
      };
    }
  }, [playing]);

  return (
    <div className="detection-cont">
      {!playing && <Spinner />}

      <ReactPlayer
        ref={videoRef}
        url={`${process.env.PUBLIC_URL}/view/${view}.mp4`}
        loop
        playing
        muted={muted}
        className="video"
        onReady={() => setPlaying(true)}
      />
      <canvas ref={canvasRef} className="detection" />
    </div>
  );
}
