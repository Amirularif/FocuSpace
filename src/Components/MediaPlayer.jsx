import React, { useState, useRef } from 'react';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import '../css/MediaPlayer.css'; 

const MediaPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
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
    <div className="sound-player-container">
      <div className="button-controls-container">
        <button className="sound-play-pause-button" onClick={handlePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      </div>
      <div className="sound-control-container">
        <p className="sound-title"> {title} 🔊</p>
        <div className="sound-player-controls">
        <input className="sound-player-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
