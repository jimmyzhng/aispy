import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef } from "react";
import { drawRect } from "../../utils/tensorflow/utils";
import ReactPlayer from "react-player";
import Spinner from "react-bootstrap/Spinner";

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

  const { setPlaying, playing, setDetections, setSoundDetections } = useVideo();

  const runCoco = async () => {
    const net = await cocoSsd.load();

    // Loop at rate of 100ms
    setInterval(() => {
      detect(net);
    }, 50);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof videoRef.current !== "undefined" &&
      videoRef.current !== null &&
      videoPlayer.videoWidth > 0 &&
      videoPlayer.videoHeight > 0
    ) {
      // Get Video Properties
      const video = videoPlayer;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
      // console.log('obj', obj);
      setDetections(obj);

      const ctx = canvasRef.current.getContext("2d");

      drawRect(obj, ctx);
    } else {
      console.log("Not working");
    }
  };

  useEffect(() => {
    runCoco();

    if (videoPlayer) {
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
        className="video"
        onReady={() => setPlaying(true)}
      />
      <canvas ref={canvasRef} className="detection" />
    </div>
  );
}
