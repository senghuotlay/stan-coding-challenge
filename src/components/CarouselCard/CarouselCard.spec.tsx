import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarouselCard } from './CarouselCard';
import { CAROUSEL_HEIGHT, CAROUSEL_WIDTH } from './constants';

describe('CarouselCard', () => {
  it('renders correctly', () => {
    const testID = 'test-carousel-card';
    const imageUrl = 'https://example.com/image.jpg';
    const title = 'Test Image';

    render(<CarouselCard testID={testID} imageUrl={imageUrl} title={title} />);

    const imgElement = screen.getByTestId(testID);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', imageUrl);
    expect(imgElement).toHaveAttribute('alt', title);
    expect(getComputedStyle(imgElement).width).toBe(`${CAROUSEL_WIDTH}px`);
    expect(getComputedStyle(imgElement).height).toBe(`${CAROUSEL_HEIGHT}px`);
  });
});
