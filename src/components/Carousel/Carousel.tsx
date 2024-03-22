import React, { useEffect, useMemo, useRef, useState } from 'react';

type CarouselProps<T> = {
  testID?: string;
  data: T[];
  limit?: number;
  isLoading?: boolean;
  LoadingComponent?: React.ReactNode;
  isError?: boolean;
  ErrorComponent?: React.ReactNode;
  renderItem: (item: T, index: number) => React.ReactNode;
  onFocusedPress: (item: T) => void;
};

const MAXIMUM_ITEMS_TO_DISPLAY = 6;

export const Carousel = <T,>({
  testID,
  data,
  limit,
  isLoading,
  LoadingComponent,
  isError,
  ErrorComponent,
  renderItem,
  onFocusedPress,
}: CarouselProps<T>) => {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const slicedData = useMemo(
    () => data?.slice(0, limit || MAXIMUM_ITEMS_TO_DISPLAY) || [],
    [data],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, data.length]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && focusedIndex < slicedData.length - 1) {
      const index = focusedIndex + 1;

      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
      });
      setFocusedIndex(index);
      return;
    }

    if (e.key === 'ArrowLeft' && focusedIndex > 0) {
      const index = focusedIndex - 1;
      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
      });
      setFocusedIndex(index);
      return;
    }

    if (e.key === 'Enter') {
      console.log('focusedIndex', focusedIndex);
      const item = slicedData[focusedIndex];
      onFocusedPress(item);
    }
  };

  if (isError) {
    return (
      <div data-testID={`${testID}-error-component`}>{ErrorComponent}</div>
    );
  }

  return (
    <div
      data-testid={testID}
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        gap: 4,
      }}
    >
      {isLoading
        ? Array.from({ length: MAXIMUM_ITEMS_TO_DISPLAY }).map((_, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 4,
                borderRadius: 4,
              }}
            >
              {LoadingComponent}
            </div>
          ))
        : slicedData.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              ref={(element) => (itemRefs.current[index] = element)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 4,
                border: focusedIndex === index ? '3px solid #099afc' : 'none',
                borderRadius: 4,
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
    </div>
  );
};
