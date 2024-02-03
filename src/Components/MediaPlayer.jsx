import React, { useState, useRef } from 'react';
import { Howl } from 'howler';
import '../css/MediaPlayer.css'; 

const MediaPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const soundRef = useRef(null);

  const handlePlayPause = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (soundRef.current) {
      soundRef.current.volume(newVolume);
    }
  };

  if (!soundRef.current) {
    soundRef.current = new Howl({
      src: [src],
      volume: volume,
    });
  }

  return (
    <div className="media-player">
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      <span>{title}</span>
    </div>
  );
};

export default MediaPlayer;
