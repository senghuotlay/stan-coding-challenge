import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, HomePath } from './pages/home';
import { Program, ProgramPath } from './pages/program';
import { Error404, Error404Path } from './pages/error404';
import { NavBar } from './pages/navbar';
import { TVShows, TVShowsPath } from './pages/tvShows';
import { Movies, MoviesPath } from './pages/movies';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: 48, marginRight: 48, marginTop: 32 }}>
        <NavBar />
        <Routes>
          <Route path={HomePath} element={<Home />} />
          <Route path={ProgramPath} element={<Program />} />
          <Route path={TVShowsPath} element={<TVShows />} />
          <Route path={MoviesPath} element={<Movies />} />
          <Route path={Error404Path} element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
