import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from './Carousel'; // Adjust the import path as needed
import { CarouselCardSkeleton } from '../CarouselCard';

const mockData = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
];

const mockOnFocusedPress = jest.fn();

describe('Carousel', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  const testID = 'carousel';
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Carousel
        testID={testID}
        data={mockData}
        renderItem={(item) => <div key={item.id}>{item.content}</div>}
        onFocusedEnterPress={mockOnFocusedPress}
      />,
    );

    expect(getByTestId('carousel')).toBeInTheDocument();
    expect(getByTestId('carousel')).toHaveTextContent('Item 1');
  });

  it('renders loading component', async () => {
    const { getAllByTestId } = render(
      <Carousel
        testID={testID}
        data={[]}
        renderItem={(item) => <div key={item.id}>{item.content}</div>}
        onFocusedEnterPress={mockOnFocusedPress}
        isLoading={true}
        LoadingComponent={
          <CarouselCardSkeleton
            testID={`${testID}-carousel-skeleton`}
            width={10}
            height={10}
          />
        }
      />,
    );

    const skeletons = await getAllByTestId(`${testID}-carousel-skeleton`);
    expect(skeletons.length).toBe(6);
  });

  it('renders error component', () => {
    const { getByTestId } = render(
      <Carousel
        testID={testID}
        data={[]}
        renderItem={(item) => <div key={item.id}>{item.content}</div>}
        onFocusedEnterPress={mockOnFocusedPress}
        isError={true}
        ErrorComponent={<div data-testid="error">Error</div>}
      />,
    );

    expect(getByTestId('error')).toBeInTheDocument();
  });

  it('navigates to called onFocusedEnterPress on enter press with focused item', async () => {
    const { getByTestId } = render(
      <Carousel
        testID={testID}
        data={mockData}
        renderItem={(item) => <div key={item.id}>{item.content}</div>}
        onFocusedEnterPress={mockOnFocusedPress}
      />,
    );

    fireEvent.keyDown(getByTestId(testID), { key: 'Enter' });
    await waitFor(() => expect(mockOnFocusedPress).toHaveBeenCalledTimes(1));
  });

  it('it changes focused item on right arrow press', async () => {
    const { getByTestId } = render(
      <Carousel
        testID={testID}
        data={mockData}
        renderItem={(item) => <div key={item.id}>{item.content}</div>}
        onFocusedEnterPress={mockOnFocusedPress}
      />,
    );

    fireEvent.keyDown(getByTestId(testID), { key: 'ArrowRight' });
    fireEvent.keyDown(getByTestId(testID), { key: 'Enter' });
    await waitFor(() =>
      expect(mockOnFocusedPress).toHaveBeenCalledWith(mockData[1]),
    );
  });
});
