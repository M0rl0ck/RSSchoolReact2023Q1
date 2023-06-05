import React from 'react';
import { screen } from '@testing-library/react';
import MainPage from './MainPage';
import ICharacterCard from '../../infostructure/ICharacterCard';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderWithProviders } from '../../store/utils/test-utils';
import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

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

  const handlers = [
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ results: cards }), ctx.delay(30));
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('render main page', async () => {
    renderWithProviders(<MainPage />);
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
