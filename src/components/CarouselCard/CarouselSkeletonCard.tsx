import React from 'react';
import { CAROUSEL_WIDTH, CAROUSEL_HEIGHT } from './constants';
import { Skeleton } from '../Skeleton';

type Props = {
  testID?: string;
};

export const CarouselCardSkeleton = ({ testID }: Props) => {
  return (
    <Skeleton testID={testID} width={CAROUSEL_WIDTH} height={CAROUSEL_HEIGHT} />
  );
};
