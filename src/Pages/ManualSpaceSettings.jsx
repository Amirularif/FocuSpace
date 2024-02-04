import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ManualSpaceSettings.css';

const ManualSpaceSettings = () => {
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = () => {
    navigate('/manual-space-page', { state: { duration } });
  };

  return (
    <div className="manual-space-settings">
      <div className="content-container">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1>FocuSpace</h1>
        <h2>How long you planning to do?</h2>
        <input
          type="text"
          value={duration}
          onChange={handleDurationChange}
          placeholder="30 minutes or 1 hour.."
        />
        <p className="tip">Tips: It's about utilizing the time, 30 minutes of focus work is better than 1 hour of non focus work</p>
        <button onClick={handleSubmit}>Done &nbsp; →</button>
      </div>
    </div>
  );
};

export default ManualSpaceSettings;
