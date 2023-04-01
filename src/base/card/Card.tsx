import React from 'react';
import ICard from 'infostructure/ICard';
import './card.css';

interface CardProp {
  card: ICard;
}

export default class Card extends React.Component<CardProp> {
  card: ICard;
  constructor(props: CardProp) {
    super(props);
    this.card = props.card;
  }
  render() {
    return (
      <div className="card-container">
        <img src={this.card.image} alt="IMAGE" />
        <h2 className="card-price">Price: {this.card.price}</h2>
        <h3 className="card-title">{this.card.title}</h3>
        <p className="card-category">Category: {this.card.category}</p>
        <div
          className={
            this.card.rating.rate > 4 ? 'card-rate card-rate_red' : 'card-rate card-rate_green'
          }
        >
          Rate: {this.card.rating.rate}
        </div>
      </div>
    );
  }
}
