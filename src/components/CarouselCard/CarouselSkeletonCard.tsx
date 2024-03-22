import React from 'react';
import { CAROUSEL_WIDTH, CAROUSEL_HEIGHT } from './constants';
import { Skeleton, SkeletonProps } from '../Skeleton';

type Props = Partial<SkeletonProps> & {
  testID?: string;
};

export const CarouselCardSkeleton = ({ testID, ...props }: Props) => {
  return (
    <Skeleton
      testID={testID}
      {...props}
      width={CAROUSEL_WIDTH}
      height={CAROUSEL_HEIGHT}
    />
  );
};
