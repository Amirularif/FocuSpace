import React from 'react';
import '../css/Header.css'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>FocuSpace</h1>
      <button>Donation</button>
    </header>
  );
};

export default Header;
