import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renser aboutPage', () => {
    render(<AboutPage />);
    const header = screen.getByRole('heading', { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('About us');
  });
});
