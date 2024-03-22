import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

const HEIGHT = 100;
const WIDTH = 100;

describe('Skeleton', () => {
  it('renders correctly', () => {
    const testID = 'test-carousel-card-skeleton';

    render(<Skeleton testID={testID} width={HEIGHT} height={WIDTH} />);

    const skeletonElement = screen.getByTestId(testID);
    expect(skeletonElement).toBeInTheDocument();
    expect(getComputedStyle(skeletonElement)).toHaveProperty(
      'width',
      `${WIDTH}px`,
    );
    expect(getComputedStyle(skeletonElement)).toHaveProperty(
      'height',
      `${HEIGHT}px`,
    );
  });
});
