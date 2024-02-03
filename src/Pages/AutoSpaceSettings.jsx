import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AutoSpaceSettings.css'; 

const AutoSpaceSettings = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [responses, setResponses] = useState({
    workType: '',
    environment: '',
    duration: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponses({ ...responses, [name]: value });
  };

  const goToNextPrompt = () => {
    if (currentPrompt < 2) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      navigate('/auto-space-page', { state: responses });
    }
  };

  const renderPrompt = () => {
    switch (currentPrompt) {
      case 0:
        return (
          <div>
            <h1>What kind of work you want to do?</h1>
            <input
              type="text"
              name="workType"
              value={responses.workType}
              onChange={handleInputChange}
              placeholder="Enter.."
            />
            <p className="tip">Tips: Be more specific like Math's work for Linear Algebra or Designing wireframes</p>
          </div>
        );
      case 1:
        return (
          <div>
            <h1>What kind of environment you prefer?</h1>
            <input
              type="text"
              name="environment"
              value={responses.environment}
              onChange={handleInputChange}
              placeholder="Enter.."
            />
            <p className="tip">Tips: Quiet or chatting environment. Put in what you think is the best for you</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>How long you planning to do?</h1>
            <input
              type="text"
              name="duration"
              value={responses.duration}
              onChange={handleInputChange}
              placeholder="30 minutes or 1 hour.."
            />
            <p className="tip">Tips: It's about utilizing the time, 30 minutes of focus work is better than 1 hour of non focus work</p>
          </div>
        );
      default:
        return null; 
    }
  };

  return (
    <div className="auto-space-settings">
      {renderPrompt()}
      <button onClick={goToNextPrompt}>{currentPrompt < 2 ? 'Next' : 'Done'}</button>
    </div>
  );
};

export default AutoSpaceSettings;
