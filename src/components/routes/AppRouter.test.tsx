import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

describe('App', () => {
  it('Render 404 page if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/bad-Path']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('Uups! This page not exist!')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go home' })).toBeInTheDocument();
  });
});
