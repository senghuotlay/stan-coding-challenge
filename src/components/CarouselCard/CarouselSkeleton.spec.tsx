import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarouselCardSkeleton } from './CarouselSkeletonCard';
import { CAROUSEL_HEIGHT, CAROUSEL_WIDTH } from './constants';

describe('CarouselCardSkeleton', () => {
  it('renders correctly', () => {
    const testID = 'test-carousel-card-skeleton';

    render(<CarouselCardSkeleton testID={testID} />);

    const skeletonElement = screen.getByTestId(testID);
    expect(skeletonElement).toBeInTheDocument();
    expect(getComputedStyle(skeletonElement)).toHaveProperty(
      'width',
      `${CAROUSEL_WIDTH}px`,
    );
    expect(getComputedStyle(skeletonElement)).toHaveProperty(
      'height',
      `${CAROUSEL_HEIGHT}px`,
    );
  });
});
