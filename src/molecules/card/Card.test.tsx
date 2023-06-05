import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ICharacterCard from '../../infostructure/ICharacterCard';
import ICharacterModalCard from '../../infostructure/ICharacterModalCard';
import { renderWithProviders } from '../../store/utils/test-utils';
import Card from './Card';
import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

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

  const handlers = [
    rest.get('https://rickandmortyapi.com/api/character/10', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(cardModal), ctx.delay(30));
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('Render card', () => {
    renderWithProviders(<Card card={card1} />);
    expect(screen.getByText('My best card')).toBeInTheDocument();
    expect(screen.getByText('My best card')).toHaveClass('card-name-character');
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toHaveClass('card-character');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://path-to-img');
  });
  it('open modal', async () => {
    renderWithProviders(<Card card={card1} />);
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
