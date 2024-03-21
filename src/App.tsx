import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, HomePath } from './pages/home';
import { Program, ProgramPath } from './pages/program';
import { Error404, Error404Path } from './pages/error404';
import { NavBar } from './pages/navbar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={HomePath} element={<Home />} />
        <Route path={ProgramPath} element={<Program />} />
        <Route path={Error404Path} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
