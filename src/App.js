import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {

  return (
    <>
    <Home />
    <Router>
      <Routes>
            <Route path="*" element={<h1>Oooops, not quite made it this far yet!</h1>} />
      </Routes>
    </Router>
    </>

  
  );
}

export default App;
