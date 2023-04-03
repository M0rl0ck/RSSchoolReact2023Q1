import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('render formPge', () => {
    render(<FormPage />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
