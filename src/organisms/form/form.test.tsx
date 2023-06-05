import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { renderWithProviders } from '../../store/utils/test-utils';

describe('Form', () => {
  it('render form', () => {
    renderWithProviders(<Form />);
    expect(screen.getByRole('form', { name: '' })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('shout set error', async () => {
    renderWithProviders(<Form />);
    expect(screen.queryByText(/Name must be at least 3 characters/)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/First name or last name must start with a capital letter/)
    ).not.toBeInTheDocument();
    const submitButtom = screen.getByRole('button', { name: 'Submit' });
    const name = screen.getByRole('textbox');
    expect(submitButtom).toBeInTheDocument();
    await userEvent.click(submitButtom);
    expect(screen.getByText(/Name must be at least 3 characters/)).toBeInTheDocument();
    expect(
      screen.queryByText(/First name or last name must start with a capital letter/)
    ).not.toBeInTheDocument();
    await userEvent.type(name, 'sergey');
    await userEvent.click(submitButtom);
    expect(screen.queryByText(/Name must be at least 3 characters/)).not.toBeInTheDocument();
    expect(
      screen.getByText(/First name or last name must start with a capital letter/)
    ).toBeInTheDocument();
  });
});
