import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './searchBar.css';

const SEARCH_STORAGE_KEY = 'searchValue';
interface ISearch {
  searchvalue: string;
}

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem(SEARCH_STORAGE_KEY) || ''
  );

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const { register, handleSubmit } = useForm<ISearch>();

  const onSubmit: SubmitHandler<ISearch> = (data) => {
    setSearchValue(data.searchvalue);
    localStorage.setItem(SEARCH_STORAGE_KEY, data.searchvalue);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="search" defaultValue={searchValue} {...register('searchvalue')} />
      <input type="submit" className="submit-button" />
    </form>
  );
}
