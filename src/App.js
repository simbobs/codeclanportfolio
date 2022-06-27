import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ProjectContainer from './containers/ProjectContainer';
import Error from './components/Error';
import './App.css';

function App() {

  return (
    <>
    
    <Router>
      <Routes>
            <Route path="/codeclanportfolio" element={<Home />} />
            <Route path="/projects" element={<ProjectContainer/>} />
            <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </>

  
  );
}

export default App;
