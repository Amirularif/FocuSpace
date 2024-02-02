import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ChooseSpace from './Pages/ChooseSpace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/choose-space" element={<ChooseSpace />} />
      </Routes>
    </Router>
  );
}

export default App;
