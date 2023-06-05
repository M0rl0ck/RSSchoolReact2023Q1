import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from '../../atoms/button/Button';
import './searchBar.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { mainSearchSlice } from '../../store/redusers/mainSearchSlice';

interface ISearch {
  searchvalue: string;
}

export default function SearchForm() {
  const dispatch = useAppDispatch();
  const { setSeatchValue } = mainSearchSlice.actions;
  const { searchValue } = useAppSelector((state) => state.mainSearchValue);

  const { register, handleSubmit } = useForm<ISearch>();

  const onSubmit: SubmitHandler<ISearch> = (data) => {
    dispatch(setSeatchValue(data.searchvalue));
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
