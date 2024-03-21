import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  redirectTo: string;
  name: string;
  isFocused?: boolean;
};

export const LinkItem = ({ name, redirectTo }: Props) => {
  return (
    <Link
      to={redirectTo}
      style={{
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <h2>{name}</h2>
    </Link>
  );
};
