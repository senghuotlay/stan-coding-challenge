import React from 'react';
import { CAROUSEL_HEIGHT, CAROUSEL_WIDTH } from './constants';

export type CarouselCardProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src'
> & {
  testID?: string;
  imageUrl: string;
  title: string;
  isLoading?: boolean;
};

export const CarouselCard = ({
  testID,
  imageUrl,
  title,
  ...props
}: CarouselCardProps) => {
  return (
    <img
      data-testid={testID}
      src={imageUrl}
      alt={title}
      {...props}
      style={{
        width: CAROUSEL_WIDTH,
        height: CAROUSEL_HEIGHT,
        ...props.style,
      }}
    />
  );
};
