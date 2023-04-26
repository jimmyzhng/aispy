import React, { useState, useContext, useEffect } from "react";

const VideoContext = React.createContext();

export function useVideo() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {
  const [currentView, setCurrentView] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [detections, setDetections] = useState([]);
  const [soundDetections, setSoundDetections] = useState(false);
  const [muted, setMuted] = useState(false);


  return (
    <VideoContext.Provider value={
      {
        currentView, setCurrentView,
        playing, setPlaying,
        detections, setDetections,
        soundDetections, setSoundDetections,
        muted, setMuted
      }}>
      {children}
    </VideoContext.Provider>
  );
}

