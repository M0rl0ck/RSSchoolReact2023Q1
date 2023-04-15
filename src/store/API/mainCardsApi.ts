import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICharacterCard from '../../infostructure/ICharacterCard';
import ICharacterModalCard from '../../infostructure/ICharacterModalCard';

interface GetCardsRequest {
  results: ICharacterCard[];
}

const mainCardsApi = createApi({
  reducerPath: 'mainCardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getAllCards: build.query<GetCardsRequest, string>({
      query: (search = '') => ({
        url: '/character',
        params: {
          name: search,
        },
      }),
    }),
    getCard: build.query<ICharacterModalCard, number>({
      query: (id) => ({
        url: `/character/${id.toString()}`,
      }),
    }),
  }),
});

export { mainCardsApi };
