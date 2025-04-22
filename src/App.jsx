import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file
import Home from './components/Home/Home.jsx';
import Game from './components/Game/Game.jsx'; // or 
// wherever your Game component is

const App = () => {
  return (
    <div className='container'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </div>
  );
};

export default App;
