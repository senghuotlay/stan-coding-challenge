import { render } from '@testing-library/react';
import { ProgramOverViewProps, ProgramOverview } from './ProgramOverview';
import React from 'react';

const mockProps: ProgramOverViewProps = {
  loading: false,
  programData: {
    title: 'Title',
    description: 'Description',
    rating: 'Rating',
    year: 2021,
    genre: 'Genre',
    language: 'english',
    id: 1,
    image: 'https://example.com/image.jpg',
    type: 'movie',
  },
  goBack: jest.fn(),
};

describe('ProgramOverview', () => {
  const testID = 'program-overview';
  it('renders', () => {
    const { getByTestId } = render(
      <ProgramOverview testID={testID} {...mockProps} />,
    );
    expect(getByTestId(testID)).toBeInTheDocument();
    expect(getByTestId(`${testID}-carousel-card`)).toBeInTheDocument();
    expect(getByTestId(`${testID}-program-details`)).toBeInTheDocument();
  });

  it('renders loading', () => {
    const { getByTestId } = render(
      <ProgramOverview testID={testID} {...mockProps} loading={true} />,
    );
    expect(getByTestId(`${testID}-card-loading`)).toBeInTheDocument();
  });
});
