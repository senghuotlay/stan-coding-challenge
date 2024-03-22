import { render } from '@testing-library/react';
import { Program } from './screen';
import React from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import * as useQuery from '../../hooks/useQuery';
import { ProgramType } from '../../types/Program';

const mockData: ProgramType = {
  title: 'Title',
  description: 'Description',
  rating: 'Rating',
  year: 2021,
  genre: 'Genre',
  id: 1,
  image: 'https://example.com/image.jpg',
  language: 'english',
  type: 'movie',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Program', () => {
  it('renders', () => {
    jest.spyOn(useQuery, 'useQuery').mockReturnValue({
      data: [mockData],
      loading: false,
      error: '',
    });

    (useParams as any).mockReturnValue({ id: mockData.id });

    const { getByTestId } = render(
      <Router>
        <Program />
      </Router>,
    );

    expect(getByTestId('program-overview')).toBeInTheDocument();
  });

  it('renders loading', () => {
    (useParams as any).mockReturnValue({ id: mockData.id });

    jest.spyOn(useQuery, 'useQuery').mockReturnValue({
      data: undefined,
      loading: true,
      error: undefined,
    });

    const { getByTestId } = render(
      <Router>
        <Program />
      </Router>,
    );

    expect(getByTestId('program-overview-card-loading')).toBeInTheDocument();
  });

  it('renders error', () => {
    jest.spyOn(useQuery, 'useQuery').mockReturnValue({
      data: undefined,
      loading: false,
      error: 'An error occurred',
    });

    const { getByTestId } = render(
      <Router>
        <Program />
      </Router>,
    );

    expect(getByTestId('program-overview-error')).toBeInTheDocument();
  });
});
