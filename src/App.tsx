import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/home/screen';
import { Program } from './pages/program/program';
import { Error404 } from './pages/error404';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
