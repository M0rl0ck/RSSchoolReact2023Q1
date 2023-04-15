import React, { useState } from 'react';
import ICharacterCard from '../../infostructure/ICharacterCard';
import './card.css';
import Modal from '../../molecules/Modal/Modal';
import BasicCard from '../../molecules/basicCard/BasicCard';
import CharacterModalCard from '../../molecules/characterModalCard/CharacterModalCard';

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
      <BasicCard card={card} />
      {isModal && (
        <Modal callback={closeModal}>
          <CharacterModalCard id={card.id} />
        </Modal>
      )}
    </div>
  );
}
