import React from 'react';
import connector from '../../utils/connector/Connector';
import Card from '../../base/card/Card';
import ICard from '../../infostructure/ICard';
import './cards.css';

export default class Cards extends React.Component {
  state = { cards: [] };

  async getCards() {
    const cards = await connector.getProducts();
    this.setState({ cards: cards });
  }

  componentDidMount(): void {
    this.getCards();
  }
  render() {
    return (
      <div className="cards-container">
        {this.state.cards.map((card: ICard) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    );
  }
}
