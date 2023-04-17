import SearchBar from '../../organisms/searchBar/SearchBar';
import React from 'react';
import Card from '../../molecules/card/Card';
import './mainPage.css';
import CardsList from '../../organisms/cardsList/CardsList';
import Spinner from '../../atoms/spinner/Spinner';
import NotFind from '../../atoms/notFind/NotFind';
import { mainCardsApi } from '../../store/API/mainCardsApi';
import { useAppSelector } from '../../store/hooks/hooks';

export default function MainPage() {
  const { searchValue } = useAppSelector((state) => state.mainSearchValue);
  const { isError, isFetching, data } = mainCardsApi.useGetAllCardsQuery(searchValue);
  return (
    <>
      <div className="main-page">
        <div className="container">
          <h2 className="page-header">Main page</h2>
          <SearchBar />
          {isFetching && <Spinner />}
          {isError && <NotFind />}
          {!isFetching && !isError && data && (
            <CardsList cards={data.results} class_name={'cards-container'} Component={Card} />
          )}
        </div>
      </div>
    </>
  );
}
