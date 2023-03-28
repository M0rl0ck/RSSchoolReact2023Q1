import React, { useEffect, useState } from 'react';
import connector from '../../utils/connector/Connector';
import Card from '../../base/card/Card';
import ICard from '../../infostructure/ICard';
import './cards.css';

export default function () {
  const [cards, setCards] = useState<ICard[]>([]);

  async function getCards() {
    const cards = await connector.getProducts();
    setCards(cards);
  }

  useEffect(() => {
    getCards();
  }, []);
  return (
    <div className="cards-container">
      {cards.map((card: ICard) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
