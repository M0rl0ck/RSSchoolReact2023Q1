import React, { useState } from 'react';
import ICharacterCard from '../../infostructure/ICharacterCard';
import './card.css';
import CardModal from '../../molecules/cardModal/CardModal';

interface ICardProp {
  card: ICharacterCard;
}

export default function Card({ card }: ICardProp) {
  const [isModal, setIsModal] = useState(false);
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModal(false);
  };
  const openModal = () => {
    setIsModal(true);
  };
  return (
    <div className="card-container" onClick={openModal}>
      <img src={card.image} alt="IMAGE" />
      <h2 className="card-name-character">{card.name}</h2>
      <p className="card-character">Status: {card.status}</p>
      <p className="card-character">Species: {card.species}</p>
      <p className="card-character">Gender: {card.gender}</p>
      <p className="card-character">Type: {card.type || '--'}</p>
      <p className="card-character">Origin: {card.origin.name || '--'}</p>
      {isModal && <CardModal id={card.id} callback={closeModal} />}
    </div>
  );
}
