import React from 'react';
import { render, screen } from '@testing-library/react';
import connector from '../../utils/connector/Connector';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ICharacterCard from '../../infostructure/ICharacterCard';
import ICharacterModalCard from '../../infostructure/ICharacterModalCard';
import Card from './Card';

describe('Card', () => {
  const card1: ICharacterCard = {
    id: 10,
    name: 'My best card',
    status: 'Alive',
    species: 'human',
    type: '-',
    image: 'https://path-to-img',
  };
  const cardModal: ICharacterModalCard = {
    id: 10,
    name: 'My best card',
    status: 'Alive',
    species: 'human',
    type: '-',
    image: 'https://path-to-img',
    gender: 'test-find-gender',
    episode: [],
    origin: { name: 'Earth', url: 'http.Earth.com' },
    created: '11111',
    url: 'https.card.com',
  };
  it('Render card', () => {
    render(<Card card={card1} />);
    expect(screen.getByText('My best card')).toBeInTheDocument();
    expect(screen.getByText('My best card')).toHaveClass('card-name-character');
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toHaveClass('card-character');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://path-to-img');
  });
  it('open modal', async () => {
    connector.getProduct = vi.fn().mockImplementation(async () => Promise.resolve(cardModal));
    render(<Card card={card1} />);
    const title = screen.getByText('My best card');
    expect(title).toBeInTheDocument();
    expect(screen.queryByText(/test-find-gender/)).not.toBeInTheDocument();
    await userEvent.click(title);
    expect(await screen.findByText(/test-find-gender/)).toBeInTheDocument();
    const closeButton = screen.getByText('X');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveClass('close-button');
    await userEvent.click(closeButton);
    expect(screen.queryByText(/test-find-gender/)).not.toBeInTheDocument();
  });
});
