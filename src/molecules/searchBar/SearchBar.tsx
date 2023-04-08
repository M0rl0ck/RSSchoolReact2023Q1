import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from '../../atoms/button/Button';
import './searchBar.css';

const SEARCH_STORAGE_KEY = 'searchValue';
interface ISearch {
  searchvalue: string;
}
interface ISearchFormProps {
  callback: (search: string) => void;
}

export default function SearchForm({ callback }: ISearchFormProps) {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem(SEARCH_STORAGE_KEY) || ''
  );

  useEffect(() => {
    callback(searchValue);
  }, [searchValue, callback]);

  const { register, handleSubmit } = useForm<ISearch>();

  const onSubmit: SubmitHandler<ISearch> = (data) => {
    setSearchValue(data.searchvalue);
    localStorage.setItem(SEARCH_STORAGE_KEY, data.searchvalue);
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
