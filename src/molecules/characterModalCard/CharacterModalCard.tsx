import React from 'react';
import BasicCard from '../../molecules/basicCard/BasicCard';
import { mainCardsApi } from '../../store/API/mainCardsApi';
import Spinner from '../../atoms/spinner/Spinner';

interface CharacterModalCardProp {
  id: number;
}

export default function CharacterModalCard({ id }: CharacterModalCardProp) {
  const { isError, data, isFetching } = mainCardsApi.useGetCardQuery(id);
  console.log(id);
  if (!data) return null;
  return (
    <>
      {isFetching && (
        <div className="card-container">
          <Spinner />
        </div>
      )}
      {!isError && data && (
        <div className="card-container">
          <BasicCard card={data} />
          <p className="card-character">Type: {data.type || '--'}</p>
          <p className="card-character">Origin: {data.origin.name || '--'}</p>
          <p className="card-character">Gender: {data.gender}</p>
        </div>
      )}
    </>
  );
}
