import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  testID?: string;
  redirectTo: string;
  name: string;
  isFocused?: boolean;
};

export const LinkItem = ({ testID, name, redirectTo }: Props) => {
  return (
    <Link
      data-testid={testID}
      to={redirectTo}
      style={{
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <h2 data-testid={`${testID}-title`}>{name}</h2>
    </Link>
  );
};
