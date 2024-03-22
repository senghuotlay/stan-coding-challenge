import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['width'];
  testID?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  lines?: number;
};

export const Skeleton = ({
  testID,
  width,
  height,
  isLoading,
  children,
  ...props
}: Props) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div
      data-testid={testID}
      {...props}
      style={{
        backgroundColor: '#2A2A29',
        ...props.style,
        width: width,
        height: height,
      }}
    />
  );
};
