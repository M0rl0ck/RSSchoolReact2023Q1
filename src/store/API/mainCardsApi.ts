import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICharacterCard from '../../infostructure/ICharacterCard';
import ICharacterModalCard from '../../infostructure/ICharacterModalCard';

interface GetCardsRequest {
  results: ICharacterCard[];
}
const BaseUrl = 'https://rickandmortyapi.com/api';
const CharacterUrl = '/character';

const mainCardsApi = createApi({
  reducerPath: 'mainCardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (build) => ({
    getAllCards: build.query<GetCardsRequest, string>({
      query: (search = '') => ({
        url: CharacterUrl,
        params: {
          name: search,
        },
      }),
    }),
    getCard: build.query<ICharacterModalCard, number>({
      query: (id) => ({
        url: `${CharacterUrl}/${id.toString()}`,
      }),
    }),
  }),
});

export { mainCardsApi };
