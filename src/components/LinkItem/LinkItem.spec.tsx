import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinkItem } from './LinkItem';

describe('LinkItem', () => {
  it('renders the link with the correct name and href', () => {
    render(
      <Router>
        <LinkItem name="Home" redirectTo="/home" />
      </Router>,
    );

    const linkElement = screen.getByRole('link', { name: /Home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');
  });

  it('renders the link with a different name and href', () => {
    render(
      <Router>
        <LinkItem name="About" redirectTo="/about" />
      </Router>,
    );

    const linkElement = screen.getByRole('link', { name: /About/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/about');
  });
});
