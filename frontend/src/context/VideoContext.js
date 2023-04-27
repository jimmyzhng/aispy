import React, { useState, useContext, useEffect } from "react";

const VideoContext = React.createContext();

export function useVideo() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {
  const [currentView, setCurrentView] = useState(null);
  const [video, setVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [detections, setDetections] = useState([]);
  const [soundDetections, setSoundDetections] = useState(false);
  const [muted, setMuted] = useState(false);
  const [pastBroadcast, setPastBroadcast] = useState(false);

  return (
    <VideoContext.Provider value={
      {
        currentView, setCurrentView,
        video, setVideo,
        playing, setPlaying,
        detections, setDetections,
        soundDetections, setSoundDetections,
        muted, setMuted
      }}>
      {children}
    </VideoContext.Provider>
  );
}

