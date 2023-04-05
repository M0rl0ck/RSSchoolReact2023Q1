import React from 'react';
import ICard from 'infostructure/ICard';
import './card.css';

interface ICardProp {
  card: ICard;
}

export default function Card({ card }: ICardProp) {
  return (
    <div className="card-container">
      <img src={card.image} alt="IMAGE" />
      <h2 className="card-price">Price: {card.price}</h2>
      <h3 className="card-title">{card.title}</h3>
      <p className="card-category">Category: {card.category}</p>
      <div
        className={card.rating.rate > 4 ? 'card-rate card-rate_red' : 'card-rate card-rate_green'}
      >
        Rate: {card.rating.rate}
      </div>
    </div>
  );
}
