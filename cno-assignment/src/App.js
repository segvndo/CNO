import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Principle4 from './components/Principle4';
import Summary from './components/Summary';
import UnlockReflection from './components/UnlockReflection';
import Infographic from './components/Infographic';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unlock-reflection" element={<UnlockReflection />} />
        <Route path="/principle4" element={<Principle4 />} />
        <Route path="/infographic" element={<Infographic />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
  );
}

export default App;
