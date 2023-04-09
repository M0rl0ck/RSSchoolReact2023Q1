import React from 'react';
import ICharacterCard from '../../infostructure/ICharacterCard';

interface IBasicCardProp {
  card: ICharacterCard;
}

export default function BasicCard({ card }: IBasicCardProp) {
  return (
    <>
      <img src={card.image} alt="IMAGE" />
      <h2 className="card-name-character">{card.name}</h2>
      <p className="card-character">Status: {card.status}</p>
      <p className="card-character">Species: {card.species}</p>
    </>
  );
}
