import SearchBar from '../../molecules/searchBar/SearchBar';
import React, { useCallback, useState } from 'react';
import Card from '../../molecules/card/Card';
import './mainPage.css';
import connector from '../../utils/connector/Connector';
import ICharacterCard from '../../infostructure/ICharacterCard';
import CardsList from '../../organisms/cardsList/CardsList';

export default function MainPage() {
  const [cards, setCards] = useState<ICharacterCard[]>([]);

  async function getCards(search: string) {
    const cards = await connector.getProducts(search);
    setCards(cards);
  }

  const memoizedCallback = useCallback((search: string) => {
    getCards(search);
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="container">
          <h2 className="page-header">Main page</h2>
          <SearchBar callback={memoizedCallback} />
          <CardsList cards={cards} class_name={'cards-container'} Component={Card} />
        </div>
      </div>
    </>
  );
}
