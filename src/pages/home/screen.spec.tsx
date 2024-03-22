import { render } from '@testing-library/react';
import { Home } from './screen';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as useQuery from '../../hooks/useQuery';

describe('Home', () => {
  it('renders', () => {
    jest.spyOn(useQuery, 'useQuery').mockReturnValue({
      data: [],
      loading: false,
      error: '',
    });

    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>,
    );

    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('renders loading', () => {
    jest.spyOn(useQuery, 'useQuery').mockReturnValue({
      data: undefined,
      loading: true,
      error: '',
    });

    const { getAllByTestId } = render(
      <Router>
        <Home />
      </Router>,
    );

    expect(getAllByTestId('home-loading')).toHaveLength(6);
  });

  it('renders error', () => {
    jest.spyOn(useQuery, 'useQuery').mockReturnValue({
      data: undefined,
      loading: false,
      error: 'An error occurred',
    });

    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>,
    );

    expect(getByTestId('home-error')).toBeInTheDocument();
  });
});
