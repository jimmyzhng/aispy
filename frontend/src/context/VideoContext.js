import React, { useState, useContext, useEffect } from "react";

const VideoContext = React.createContext();

export function useVideo() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const [detections, setDetections] = useState([]);
  const [soundDetections, setSoundDetections] = useState(false);
  const [muted, setMuted] = useState(false);

  // console.log('detections', detections);

  return (
    <VideoContext.Provider value={
      {
        playing, setPlaying,
        detections, setDetections,
        soundDetections, setSoundDetections,
        muted, setMuted
      }}>
      {children}
    </VideoContext.Provider>
  );
}

