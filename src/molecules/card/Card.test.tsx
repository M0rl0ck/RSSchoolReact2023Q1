import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const card1 = {
    id: 10,
    name: 'My best card',
    status: 'Alive',
    species: 'human',
    type: '-',
    image: 'https://path-to-img',
  };
  it('Render card', () => {
    render(<Card card={card1} />);
    expect(screen.getByText('My best card')).toBeInTheDocument();
    expect(screen.getByText('My best card')).toHaveClass('card-name-character');
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toHaveClass('card-character');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://path-to-img');
  });
});
