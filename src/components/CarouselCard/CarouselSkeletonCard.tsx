import React from 'react';
import { CAROUSEL_WIDTH, CAROUSEL_HEIGHT } from './constants';

export const CarouselCardSkeleton = () => {
  return (
    <div
      style={{
        width: CAROUSEL_WIDTH,
        height: CAROUSEL_HEIGHT,
        backgroundColor: '#2A2A29',
      }}
    />
  );
};
