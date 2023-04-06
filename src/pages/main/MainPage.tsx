import SearchBar from '../../atoms/searchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import Card from '../../molecules/card/Card';
import './mainPage.css';
import connector from '../../utils/connector/Connector';
import ICharacterCard from '../../infostructure/ICharacterCard';
import CardsList from '../../organisms/cardsList/CardsList';

export default function MainPage() {
  const [cards, setCards] = useState<ICharacterCard[]>([]);

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
