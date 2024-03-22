import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

const HEIGHT = 100;
const WIDTH = 100;

describe('Skeleton', () => {
  it('renders correctly', () => {
    const testID = 'test-carousel-card-skeleton';

    render(
      <Skeleton
        testID={testID}
        width={HEIGHT}
        height={WIDTH}
        isLoading={true}
      />,
    );

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

  it('should not render when loading is false', () => {
    const testID = 'test-carousel-card-skeleton';

    render(
      <Skeleton
        testID={testID}
        width={HEIGHT}
        height={WIDTH}
        isLoading={false}
      />,
    );

    const skeletonElement = screen.queryByTestId(testID);
    expect(skeletonElement).not.toBeInTheDocument();
  });

  it('should render children when loading is false', () => {
    const testID = 'test-carousel-card-skeleton';
    const testIDChild = 'test-child';

    render(
      <Skeleton testID={testID} width={HEIGHT} height={WIDTH} isLoading={false}>
        <div data-testid={testIDChild} />
      </Skeleton>,
    );

    const skeletonElement = screen.queryByTestId(testID);
    expect(skeletonElement).not.toBeInTheDocument();

    const childElement = screen.getByTestId(testIDChild);
    expect(childElement).toBeInTheDocument();
  });
});
