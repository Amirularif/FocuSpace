import React from 'react';
import '../css/ChooseSpace.css';
import { useNavigate } from 'react-router-dom';

const ChooseSpace = () => {
  const navigate = useNavigate();

  const handleAutoSpaceClick = () => {
    navigate('/auto-space-settings'); 
  };

  const handleManualSpaceClick = () => {
    navigate('/manual-space-settings');
  };

  return (
    <div className="choose-space">
      <h1>FocusSpace</h1>
      <p>let our AI create the perfect space for you</p>
      <button className="button" onClick={handleAutoSpaceClick}>Auto Space</button>
      <p>or</p>
      <button className="button" onClick={handleManualSpaceClick}>Manual Space</button>
      <button className="button-secondary" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ChooseSpace;
