import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Principle4 from './components/Principle4';
import Summary from './components/Summary';
import UnlockReflection from './components/UnlockReflection';
import Infographic from './components/Infographic';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Update tab title based on the current route
    switch (location.pathname) {
      case '/':
        document.title = "CNO Reflection - Principle 4.1";
        break;
      case '/unlock-reflection':
        document.title = "Unlock Reflection";
        break;
      case '/principle4':
        document.title = "Principle 4.1 - Reflection";
        break;
      case '/infographic':
        document.title = "Infograph";
        break;
      case '/summary':
        document.title = "Summary of Reflection";
        break;
      default:
        document.title = "CNO Reflection App";
    }
  }, [location]);

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
