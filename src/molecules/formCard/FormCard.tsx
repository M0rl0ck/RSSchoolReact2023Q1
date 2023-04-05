import IFormCard from '../../infostructure/IFormCard';
import React from 'react';
import './formCard.css';

interface IFormCardProp {
  card: IFormCard;
}

export default function FormCard({ card }: IFormCardProp) {
  return (
    <div className="form__card-container">
      <div className="form__logo-container">
        <img src={card.img} alt="IMAGE" />
      </div>
      <div className="form__card-info-container">
        <h2 className="form__card-name">Name: {card.name}</h2>
        <h3 className="form__card-date">Birthday: {card.date}</h3>
        <p className="form__card-category">Country: {card.country}</p>
        <p className="form__card-category">Gender: {card.gender}</p>
      </div>
    </div>
  );
}
