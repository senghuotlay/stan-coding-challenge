import React from 'react';
import { Link } from 'react-router-dom';
import { HomePath } from '../home';
import { ProgramPath } from '../program';

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={HomePath}>Home</Link>
          </li>
          <li>
            <Link to={ProgramPath}>Program</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
