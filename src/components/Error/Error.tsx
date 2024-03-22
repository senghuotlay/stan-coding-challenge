import React from 'react';

type Props = {
  testID?: string;
  errorMessage?: string;
};

export const Error = ({ testID, errorMessage }: Props) => {
  return (
    <p
      data-testid={testID}
      style={{
        color: '#606060',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}
    >
      {errorMessage || 'An unknown error occured. Please try again later.'}
    </p>
  );
};
