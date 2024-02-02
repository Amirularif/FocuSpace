import React from 'react';
import '../css/MainPage.css';
import { useNavigate } from 'react-router-dom';

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
      <h1>FocuSpace</h1>
      <p className="tagline">space for you to focus</p>
      <button className="button" onClick={handleGetStartedClick}>Get Started</button>
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
};

export default MainPage;
