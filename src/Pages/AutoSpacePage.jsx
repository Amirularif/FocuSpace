import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import Header from '../Components/Header';
import '../css/AutoSpacePage.css'; 

const AutoSpacePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); 
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Setup the sound
  const sound = new Howl({
    src: ['/AutoSpaceMusic.mp3'], 
    volume: volume,
  });

  // Play or pause the sound
  const togglePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Adjust the volume
  const adjustVolume = (e) => {
    let newVolume = parseInt(e.target.value) / 100;
    setVolume(newVolume);
    Howler.volume(newVolume);
  };

  return (
    <div className="auto-space-page">
      <Header />
      <div className="content-container">
        <div className="media-player-container">
          
        </div>
        <div className="time-container">
          <h1 className="title">Auto &nbsp; Space</h1>
          <h2 className="currently">Currently it's</h2>
          <div className="time-display">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="quote-display">Quote : Rome wasn’t built in a day</div>
          <div className="player-controls">
            <button onClick={togglePlayPause}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={adjustVolume}
            />
          </div>
          <div className="volume-tip">
            Tips: Adjust the sound as you like
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSpacePage;