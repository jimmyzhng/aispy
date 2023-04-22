import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef } from "react";
import { drawRect } from "../../utils/tensorflow/utils";
import ReactPlayer from "react-player";

import "./index.scss";

export default function Detection({ view }) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const runCoco = async () => {
    const net = await cocoSsd.load();

    // Loop at rate of 10ms
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof videoRef.current !== "undefined" &&
      videoRef.current !== null &&
      videoRef.current.getInternalPlayer().videoWidth > 0 &&
      videoRef.current.getInternalPlayer().videoHeight > 0
    ) {
      // Get Video Properties
      const video = videoRef.current.getInternalPlayer();
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
      console.log(obj);

      const ctx = canvasRef.current.getContext("2d");

      drawRect(obj, ctx);
    } else {
      console.log("Not working");
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="detection-cont">
      <ReactPlayer
        ref={videoRef}
        url={`${process.env.PUBLIC_URL}/view/${view}.mp4`}
        muted
        playing
        loop
        className="video"
      />
      <canvas ref={canvasRef} className="detection" />
    </div>
  );
}
