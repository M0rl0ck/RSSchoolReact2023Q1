import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const card1 = {
    id: 10,
    title: 'My best card',
    price: 100,
    description: 'This is the best card!',
    category: 'test card',
    image: 'https://path-to-img',
    discountPercentage: 20,
    rating: {
      rate: 4.4,
      count: 120,
    },
  };
  const card2 = {
    id: 10,
    title: 'My best card',
    price: 100,
    description: 'This is the best card!',
    category: 'test card',
    image: 'https://path-to-img',
    discountPercentage: 20,
    rating: {
      rate: 3.4,
      count: 100,
    },
  };
  it('Render card', () => {
    render(<Card card={card1} />);
    expect(screen.getByText('My best card')).toBeInTheDocument();
    expect(screen.getByText('My best card')).toHaveClass('card-title');
    expect(screen.getByText(/test card/i)).toBeInTheDocument();
    expect(screen.getByText(/test card/i)).toHaveClass('card-category');
    expect(screen.getByText(/Rate:/i)).toHaveClass('card-rate_red');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://path-to-img');
  });
  it('class should change from rating', () => {
    render(<Card card={card2} />);
    expect(screen.getByText(/Rate:/i)).toHaveClass('card-rate_green');
  });
});
