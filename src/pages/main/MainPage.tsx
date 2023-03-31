import SearchBar from '../../base/searchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import Card from '../../base/card/Card';
import './mainPage.css';
import connector from '../../utils/connector/Connector';
import ICard from '../../infostructure/ICard';
import CardsList from '../../components/cardsList/CardsList';

export default function MainPage() {
  const [cards, setCards] = useState<ICard[]>([]);

  async function getCards() {
    const cards = await connector.getProducts();
    setCards(cards);
  }

  useEffect(() => {
    getCards();
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="container">
          <h2>Main page</h2>
          <SearchBar />
          <CardsList cards={cards} class_name={'cards-container'} Component={Card} />
        </div>
      </div>
    </>
  );
}
