import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef } from "react";
import { drawRect } from "../../utils/tensorflow/utils";
import ReactPlayer from "react-player";

export default function Detection() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const runCoco = async () => {
    const net = await cocoSsd.load();
    console.log("hello");

    // Loop at rate of 10ms
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (typeof videoRef.current !== "undefined" && videoRef.current !== null) {
      // Get Video Properties
      const video = videoRef.current.getInternalPlayer();
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // // Set video width
      // videoRef.current.video.width = videoWidth;
      // videoRef.current.video.height = videoHeight;

      // Set canvas height and width
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
    <div>
      <ReactPlayer
        ref={videoRef}
        url="testvideo.mp4"
        playing
        muted
        loop
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 5,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 640,
          height: 360,
        }}
      />
    </div>
  );
}
