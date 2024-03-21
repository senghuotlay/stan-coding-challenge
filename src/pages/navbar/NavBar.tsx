import React from 'react';
import { Link } from 'react-router-dom';
import { HomePath, HomeRouteName } from '../home';
import { LinkItem } from '../../components/LinkItem';
import { TVShowsPath, TVShowsRouteName } from '../tvShows';
import { MoviesPath, MoviesRouteName } from '../movies';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to={HomePath}>
          <img
            src={require('../../../assets/icons/logo.png')}
            alt="logo"
            width={150}
          />
        </Link>
      </div>

      <div className="link-container">
        <LinkItem redirectTo={HomePath} name={HomeRouteName} />
        <LinkItem redirectTo={TVShowsPath} name={TVShowsRouteName} />
        <LinkItem redirectTo={MoviesPath} name={MoviesRouteName} />
      </div>
    </div>
  );
};
