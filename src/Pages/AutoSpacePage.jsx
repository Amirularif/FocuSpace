import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import MediaPlayer from '../Components/MediaPlayer.jsx';
import '../css/AutoSpacePage.css'; 

const AutoSpacePage = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); 
  const [currentTime, setCurrentTime] = useState(new Date());
  const sounds = [
    { title: 'Waterfall', src: '../Audios/waterfall.mp3' },
    { title: 'Birds', src: '../Audios/birds.mp3' },
    { title: 'October Rain', src: '../Audios/rain.mp3' },
    { title: 'Fire place', src: '../Audios/fire.mp3' },
    { title: 'Crickets ', src: '../Audios/crickets.mp3' },
    { title: 'Paris cafe', src: '../Audios/cafe.mp3' },
  ];
  
  const navigateToManualSpace = () => {
    navigate('/manual-space-page'); 
  };
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const automusic = new Howl({
    src: ['/AutoSpaceMusic.mp3'], 
    volume: volume,
  });

  const togglePlayPause = () => {
    if (isPlaying) {
      automusic.pause();
    } else {
      automusic.play();
    }
    setIsPlaying(!isPlaying);
  };

  const adjustVolume = (e) => {
    let newVolume = parseInt(e.target.value) / 100;
    setVolume(newVolume);
    Howler.volume(newVolume);
  };

  const sliderStyle = () => {
    const progress = volume * 100;
    return {
      background: `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`
    };
  };


  return (
    <div className="auto-space-page">
      <Header />
      <div className="content-container">
        <div className="media-player-container">
          <div className="media-players">
            {sounds.map((sound, index) => (
              <MediaPlayer key={index} title={sound.title} src={sound.src} />     
            ))}
          </div>
        </div>
        <div className="overlay-container" onClick={navigateToManualSpace}>
          <button className="manual-switch-button">Switch to Manual Space</button>
        </div>
        <div className="time-container">
          <h1 className="title">Auto &nbsp; Space</h1>
          <h2 className="currently">Currently it's</h2>
          <div className="time-display">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="quote-display">Quote : Rome wasn’t built in a day</div>
          <div className="player-control-container">
            <div className="button-controls-container">
              <button className="play-pause-button" onClick={togglePlayPause}>
                {isPlaying ? (
                  <FontAwesomeIcon icon={faPause} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} />
                )}
              </button>
            </div>
            <div className="player-controls-container">
              <p className="music-title"> FocuSpace Music 🔊</p>
              <div className="player-controls">
                <input className="auto-space-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={volume * 100}
                  onChange={adjustVolume}
                  style={sliderStyle()}
                />
                <div className="value">{Math.round(volume * 100)}</div>
              </div>
              <div className="tip">
              Tips: Adjust the sound as you like ◡̈
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSpacePage;