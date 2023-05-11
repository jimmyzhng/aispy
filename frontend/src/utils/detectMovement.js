import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { drawRect } from "../utils/tensorFlow.js";


export const runCoco = async (videoRef, videoPlayer, canvasRef, setDetections) => {
  const net = await cocoSsd.load();

  const detect = async (net, videoRef, videoPlayer, canvasRef, setDetections) => {
    // Check data is available
    if (
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


  // Loop at rate of 50ms
  setInterval(() => {
    detect(net, videoRef, videoPlayer, canvasRef, setDetections);
  }, 50);
};


