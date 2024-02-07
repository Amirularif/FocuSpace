import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Header from '../Components/Header';
import MediaPlayer from '../Components/MediaPlayer.jsx';
import quotes from '../Data/quotes.json';
import WaterfallSound from '../Audios/waterfall.mp3';
import '../css/ManualSpacePage.css'; 

const ManualSpacePage = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [volume] = useState(0.5); 
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const sounds = [
      { title: 'Waterfall', src: WaterfallSound },
      { title: 'Birds', src: '../Audios/birds.mp3' },
      { title: 'October Rain', src: '../Audios/rain.mp3' },
      { title: 'Fire place', src: '../Audios/fire.mp3' },
      { title: 'Crickets ', src: '../Audios/crickets.mp3' },
      { title: 'Paris cafe', src: '../Audios/cafe.mp3' },
  ];

  const changeQuoteWithTransition = () => {
    setQuoteVisible(false);
    setTimeout(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
      setQuoteVisible(true);
    }, 500); 
  };
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const quoteChangeInterval = setInterval(() => {
      changeQuoteWithTransition();
    }, 30000);

    return () => clearInterval(quoteChangeInterval);
  }, []);

  const sliderStyle = () => {
    const progress = volume * 100;
    return {
      background: `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`
    };
  };

  const navigateToAutoSpace = () => {
    navigate('/auto-space-page'); 
  };

  return (
    <div className="manual-space-page">
      <Header />
      <div className="content-container">
        <div className="manual-space-media-player-container">
          <div className="media-players">
            {sounds.map((sound, index) => (
                <MediaPlayer key={index} title={sound.title} src={sound.src} />     
            ))}
          </div>
        </div>
        <div className="manual-space-time-container">
          <h1 className="manual-space-title">Manual &nbsp;Space</h1>
          <h2 className="currently">Currently it's</h2>
          <div className="time-display">
            <span className="time-segment">{currentTime.getHours().toString().padStart(2, '0')}</span>:
            <span className="time-segment">{currentTime.getMinutes().toString().padStart(2, '0')}</span>:
            <span className="time-segment" id="seconds">{currentTime.getSeconds().toString().padStart(2, '0')}</span>
          </div>
          <div className={`quote-display ${quoteVisible ? '' : 'hidden'}`}>{quotes[currentQuoteIndex]}</div>
          <div className="player-control-container">
            <div className="button-controls-container">
              <button className="play-pause-button"><FontAwesomeIcon icon={faPlay} /></button>
            </div>
            <div className="player-controls-container">
              <p className="music-title"> FocuSpace Music 🔊</p>
              <div className="player-controls">
                <input className="auto-space-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={volume * 100}
                  style={sliderStyle()}
                />
                <div className="value"></div>
              </div>
              <div className="tip">
              Tips: Adjust the sound as you like ◡̈
              </div>
            </div>
          </div>
        </div>
        <div className="manual-space-overlay-container" onClick={navigateToAutoSpace}>
            <button className="auto-switch-button">Switch to Auto Space</button>
          </div>
      </div>
    </div>   
  );
};

export default ManualSpacePage;
