import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCards from './FormCards';
import IFormCard from 'infostructure/IFormCard';

const data: IFormCard[] = [
  {
    name: 'Boris',
    date: '1999.10.10',
    country: 'Russia',
    gender: 'male',
    img: 'https://path-to-img',
  },
  {
    name: 'Boris',
    date: '1999.10.10',
    country: 'Russia',
    gender: 'male',
    img: 'https://path-to-img',
  },
];

describe('FormCards', () => {
  it('renderCards', () => {
    render(<FormCards cards={data} />);
    const items = screen.getAllByRole('heading', { level: 3 });
    expect(items).toHaveLength(2);
  });
});
