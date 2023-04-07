import React from 'react';
import ICharacterModalCard from '../../infostructure/ICharacterModalCard';
import BasicCard from '../../molecules/basicCard/BasicCard';

interface CharacterModalCardProp {
  card: ICharacterModalCard | null;
}

export default function CharacterModalCard({ card }: CharacterModalCardProp) {
  if (!card) return null;
  return (
    <div className="card-container">
      <BasicCard card={card} />
      <p className="card-character">Type: {card.type || '--'}</p>
      <p className="card-character">Origin: {card.origin.name || '--'}</p>
      <p className="card-character">Gender: {card.gender}</p>
    </div>
  );
}
