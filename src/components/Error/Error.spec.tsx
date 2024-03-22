import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error component', () => {
  it('renders with default error message', () => {
    render(<Error testID="error" />);
    expect(screen.getByTestId('error')).toHaveTextContent(
      'An unknown error occured. Please try again later.',
    );
  });

  it('renders with custom error message', () => {
    const customMessage = 'Custom error message';
    render(<Error testID="error" errorMessage={customMessage} />);
    expect(screen.getByTestId('error')).toHaveTextContent(customMessage);
  });
});
