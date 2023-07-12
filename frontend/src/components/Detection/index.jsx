import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import Spinner from "react-bootstrap/Spinner";
import { runCoco } from "../../utils/detectMovement";
import { detectAudio } from "../../utils/detectAudio";
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
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const soundData = useRef(new Uint8Array(2048));

  const {
    setPlaying,
    playing,
    setDetections,
    setSoundDetections,
    video,
    muted,
  } = useVideo();

  useEffect(() => {
    if (videoPlayer) {
      runCoco(videoRef, videoPlayer, canvasRef, setDetections);
      detectAudio(
        audioContextRef,
        analyserRef,
        soundData,
        setSoundDetections,
        videoPlayer
      );
    }
  }, [playing]);

  return (
    <div className="detection-cont">
      {!playing && <Spinner />}

      <ReactPlayer
        ref={videoRef}
        url={video}
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
