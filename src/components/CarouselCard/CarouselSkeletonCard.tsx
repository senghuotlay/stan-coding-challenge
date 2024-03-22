import React from 'react';
import { CAROUSEL_WIDTH, CAROUSEL_HEIGHT } from './constants';

type Props = {
  testID?: string;
};

export const CarouselCardSkeleton = ({ testID }: Props) => {
  return (
    <div
      data-testid={testID}
      style={{
        width: CAROUSEL_WIDTH,
        height: CAROUSEL_HEIGHT,
        backgroundColor: '#2A2A29',
      }}
    />
  );
};
