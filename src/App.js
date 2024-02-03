import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ChooseSpace from './Pages/ChooseSpace';
import AutoSpaceSettings from './Pages/AutoSpaceSettings';
import ManualSpaceSettings from './Pages/ManualSpaceSettings';
import AutoSpacePage from './Pages/AutoSpacePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/choose-space" element={<ChooseSpace />} />
        <Route path="/auto-space-settings" element={<AutoSpaceSettings />} />
        <Route path="/manual-space-settings" element={<ManualSpaceSettings />} />
        <Route path="/auto-space-page" element={<AutoSpacePage />} />
      </Routes>
    </Router>
  );
}

export default App;
