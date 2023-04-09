import React from 'react';
import { render, screen } from '@testing-library/react';
import connector from '../../utils/connector/Connector';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import MainPage from './MainPage';
import ICharacterCard from '../../infostructure/ICharacterCard';

describe('mainPage', () => {
  const cards: ICharacterCard[] = [
    {
      id: 10,
      name: 'My best card',
      status: 'Alive',
      species: 'human',
      type: '-',
      image: 'https://path-to-img',
    },
    {
      id: 11,
      name: 'My very best card',
      status: 'Alive',
      species: 'human',
      type: '-',
      image: 'https://path-to-img',
    },
    {
      id: 12,
      name: 'My super best card',
      status: 'Alive',
      species: 'human',
      type: '-',
      image: 'https://path-to-img',
    },
  ];
  it('render main page', async () => {
    connector.getProducts = vi.fn().mockImplementation(async () => Promise.resolve(cards));
    render(<MainPage />);
    expect(await screen.findByText(/My best card/)).toBeInTheDocument();
    expect(await screen.findByText(/My very best card/)).toBeInTheDocument();
    expect(await screen.findByText(/My super best card/)).toBeInTheDocument();
    expect(
      (await screen.findAllByRole('heading', { level: 2 })).filter(
        (el) => el.className === 'card-name-character'
      )
    ).toHaveLength(3);
  });
});
