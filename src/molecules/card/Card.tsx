import React, { useState } from 'react';
import ICharacterCard from '../../infostructure/ICharacterCard';
import ICharacterModalCard from '../../infostructure/ICharacterModalCard';
import './card.css';
import Modal from '../../molecules/Modal/Modal';
import BasicCard from '../../molecules/basicCard/BasicCard';
import CharacterModalCard from '../../molecules/characterModalCard/CharacterModalCard';
import connector from '../../utils/connector/Connector';

interface ICardProp {
  card: ICharacterCard;
}

export default function Card({ card }: ICardProp) {
  const [isModal, setIsModal] = useState(false);
  const [modalCard, setModalCard] = useState<ICharacterModalCard | null>(null);
  const getModalCard = async (id: number) => {
    setModalCard(await connector.getProduct(id));
  };
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModal(false);
  };
  const openModal = () => {
    setIsModal(true);
    getModalCard(card.id);
  };
  return (
    <div className="card-container" onClick={openModal}>
      <BasicCard card={card} />
      {isModal && (
        <Modal callback={closeModal}>
          <CharacterModalCard card={modalCard} />
        </Modal>
      )}
    </div>
  );
}
