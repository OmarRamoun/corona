import React from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Home from './components/Home';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:country" element={<Details />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
