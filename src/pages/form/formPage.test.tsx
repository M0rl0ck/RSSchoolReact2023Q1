import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../store/utils/test-utils';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('render formPge', () => {
    renderWithProviders(<FormPage />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
