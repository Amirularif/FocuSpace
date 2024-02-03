import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import MediaPlayer from '../Components/MediaPlayer.jsx';
import '../css/ManualSpacePage.css'; 

const ManualSpacePage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const sounds = [
        { title: 'Waterfall', src: '/sounds/waterfall.mp3' },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 60000);
    
        return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="App">
      <Header />
      <div className="manual-space-page">
        <div className="content">
            <div className="media-players">
            {sounds.map((sound, index) => (
                <MediaPlayer key={index} title={sound.title} src={sound.src} />
            ))}
            </div>
            <div className="info-container">
                <div className="current-time">
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            <div className="quote-display">Nothing is impossible</div>
            <div className="switch-container">
                <div className="switch-text">Go auto instead?</div>
                <button className="switch-button">Switch to Auto Space</button>
            </div>
            </div>
        </div>
        </div>
      </div>  
  );
};

export default ManualSpacePage;
