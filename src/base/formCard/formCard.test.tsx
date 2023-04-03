import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';
import IFormCard from 'infostructure/IFormCard';

describe('FormCard', () => {
  const card: IFormCard = {
    name: 'Boris',
    date: '1999.10.10',
    country: 'Russia',
    gender: 'male',
    img: 'https://path-to-img',
  };
  it('render formCard', () => {
    render(<FormCard card={card} />);
    expect(screen.getByText(/Boris/)).toBeInTheDocument();
    expect(screen.getByText(/Boris/)).toHaveClass('form__card-name');
  });
});
