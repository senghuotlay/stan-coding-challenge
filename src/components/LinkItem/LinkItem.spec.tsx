import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinkItem } from './LinkItem';

describe('LinkItem', () => {
  it('renders the link with the correct href', () => {
    render(
      <Router>
        <LinkItem testID="home-link" name="Home" redirectTo="/home" />
      </Router>,
    );

    const linkElement = screen.getByTestId('home-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');
  });

  it('should render the correct name', () => {
    render(
      <Router>
        <LinkItem testID="home-link" name="Home" redirectTo="/home" />
      </Router>,
    );

    const linkElement = screen.getByTestId('home-link-title');
    expect(linkElement).toHaveTextContent('Home');
  });
});
