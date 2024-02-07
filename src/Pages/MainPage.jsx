import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/choose-space"); 
  };

  const handleSignUpClick = () => {
    // Future
  };

  return (
    <div className="main-page">
      <div className="content-container">
      <p className="welcome">WELCOME TO</p>
        <h1>FocuSpace</h1>
        <p className="tagline">A space for you to focus</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>Get Started &nbsp; →</button>
      </div>
      <button className="signup-button" onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
};

export default MainPage;
