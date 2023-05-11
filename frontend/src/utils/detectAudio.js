export const detectAudio = (audioContextRef, analyserRef, soundData, setSoundDetections, videoPlayer) => {

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
}; 