import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from '../../atoms/button/Button';
import './searchBar.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getCards } from '../../store/redusers/ActionCreator';
import { mainCardSlice } from '../../store/redusers/mainCardSlice';

const SEARCH_STORAGE_KEY = 'searchValue';
interface ISearch {
  searchvalue: string;
}
interface ISearchFormProps {
  callback: (search: string) => void;
}

export default function SearchForm() {
  const dispatch = useAppDispatch();
  const { setSeatchValue } = mainCardSlice.actions;
  const { searchValue } = useAppSelector((state) => state.mainCards);

  // useEffect(() => {
  //   callback(searchValue);
  // }, [searchValue, callback]);

  const { register, handleSubmit } = useForm<ISearch>();

  const onSubmit: SubmitHandler<ISearch> = (data) => {
    dispatch(setSeatchValue(data.searchvalue));
    dispatch(getCards(data.searchvalue));
  };
  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="search"
        className="search-bar"
        defaultValue={searchValue}
        {...register('searchvalue')}
      />
      <SubmitButton className="search-button" text="Search" />
    </form>
  );
}
