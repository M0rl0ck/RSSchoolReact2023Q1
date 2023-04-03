import React from 'react';
import { render, screen } from '@testing-library/react';
import connector from '../../utils/connector/Connector';
import Cards from './Cards';
import { vi } from 'vitest';
import ICard from 'infostructure/ICard';

const data: ICard[] = [
  {
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
  },
  {
    id: 11,
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
  },
];
const data2: ICard[] = [
  {
    id: 12,
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
  },
  {
    id: 13,
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
  },
];

describe('Cards', async () => {
  it('should be render 2 card', async () => {
    connector.getProducts = vi.fn().mockImplementation(async () => Promise.resolve(data));
    render(<Cards />);
    const items = await screen.findAllByRole('heading', { level: 3 });
    expect(items.filter((item) => item.className === 'card-title')).toHaveLength(2);
  });

  it('should be render 4 card', async () => {
    connector.getProducts = vi
      .fn()
      .mockImplementation(async () => Promise.resolve([...data, ...data2]));
    render(<Cards />);
    const items = await screen.findAllByRole('heading', { level: 3 });
    expect(items.filter((item) => item.className === 'card-title')).toHaveLength(4);
  });
});