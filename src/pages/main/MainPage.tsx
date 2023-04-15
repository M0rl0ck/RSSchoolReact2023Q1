import SearchBar from '../../molecules/searchBar/SearchBar';
import React, { useCallback, useState } from 'react';
import Card from '../../molecules/card/Card';
import './mainPage.css';
import connector from '../../utils/connector/Connector';
import ICharacterCard from '../../infostructure/ICharacterCard';
import CardsList from '../../organisms/cardsList/CardsList';
import Spinner from '../../atoms/spinner/Spinner';
import NotFind from '../../atoms/notFind/NotFind';
import { useAppSelector } from '../../store/hooks/hooks';

export default function MainPage() {
  const { cards, isLoading } = useAppSelector((state) => state.mainCards);
  // const [cards, setCards] = useState<ICharacterCard[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // async function getCards(search: string) {
  //   setCards([]);
  //   setIsLoading(true);
  //   const cards = await connector.getProducts(search);
  //   setCards(cards);
  //   setIsLoading(false);
  // }

  // const memoizedCallback = useCallback((search: string) => {
  //   getCards(search);
  // }, []);
  return (
    <>
      <div className="main-page">
        <div className="container">
          <h2 className="page-header">Main page</h2>
          <SearchBar />
          {isLoading && <Spinner />}
          {!cards.length && !isLoading && <NotFind />}
          <CardsList cards={cards} class_name={'cards-container'} Component={Card} />
        </div>
      </div>
    </>
  );
}
