import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCreateMessage from './FormCreateMessage';

describe('create message', () => {
  it('render message', () => {
    render(<FormCreateMessage callback={() => {}} />);
    expect(screen.getByText('The card has been created')).toBeInTheDocument();
    expect(screen.getByText('The card has been created')).toHaveClass('form-message');
  });
});
